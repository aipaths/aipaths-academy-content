---
# Unique semantic identifier (links EN/ES versions)
content_id: "blogs-rag-documentation-chatbot"

# Locale
locale: "en"

# SEO & Display
title: "Build a Documentation Chatbot with Claude and RAG"
description: "Learn how to build a production-ready documentation chatbot using Claude AI and RAG. Complete tutorial with vector databases, embeddings, and deployment tips."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-10-20T00:00:00Z"
updatedAt: "2025-10-20T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/blogs/007_rag-documentation-chatbot/hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - claude
  - tutorial
  - rag
  - vector-database
  - automation

# Reading time estimate
readingTime: 15
---

Documentation is often scattered across Notion, Confluence, Google Docs, and multiple wikis. Developers spend hours searching for answers that should take seconds. Sound familiar?

Studies show that development teams waste an estimated 20-40% of their time searching for information. Questions like "How do I authenticate with our payment API?" or "What's the error handling pattern for background jobs?" shouldn't require digging through dozens of documents.

The solution? A RAG-powered documentation chatbot using Claude AI. This tutorial will show you how to build a working prototype in two weeks or less. Once deployed, these systems typically handle 100+ queries daily and can reduce documentation search time by 70-80%.

**What you'll learn:**
- What RAG is and why it's perfect for documentation
- How to build a documentation chatbot from scratch
- Setting up vector databases and embeddings
- Integrating Claude API for intelligent responses
- Production deployment and cost optimization
- Common pitfalls and how to avoid them

**Time to read:** 15 minutes
**Skill level:** Intermediate
**Prerequisites:** Basic Python knowledge, API experience, familiarity with databases

## What is RAG and Why Use It?

RAG (Retrieval Augmented Generation) is a technique that combines document search with AI generation. Instead of relying solely on an AI model's training data, RAG:

1. **Retrieves** relevant documents from your knowledge base
2. **Augments** the AI prompt with that context
3. **Generates** an answer based on your actual documentation

Think of it as giving Claude a photographic memory of your docs plus the intelligence to synthesize answers.

### Why RAG Beats Alternatives

**Fine-tuning?** Expensive, time-consuming, and stale the moment docs change.

**Prompt stuffing?** Limited by context windows and costs.

**RAG?** Dynamic, cost-effective, and always current.

### The Architecture We'll Build

```
User Question
    ↓
Query → Vector Database (find relevant docs)
    ↓
Top Results + Question → Claude API
    ↓
Intelligent Answer (with sources)
```

Simple, effective, production-ready.

## Prerequisites and Setup

Before we dive in, let's get our environment ready.

### What You'll Need

**Required:**
- Python 3.9+ installed
- Anthropic API key ([get one here](https://console.anthropic.com))
- Pinecone account (free tier works) or alternative vector DB
- 30 minutes of focused time

**Optional but Recommended:**
- Docker (for local development)
- Vercel/Railway account (for deployment)
- GitHub repo (for version control)

### Project Setup

```bash
# Create project directory
mkdir doc-chatbot
cd doc-chatbot

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Create project structure
mkdir -p src/{data,embeddings,retrieval,generation}
touch src/__init__.py
touch src/main.py
touch requirements.txt
touch .env

# Initialize git
git init
echo "venv/" >> .gitignore
echo ".env" >> .gitignore
echo "__pycache__/" >> .gitignore
```

### Install Dependencies

```bash
# requirements.txt
anthropic==0.18.1
pinecone-client==3.0.0
python-dotenv==1.0.0
openai==1.12.0  # For embeddings
beautifulsoup4==4.12.0  # For parsing docs
markdown==3.5.0
tiktoken==0.5.2
fastapi==0.109.0  # For API server
uvicorn==0.27.0
```

Install everything:

```bash
pip install -r requirements.txt
```

### Environment Variables

Create your `.env` file:

```bash
# .env
ANTHROPIC_API_KEY=sk-ant-xxxxx
OPENAI_API_KEY=sk-xxxxx  # For embeddings
PINECONE_API_KEY=xxxxx
PINECONE_ENVIRONMENT=us-west1-gcp
PINECONE_INDEX_NAME=docs-chatbot
```

> **Security Note:** Never commit `.env` to version control. Use secret management in production (AWS Secrets Manager, Vercel environment variables, etc.)

## Step 1: Preparing Your Documentation

RAG is only as good as the documents you feed it. Let's prepare high-quality documentation chunks.

### Loading Documents

```python
# src/data/loader.py
import os
from pathlib import Path
from typing import List, Dict
import markdown
from bs4 import BeautifulSoup

class DocumentLoader:
    """Load and parse documentation from various sources."""

    def __init__(self, docs_dir: str):
        self.docs_dir = Path(docs_dir)

    def load_markdown_files(self) -> List[Dict[str, str]]:
        """Load all markdown files from directory."""
        documents = []

        for md_file in self.docs_dir.rglob("*.md"):
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

                # Convert markdown to text
                html = markdown.markdown(content)
                text = BeautifulSoup(html, 'html.parser').get_text()

                documents.append({
                    'content': text,
                    'source': str(md_file.relative_to(self.docs_dir)),
                    'filename': md_file.name
                })

        return documents

    def load_from_url(self, url: str) -> Dict[str, str]:
        """Load documentation from a URL (for web scraping)."""
        # Implementation for web scraping
        # Add requests, beautifulsoup parsing
        pass

# Usage
loader = DocumentLoader("./docs")
documents = loader.load_markdown_files()
print(f"Loaded {len(documents)} documents")
```

### Chunking Strategy

Documents need to be split into chunks that fit in embeddings and provide good context.

```python
# src/data/chunker.py
from typing import List, Dict
import tiktoken

class DocumentChunker:
    """Split documents into optimal chunks for RAG."""

    def __init__(self,
                 chunk_size: int = 512,
                 chunk_overlap: int = 50,
                 encoding_name: str = "cl100k_base"):
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap
        self.encoding = tiktoken.get_encoding(encoding_name)

    def chunk_document(self, document: Dict[str, str]) -> List[Dict[str, str]]:
        """Split a document into chunks with overlap."""
        text = document['content']
        tokens = self.encoding.encode(text)

        chunks = []
        start = 0

        while start < len(tokens):
            # Get chunk
            end = start + self.chunk_size
            chunk_tokens = tokens[start:end]
            chunk_text = self.encoding.decode(chunk_tokens)

            chunks.append({
                'content': chunk_text,
                'source': document['source'],
                'filename': document['filename'],
                'chunk_index': len(chunks)
            })

            # Move to next chunk with overlap
            start += self.chunk_size - self.chunk_overlap

        return chunks

    def chunk_documents(self, documents: List[Dict]) -> List[Dict]:
        """Chunk all documents."""
        all_chunks = []

        for doc in documents:
            chunks = self.chunk_document(doc)
            all_chunks.extend(chunks)

        return all_chunks

# Usage
chunker = DocumentChunker(chunk_size=512, chunk_overlap=50)
chunks = chunker.chunk_documents(documents)
print(f"Created {len(chunks)} chunks from {len(documents)} documents")
```

### Why These Parameters?

- **512 tokens per chunk**: Balances context vs. specificity
- **50 token overlap**: Prevents losing context at boundaries
- **Metadata preservation**: Source tracking for citations

> **Pro Tip:** Adjust chunk size based on your docs. API references? Smaller chunks (256). Conceptual guides? Larger chunks (1024).

## Step 2: Creating Embeddings

Embeddings convert text into vectors that capture semantic meaning. Similar concepts have similar vectors.

### Setting Up OpenAI Embeddings

We'll use OpenAI's `text-embedding-3-small` model—it's fast, cheap, and excellent for RAG.

```python
# src/embeddings/embedder.py
from typing import List, Dict
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

class DocumentEmbedder:
    """Generate embeddings for document chunks."""

    def __init__(self, model: str = "text-embedding-3-small"):
        self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.model = model
        self.dimension = 1536  # Dimension for text-embedding-3-small

    def embed_text(self, text: str) -> List[float]:
        """Generate embedding for a single text."""
        response = self.client.embeddings.create(
            model=self.model,
            input=text
        )
        return response.data[0].embedding

    def embed_chunks(self, chunks: List[Dict], batch_size: int = 100) -> List[Dict]:
        """Generate embeddings for chunks in batches."""
        embedded_chunks = []

        for i in range(0, len(chunks), batch_size):
            batch = chunks[i:i + batch_size]
            texts = [chunk['content'] for chunk in batch]

            # Batch embedding request
            response = self.client.embeddings.create(
                model=self.model,
                input=texts
            )

            # Add embeddings to chunks
            for chunk, embedding_data in zip(batch, response.data):
                chunk_with_embedding = chunk.copy()
                chunk_with_embedding['embedding'] = embedding_data.embedding
                embedded_chunks.append(chunk_with_embedding)

            print(f"Embedded {len(embedded_chunks)}/{len(chunks)} chunks")

        return embedded_chunks

# Usage
embedder = DocumentEmbedder()
embedded_chunks = embedder.embed_chunks(chunks)
```

### Cost Considerations

**OpenAI Embeddings Pricing:**
- `text-embedding-3-small`: $0.02 / 1M tokens
- Example: 1,000 chunks × 500 tokens = 500,000 tokens = $0.01

**Total embedding cost for most documentation:** $0.01 - $0.10 one-time.

> **Pro Tip:** Only re-embed documents when they change. Cache embeddings to avoid repeated costs.

## Step 3: Setting Up Vector Database

Pinecone is a managed vector database perfect for RAG. It's fast, scalable, and has a generous free tier.

### Initialize Pinecone

```python
# src/retrieval/vector_store.py
from typing import List, Dict, Tuple
import pinecone
import os
from dotenv import load_dotenv

load_dotenv()

class VectorStore:
    """Manage vector storage and retrieval with Pinecone."""

    def __init__(self, index_name: str = None):
        # Initialize Pinecone
        pinecone.init(
            api_key=os.getenv("PINECONE_API_KEY"),
            environment=os.getenv("PINECONE_ENVIRONMENT")
        )

        self.index_name = index_name or os.getenv("PINECONE_INDEX_NAME")

        # Create index if it doesn't exist
        if self.index_name not in pinecone.list_indexes():
            pinecone.create_index(
                name=self.index_name,
                dimension=1536,  # Must match embedding dimension
                metric="cosine"  # Cosine similarity for semantic search
            )

        self.index = pinecone.Index(self.index_name)

    def upsert_chunks(self, chunks: List[Dict], batch_size: int = 100):
        """Upload embedded chunks to Pinecone."""
        vectors = []

        for i, chunk in enumerate(chunks):
            vector_id = f"chunk_{i}"

            vectors.append({
                'id': vector_id,
                'values': chunk['embedding'],
                'metadata': {
                    'content': chunk['content'],
                    'source': chunk['source'],
                    'filename': chunk['filename'],
                    'chunk_index': chunk['chunk_index']
                }
            })

            # Upsert in batches
            if len(vectors) >= batch_size:
                self.index.upsert(vectors=vectors)
                print(f"Upserted {len(vectors)} vectors")
                vectors = []

        # Upsert remaining
        if vectors:
            self.index.upsert(vectors=vectors)
            print(f"Upserted {len(vectors)} vectors")

        print(f"✓ Total vectors in index: {self.index.describe_index_stats()['total_vector_count']}")

    def search(self, query_embedding: List[float], top_k: int = 5) -> List[Dict]:
        """Search for similar chunks."""
        results = self.index.query(
            vector=query_embedding,
            top_k=top_k,
            include_metadata=True
        )

        # Format results
        chunks = []
        for match in results['matches']:
            chunks.append({
                'content': match['metadata']['content'],
                'source': match['metadata']['source'],
                'score': match['score']
            })

        return chunks

# Usage
vector_store = VectorStore()
vector_store.upsert_chunks(embedded_chunks)
```

### Alternative: Using Chroma (Local Vector DB)

If you prefer a local solution, Chroma is excellent:

```python
# Alternative: Using Chroma
import chromadb
from chromadb.config import Settings

client = chromadb.Client(Settings(
    chroma_db_impl="duckdb+parquet",
    persist_directory="./chroma_db"
))

collection = client.create_collection(name="docs")
collection.add(
    embeddings=[chunk['embedding'] for chunk in embedded_chunks],
    documents=[chunk['content'] for chunk in embedded_chunks],
    metadatas=[{'source': chunk['source']} for chunk in embedded_chunks],
    ids=[f"chunk_{i}" for i in range(len(embedded_chunks))]
)
```

**Pinecone vs. Chroma:**
- **Pinecone**: Cloud-hosted, scalable, managed, free tier: 1 index + 100K vectors
- **Chroma**: Local, free, great for development, requires self-hosting for production

## Step 4: Building the RAG Pipeline

Now we connect everything: query → retrieve → generate answer.

### Creating the RAG System

```python
# src/generation/rag.py
from typing import List, Dict
from anthropic import Anthropic
import os
from dotenv import load_dotenv

load_dotenv()

class RAGChatbot:
    """RAG-powered documentation chatbot using Claude."""

    def __init__(self, vector_store, embedder):
        self.vector_store = vector_store
        self.embedder = embedder
        self.claude = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
        self.model = "claude-3-5-sonnet-20241022"

    def retrieve_context(self, question: str, top_k: int = 5) -> List[Dict]:
        """Retrieve relevant documentation chunks."""
        # Embed the question
        question_embedding = self.embedder.embed_text(question)

        # Search vector database
        results = self.vector_store.search(question_embedding, top_k=top_k)

        return results

    def generate_answer(self, question: str, context_chunks: List[Dict]) -> Dict[str, any]:
        """Generate answer using Claude with retrieved context."""

        # Format context
        context_text = "\n\n---\n\n".join([
            f"Source: {chunk['source']}\n{chunk['content']}"
            for chunk in context_chunks
        ])

        # Build prompt
        prompt = f"""You are a helpful documentation assistant. Answer the user's question based on the provided documentation excerpts.

Documentation Context:
{context_text}

User Question: {question}

Instructions:
- Answer based ONLY on the provided documentation
- If the documentation doesn't contain enough information, say so
- Include source references in your answer
- Be concise but complete
- Use examples from the docs when helpful

Answer:"""

        # Call Claude API
        response = self.claude.messages.create(
            model=self.model,
            max_tokens=2048,
            temperature=0.3,  # Lower temperature for factual accuracy
            messages=[{
                "role": "user",
                "content": prompt
            }]
        )

        return {
            'answer': response.content[0].text,
            'sources': [chunk['source'] for chunk in context_chunks],
            'model': self.model,
            'usage': {
                'input_tokens': response.usage.input_tokens,
                'output_tokens': response.usage.output_tokens
            }
        }

    def answer_question(self, question: str, top_k: int = 5) -> Dict:
        """End-to-end RAG: retrieve + generate."""
        # Step 1: Retrieve relevant docs
        context_chunks = self.retrieve_context(question, top_k=top_k)

        # Step 2: Generate answer
        result = self.generate_answer(question, context_chunks)

        return result

# Usage
chatbot = RAGChatbot(vector_store, embedder)
result = chatbot.answer_question("How do I authenticate with the payment API?")

print(f"Answer: {result['answer']}\n")
print(f"Sources: {', '.join(result['sources'])}")
print(f"Tokens: {result['usage']['input_tokens']} in, {result['usage']['output_tokens']} out")
```

### Testing the Chatbot

```python
# test_chatbot.py
def test_chatbot():
    questions = [
        "How do I authenticate with the API?",
        "What's the error handling pattern?",
        "How do I deploy to production?",
        "What database do we use?",
        "How do I run tests?"
    ]

    for question in questions:
        print(f"\n{'='*60}")
        print(f"Q: {question}")
        print(f"{'='*60}")

        result = chatbot.answer_question(question)

        print(f"A: {result['answer']}")
        print(f"\nSources: {', '.join(result['sources'])}")
        print(f"Cost: ~${calculate_cost(result['usage']):.4f}")

def calculate_cost(usage):
    # Claude 3.5 Sonnet pricing (Nov 2024)
    INPUT_COST = 3.00 / 1_000_000   # $3 per million tokens
    OUTPUT_COST = 15.00 / 1_000_000  # $15 per million tokens

    return (usage['input_tokens'] * INPUT_COST +
            usage['output_tokens'] * OUTPUT_COST)

test_chatbot()
```

## Step 5: Building the API Server

Let's wrap our chatbot in a production-ready API using FastAPI.

### Creating the API

```python
# src/main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from src.generation.rag import RAGChatbot
from src.retrieval.vector_store import VectorStore
from src.embeddings.embedder import DocumentEmbedder

app = FastAPI(title="Documentation Chatbot API")

# Initialize components
vector_store = VectorStore()
embedder = DocumentEmbedder()
chatbot = RAGChatbot(vector_store, embedder)

class QuestionRequest(BaseModel):
    question: str
    top_k: Optional[int] = 5

class AnswerResponse(BaseModel):
    answer: str
    sources: List[str]
    confidence: str
    usage: dict

@app.post("/ask", response_model=AnswerResponse)
async def ask_question(request: QuestionRequest):
    """Answer a question about the documentation."""
    try:
        result = chatbot.answer_question(
            question=request.question,
            top_k=request.top_k
        )

        # Determine confidence based on source relevance
        confidence = "high" if len(result['sources']) >= 3 else "medium"

        return AnswerResponse(
            answer=result['answer'],
            sources=result['sources'],
            confidence=confidence,
            usage=result['usage']
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy"}

@app.get("/stats")
async def get_stats():
    """Get chatbot statistics."""
    stats = vector_store.index.describe_index_stats()
    return {
        "total_documents": stats['total_vector_count'],
        "index_name": vector_store.index_name,
        "status": "operational"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### Testing the API

```bash
# Start the server
python -m src.main

# Test in another terminal
curl -X POST "http://localhost:8000/ask" \
  -H "Content-Type: application/json" \
  -d '{"question": "How do I authenticate with the API?"}'
```

### Adding Error Handling

```python
# Enhanced error handling
from functools import wraps
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def handle_errors(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        try:
            return await func(*args, **kwargs)
        except Exception as e:
            logger.error(f"Error in {func.__name__}: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"An error occurred: {str(e)}"
            )
    return wrapper

@app.post("/ask")
@handle_errors
async def ask_question(request: QuestionRequest):
    # Implementation...
    pass
```

## Step 6: Deployment

Let's deploy this to production.

### Option 1: Deploy to Railway

Railway offers zero-config deployments perfect for APIs.

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

Create `railway.json`:

```json
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn src.main:app --host 0.0.0.0 --port $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Option 2: Deploy to Vercel (Serverless)

```python
# api/ask.py - Vercel serverless function
from fastapi import FastAPI
from mangum import Mangum
from src.main import app

handler = Mangum(app)
```

`vercel.json`:

```json
{
  "builds": [
    {
      "src": "api/ask.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/ask.py"
    }
  ]
}
```

Deploy:

```bash
vercel --prod
```

### Option 3: Docker Deployment

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Expose port
EXPOSE 8000

# Run application
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:

```bash
docker build -t doc-chatbot .
docker run -p 8000:8000 --env-file .env doc-chatbot
```

## Cost Breakdown

Let's talk numbers. Here's what running this chatbot costs in production:

### One-Time Setup Costs

**Embedding generation:**
- 1,000 doc chunks × 500 tokens = 500K tokens
- OpenAI embeddings: $0.02 / 1M tokens
- **Total: ~$0.01**

### Monthly Operating Costs

**Scenario: 1,000 queries/month**

**Claude API (answering):**
- Average: 2,000 input tokens + 500 output tokens per query
- Input: 1,000 × 2,000 = 2M tokens × $3/M = $6
- Output: 1,000 × 500 = 500K tokens × $15/M = $7.50
- **Claude total: $13.50/month**

**OpenAI (query embeddings):**
- 1,000 queries × 50 tokens = 50K tokens
- **Embeddings: $0.001/month**

**Pinecone (vector database):**
- Free tier: 1 index, 100K vectors
- Paid tier: $70/month (if needed)
- **Vector DB: $0 - $70/month**

**Total: $13.51 - $83.51/month for 1,000 queries**

**Per-query cost: $0.014 - $0.084**

### Cost Optimization Tips

1. **Cache common queries**: Save 30-50% on repeated questions
2. **Reduce top_k**: Fewer retrieved chunks = lower Claude costs
3. **Use Claude Haiku for simple queries**: 10x cheaper for straightforward questions
4. **Batch processing**: Update embeddings weekly, not real-time
5. **Self-host vectors**: Use Chroma instead of Pinecone for &lt;10K docs

## Improving Your Chatbot

### Adding Conversation Memory

```python
class ConversationalRAG(RAGChatbot):
    """RAG chatbot with conversation history."""

    def __init__(self, vector_store, embedder):
        super().__init__(vector_store, embedder)
        self.conversations = {}  # Store by session_id

    def answer_with_history(self,
                            question: str,
                            session_id: str,
                            top_k: int = 5) -> Dict:
        """Answer with conversation context."""

        # Get conversation history
        history = self.conversations.get(session_id, [])

        # Retrieve context
        context_chunks = self.retrieve_context(question, top_k)

        # Build messages with history
        messages = history + [{
            "role": "user",
            "content": self._build_prompt(question, context_chunks)
        }]

        # Generate response
        response = self.claude.messages.create(
            model=self.model,
            max_tokens=2048,
            messages=messages
        )

        # Update history
        history.append({
            "role": "user",
            "content": question
        })
        history.append({
            "role": "assistant",
            "content": response.content[0].text
        })

        self.conversations[session_id] = history[-10:]  # Keep last 5 exchanges

        return {
            'answer': response.content[0].text,
            'sources': [c['source'] for c in context_chunks],
            'session_id': session_id
        }
```

### Adding Streaming Responses

```python
@app.post("/ask/stream")
async def ask_question_stream(request: QuestionRequest):
    """Stream answer as it's generated."""

    async def generate():
        context_chunks = chatbot.retrieve_context(request.question)
        prompt = chatbot._build_prompt(request.question, context_chunks)

        with chatbot.claude.messages.stream(
            model=chatbot.model,
            max_tokens=2048,
            messages=[{"role": "user", "content": prompt}]
        ) as stream:
            for text in stream.text_stream:
                yield f"data: {text}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")
```

### Adding Feedback Loop

```python
class FeedbackStore:
    """Store user feedback to improve responses."""

    def __init__(self):
        self.feedback = []

    def add_feedback(self, question: str, answer: str, rating: int, comment: str = ""):
        """Store feedback for analysis."""
        self.feedback.append({
            'timestamp': datetime.now(),
            'question': question,
            'answer': answer,
            'rating': rating,  # 1-5
            'comment': comment
        })

    def get_poor_responses(self) -> List[Dict]:
        """Identify responses that need improvement."""
        return [f for f in self.feedback if f['rating'] <= 2]

@app.post("/feedback")
async def submit_feedback(question: str, rating: int, comment: str = ""):
    """Submit feedback on a response."""
    feedback_store.add_feedback(question, rating, comment)
    return {"status": "received"}
```

## Troubleshooting Common Issues

### Issue 1: Poor Answer Quality

**Symptoms:** Chatbot gives generic or incorrect answers.

**Solutions:**
1. **Check chunk quality**: Verify chunks contain complete thoughts
2. **Increase top_k**: Retrieve more context (try 7-10)
3. **Adjust chunk size**: Larger chunks (1024 tokens) for conceptual docs
4. **Improve prompt**: Add examples of good answers
5. **Filter low-confidence results**: Ignore matches with score < 0.7

```python
def retrieve_context(self, question: str, top_k: int = 5, min_score: float = 0.7):
    """Retrieve with confidence filtering."""
    results = self.vector_store.search(question_embedding, top_k=top_k)

    # Filter low-confidence results
    filtered = [r for r in results if r['score'] >= min_score]

    if len(filtered) < 2:
        logger.warning(f"Low confidence results for: {question}")

    return filtered
```

### Issue 2: Slow Response Times

**Symptoms:** Queries take >5 seconds.

**Solutions:**
1. **Use Claude Haiku**: 3x faster for simple queries
2. **Reduce max_tokens**: Lower to 1024 if answers are verbose
3. **Cache embeddings**: Don't re-embed queries
4. **Optimize vector search**: Use approximate nearest neighbors
5. **Add response streaming**: Start returning before completion

### Issue 3: High Costs

**Symptoms:** API bills higher than expected.

**Solutions:**
1. **Implement caching**: Cache common queries
2. **Switch models**: Use Haiku for 50% of queries
3. **Reduce context**: Lower top_k to 3
4. **Batch updates**: Don't re-embed unchanged docs
5. **Set usage limits**: Cap tokens per request

```python
# Add simple caching
from functools import lru_cache
import hashlib

def cache_key(question: str) -> str:
    return hashlib.md5(question.lower().encode()).hexdigest()

@lru_cache(maxsize=1000)
def cached_answer(question_hash: str, question: str) -> Dict:
    return chatbot.answer_question(question)

# Usage
result = cached_answer(cache_key(question), question)
```

### Issue 4: Missing Context

**Symptoms:** "I don't have information about that" for known topics.

**Solutions:**
1. **Verify embeddings**: Check all docs were embedded
2. **Test search directly**: Query Pinecone directly to debug
3. **Improve document preprocessing**: Remove noise, preserve structure
4. **Add metadata filtering**: Search specific doc sections
5. **Expand synonyms**: Handle terminology variations

```python
# Add metadata filtering
def search_with_filters(self, query_embedding: List[float],
                        filter_dict: Dict = None) -> List[Dict]:
    """Search with metadata filters."""
    results = self.index.query(
        vector=query_embedding,
        top_k=5,
        filter=filter_dict,  # e.g., {"source": {"$eq": "api-docs.md"}}
        include_metadata=True
    )
    return results
```

## Production Best Practices

### 1. Monitoring and Logging

```python
import logging
from datetime import datetime

class ChatbotMonitor:
    """Monitor chatbot performance and usage."""

    def __init__(self):
        self.metrics = {
            'queries': 0,
            'errors': 0,
            'total_tokens': 0,
            'avg_response_time': 0
        }

    def log_query(self, question: str, result: Dict, duration: float):
        """Log query metrics."""
        self.metrics['queries'] += 1
        self.metrics['total_tokens'] += (
            result['usage']['input_tokens'] +
            result['usage']['output_tokens']
        )

        # Update average response time
        self.metrics['avg_response_time'] = (
            (self.metrics['avg_response_time'] * (self.metrics['queries'] - 1) + duration)
            / self.metrics['queries']
        )

        logging.info({
            'timestamp': datetime.now().isoformat(),
            'question': question,
            'duration': duration,
            'tokens': result['usage'],
            'sources': result['sources']
        })
```

### 2. Rate Limiting

```python
from fastapi import Request
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(429, _rate_limit_exceeded_handler)

@app.post("/ask")
@limiter.limit("10/minute")  # 10 requests per minute per IP
async def ask_question(request: Request, question_request: QuestionRequest):
    # Implementation...
    pass
```

### 3. Health Checks and Retries

```python
from tenacity import retry, stop_after_attempt, wait_exponential

class RobustRAGChatbot(RAGChatbot):
    """RAG chatbot with retry logic."""

    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(multiplier=1, min=2, max=10)
    )
    def generate_answer(self, question: str, context_chunks: List[Dict]) -> Dict:
        """Generate answer with automatic retries."""
        return super().generate_answer(question, context_chunks)
```

### 4. Security

```python
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi import Security

security = HTTPBearer()

def verify_token(credentials: HTTPAuthorizationCredentials = Security(security)):
    """Verify API token."""
    if credentials.credentials != os.getenv("API_TOKEN"):
        raise HTTPException(status_code=401, detail="Invalid token")
    return credentials

@app.post("/ask")
async def ask_question(
    request: QuestionRequest,
    credentials: HTTPAuthorizationCredentials = Security(verify_token)
):
    # Implementation...
    pass
```

## Conclusion

You now have a production-ready documentation chatbot powered by Claude and RAG. This architecture is battle-tested, cost-effective, and scales from startup to enterprise.

**Key takeaways:**
- RAG combines document retrieval with AI generation for accurate, source-backed answers
- Vector databases enable semantic search over your documentation
- Claude excels at synthesizing context into clear, helpful responses
- Costs are predictable: ~$0.01-0.08 per query for most use cases
- Start simple, then add features like conversation memory and streaming
- Monitor usage, implement caching, and optimize based on real data

### What's Next?

**Immediate improvements:**
1. Add your company's documentation and test with real questions
2. Implement caching to reduce costs by 30-50%
3. Set up monitoring and alerts
4. Deploy to production with proper authentication

**Advanced enhancements:**
1. Add multi-language support for international teams
2. Integrate with Slack/Discord for easy access
3. Build a feedback loop to continuously improve responses
4. Add document auto-refresh when docs update
5. Implement hybrid search (semantic + keyword)

**Related topics to explore:**
- Fine-tuning embeddings for domain-specific terminology
- Multi-modal RAG (search images, diagrams, code)
- Agentic RAG (chatbot that can take actions)
- RAG evaluation metrics and benchmarking

## Further Reading

- [Anthropic Claude API Documentation](https://docs.anthropic.com/)
- [Pinecone RAG Guide](https://www.pinecone.io/learn/retrieval-augmented-generation/)
- [OpenAI Embeddings Best Practices](https://platform.openai.com/docs/guides/embeddings)
- [FastAPI Production Best Practices](https://fastapi.tiangolo.com/deployment/)

## Resources

**Tools Used:**
- [Claude API](https://www.anthropic.com/api)
- [Pinecone Vector Database](https://www.pinecone.io/)
- [OpenAI Embeddings API](https://platform.openai.com/)
- [FastAPI](https://fastapi.tiangolo.com/)

---

**Built a documentation chatbot?** Share your results and any improvements you made!

**Questions or stuck on a step?** Drop a comment below or [open an issue on GitHub](https://github.com/aipaths/aipaths-academy-content/issues)!

**Want to see more RAG tutorials?** Let us know what use cases interest you—customer support, research assistants, code documentation?
