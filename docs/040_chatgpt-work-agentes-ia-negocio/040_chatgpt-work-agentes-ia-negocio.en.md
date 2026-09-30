---
content_id: "docs-chatgpt-work-agentes-ia-negocio"
locale: "en"
title: "ChatGPT Work, Codex, Projects, and Tasks: A Complete Guide"
description: "A complete guide to ChatGPT Work, Codex, Projects, Scheduled Tasks, and choosing local or cloud workflows for your work and permission needs."
author: "AIPaths Academy"
publishedAt: "2026-07-30T16:42:24Z"
updatedAt: "2026-07-30T16:42:24Z"
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/040_chatgpt-work-agentes-ia-negocio/hero.png"
tags:
  - chatgpt
  - codex
  - ai-agents
  - automation
  - productivity
  - beginner
  - guide
readingTime: 25
---

> A structured explanation for beginners of the main ways to work with ChatGPT and the difference between using local resources and cloud services.

**Last reviewed: July 30, 2026.**

> **Availability:** Work, local or remote Codex, Projects, Scheduled Tasks, apps, and memory may vary by plan, region, device, and workspace policies. Check the options available in your account before designing a critical workflow.

## Overview

The simplest way to understand the ChatGPT ecosystem is to separate **five concepts**:

1. **Chat**: converse, ask questions, and think things through together.
2. **Work**: carry out longer jobs and produce finished deliverables.
3. **Codex**: work specifically with code, repositories, and development tools.
4. **Projects**: keep the context of a topic or initiative organized.
5. **Scheduled Tasks**: have ChatGPT run something later, on a recurring basis, or when a condition changes.

There is also a second dimension, independent of the first:

- **Cloud**: the work runs on infrastructure managed by OpenAI.
- **Local**: with permission, the agent can access files, folders, apps, or commands on your computer.

This distinction is fundamental:

> **Chat, Work, or Codex indicates what type of experience you are using; local or cloud indicates where the resources are and where the actions are executed.**

---

## 1. The most important mental model

Think of ChatGPT as a company with different workers and tools:

| Element | Simple analogy |
|---|---|
| **Chat** | An advisor you talk to |
| **Work** | An assistant who receives an assignment and prepares the result |
| **Codex** | A software developer |
| **Project** | A work folder with context, documents, and instructions |
| **Scheduled Task** | An alarm or automated process |
| **Cloud** | A remote OpenAI office |
| **Local** | Your own desk and computer |

A **Project** is not a worker: it is a container.

A **Scheduled Task** is not a worker either: it is an instruction to run something at another time.

**Chat, Work, and Codex are different ways of interacting with artificial intelligence.**

---

## 2. What Chat is

### Basic idea

**Chat** is the standard conversational ChatGPT experience. It is designed for:

- asking questions;
- receiving explanations;
- finding information;
- generating ideas;
- writing or editing text;
- analyzing a document;
- translating;
- reasoning through a problem;
- having a quick conversation.

### How Chat works

It usually works like this:

1. You write a message.
2. ChatGPT responds.
3. You correct, expand on, or change the direction.
4. ChatGPT continues using the context of the conversation.

It is primarily a dynamic of:

```text
question → answer → new question → new answer
```

Although Chat can use tools—for example, web search, image generation, files, or connected apps—the conversation remains at the center of the experience.

### Suitable examples for Chat

- “Explain what an API is.”
- “Summarize this contract in plain language.”
- “Help me draft an email.”
- “Compare these two options.”
- “Find recent information about this topic.”
- “Teach me Excel from scratch.”
- “Analyze this data and tell me what it means.”

### When Chat may fall short

Chat is not necessarily the best option when an assignment requires:

- many steps;
- working for a longer period;
- consulting multiple sources;
- handling several files;
- creating a complete professional deliverable;
- operating your computer;
- executing commands;
- reviewing an entire software project.

In those cases, you would use **Work** or, when the job involves programming, **Codex**.

---

## 3. What Work is

### Basic idea

**Work** is an agent for longer, more complex, results-oriented jobs.

It is designed not only to answer you, but to **take an assignment, break it down into steps, use tools, and produce a finished result**. It can be used to research, analyze information, and create documents, spreadsheets, presentations, reports, or websites.

### Practical difference between Chat and Work

In Chat, you say:

> “Explain how I should structure a presentation about my business.”

In Work, you say:

> “Analyze these documents and create a 15-slide presentation for investors, with charts, a narrative, risks, and conclusions.”

In the first case, you are looking for guidance. In the second, you are looking for a **finished product**.

### How Work operates

A typical workflow might be:

1. Understand the objective.
2. Review the available files.
3. Research external information.
4. Organize a plan.
5. Analyze the data.
6. Create the deliverable.
7. Validate the result.
8. Provide you with the final file or result.

The difference is not merely that it “reasons more.” It is designed to **execute a workflow**.

### Suitable examples for Work

- Prepare a market report.
- Create an executive presentation.
- Build a spreadsheet.
- Analyze multiple contracts.
- Research competitors.
- Turn notes into a professional document.
- Create a complete project plan.
- Review information from several sources.
- Work with local files when you use the desktop app and grant the appropriate permissions.

### Local Work and cloud Work

**Work does not automatically mean local.** You can use:

- **Cloud Work**: runs the job on OpenAI infrastructure.
- **Local Work**: uses resources on your computer when the app and permissions allow it.

> Work describes the type of agent. Local or cloud describes the environment where it works.

---

## 4. What Codex is

### Basic idea

**Codex is OpenAI's programming agent.** It specializes in:

- writing code;
- understanding repositories;
- fixing bugs;
- running tests and commands;
- reviewing changes;
- modifying files;
- working with Git;
- preparing implementations;
- reviewing pull requests;
- helping publish software.

It can be used from the desktop app, a terminal via Codex CLI, development extensions, and compatible remote environments.

### Difference between Work and Codex

Both can perform long-running jobs. The difference is their specialization:

| Work | Codex |
|---|---|
| General work | Software development |
| Reports | Repositories |
| Presentations | Code |
| Documents | Terminal |
| Spreadsheets | Tests |
| Research | Git |
| Business analysis | Debugging |
| General deliverables | Software changes |

**Work example:**

> “Analyze the sales data and create a presentation for management.”

**Codex example:**

> “Open this repository, identify why login is failing, fix the problem, run the tests, and explain the changes to me.”

### Local Codex

Local Codex can inspect, modify, and run code within the selected directory:

```text
Your computer
└── Project folder
    ├── src/
    ├── tests/
    ├── package.json
    └── README.md
```

With the appropriate permissions, it can:

- open and edit those files;
- run `npm test`;
- use a compiler;
- work with Git;
- create new files;
- analyze terminal errors.

### Remote or cloud Codex, when available

Codex can also work in managed remote environments. It will typically:

1. connect or copy a repository to the remote environment;
2. prepare an isolated environment;
3. perform the work there;
4. produce changes or a diff;
5. let you review those changes;
6. then allow you to incorporate them into the repository.

### Critical difference between local and cloud Codex

**Local Codex** works directly with:

- your folders;
- your Git installation;
- your tools and dependencies;
- your terminal;
- your local credentials, depending on the configuration;
- the exact current state of your computer.

**Remote or cloud Codex, when available,** works in:

- a remote environment;
- a copy or connected version of the repository;
- dependencies installed in that environment;
- permissions and network access defined for the task;
- externally managed infrastructure.

### When to use each one

Use **local Codex** when:

- the files exist only on your PC;
- you need locally installed programs;
- you need to check your exact environment;
- you want to control every change in your local repository.

Choose **remote or cloud Codex, when available,** if:

- you want to delegate a task without keeping your computer busy;
- you want to isolate the work;
- you want to run remote tasks;
- you want multiple tasks to work on different problems;
- the repository is connected and can be reproduced correctly.

---

## 5. ChatGPT and Codex Compared

**ChatGPT** is the general product or platform. Within its ecosystem, you may find:

- Chat;
- Work;
- Projects;
- Scheduled Tasks;
- tools;
- connected apps;
- memory;
- voice.

**Codex** is an experience specialized in software development, linked to your account or plan, but with its own interfaces, history, and workflows.

A useful way to put it would be:

> “I use ChatGPT to work with Chat and Work, and I use Codex within the same ecosystem to program.”

---

## 6. Local vs. cloud

### What cloud means

Cloud means that the work runs on remote servers. Your device sends the necessary context, which may include:

- your instructions;
- attached files;
- authorized data from connected apps;
- a copy of the required repository.

The server processes it and returns the result.

### Advantages of the cloud

- It works from the web or mobile devices.
- It is less dependent on your computer's processing power.
- It can continue in a remote environment.
- It enables synchronization across devices.
- It can run scheduled tasks.
- It can isolate certain jobs.
- It facilitates remote agents and delegated tasks.

### Limitations of the cloud

A cloud agent cannot magically access your computer. It cannot see:

- all your folders;
- your desktop;
- files you have not uploaded;
- programs that are not connected;
- passwords;
- local terminals;
- external drives;
- internal services on your network;

unless there is a tool, connection, or explicit permission that allows it.

### What local means

Local means that an app or agent installed on your computer can interact with resources on the device:

- a folder;
- a repository;
- a terminal;
- an editor;
- an app;
- specific files;
- a window or screen, when the appropriate permissions are in place.

### Local does not mean “without internet”

An agent can read files and run tools locally while consulting a model that runs on external servers.

For example, Codex CLI can operate from your terminal while model requests are processed remotely. “Local” describes where the tools are and where changes are applied; it does not necessarily mean that the entire model runs offline.

### Comparison table

| Question | Local | Cloud |
|---|---|---|
| Where are the main files? | On your PC | In a remote environment or as attachments |
| Can it use your terminal? | Yes, with permission | Only a remote terminal |
| Can it use programs installed on your PC? | Potentially, yes | Not directly |
| Can it keep working without your PC running? | Usually not | Often, yes |
| Does it sync across devices? | Local work may not | Usually, yes |
| Does it automatically have access to your entire PC? | No | No |
| Does it require permissions? | Yes | Yes, for connected sources |
| Is it isolated from your system? | Less | More |

---

## 7. What moves between local and cloud

Imagine that local Codex reviews:

```text
src/login.ts
```

To reason about that file, it usually needs to provide the model with:

- your instruction;
- relevant parts of the code;
- command output;
- error messages;
- differences between versions;
- the necessary context.

This does not mean it automatically sends your entire drive. The scope depends on the selected folder, permissions, configuration, tools, your instructions, and applicable policies.

For security:

- authorize only the necessary folders;
- review commands;
- avoid including secrets;
- handle `.env` files with care;
- review changes before committing them;
- limit network access when possible;
- use test environments.

---

## 8. What Projects Are

### Basic idea

A **Project** is a workspace that keeps the following together:

- conversations;
- files;
- instructions;
- context;
- resources related to the same goal.

### A Project does not perform work on its own

It is a smart folder. Within it, you can start Chat, Work, or other available tools.

### Example

```text
Project: Launching my new store
├── Instructions
│   ├── Respond in Spanish
│   ├── Use a professional tone
│   └── Prioritize customers in the United Kingdom
├── Files
│   ├── business-plan.pdf
│   ├── pricing.xlsx
│   ├── research.docx
│   └── logo.png
└── Chats
    ├── Launch strategy
    ├── Competitor analysis
    ├── Content calendar
    └── Investor presentation
```

### What it is for

Projects are useful when:

- the work lasts weeks or months;
- you have several chats about the same topic;
- you need to reuse documents;
- you want specific instructions;
- you do not want to explain the context from scratch;
- you are developing a repeatable process.

### A common mistake

Instead of creating a single enormous chat that covers strategy, design, suppliers, budget, emails, contracts, and scheduling, it is better to use:

```text
One Project
├── Chat 1: Strategy
├── Chat 2: Budget
├── Chat 3: Suppliers
├── Chat 4: Marketing
└── Chat 5: Risks
```

This way, you share the overall context while keeping each conversation focused.

---

## 9. Projects and memory

Projects and memory are related, but they are not identical.

### General memory

It can help remember preferences that are useful for future conversations:

- you prefer responses in Spanish;
- you are learning programming;
- you run a company;
- you want explanations for beginners.

### Project context

It focuses on a specific initiative:

- its files;
- its instructions;
- its conversations;
- its goals.

The right question is:

> “Should this information be used in many conversations or only within this project?”

**General memory:**

> “I prefer simple, structured explanations.”

**Project instruction:**

> “In this project, all proposals must target the British market and use the brand voice defined in `brand-guide.pdf`.”

Depending on the available options, a project may use more isolated context. The exact configuration may depend on the plan, when it was created, and the workspace policies.

---

## 10. Using Projects Does Not Mean Local Storage

A ChatGPT Project is primarily an entity associated with your cloud account. Even if you access it from the desktop app, its chats, files, and instructions are generally part of the synchronized environment.

Therefore:

> A Project is not a Windows or macOS folder.

You can have:

```text
ChatGPT Project:
“My company website”
```

and also:

```text
Local folder:
C:\Users\Ana\Documents\company-website
```

They may be related, but they are not the same thing. Codex or local Work can work with the local folder; the Project maintains the organizational context.

---

## 11. What Scheduled Tasks are

A **Scheduled Task** lets you ask ChatGPT to do something later. It can be:

1. a one-time task;
2. a recurring task;
3. a periodic check;
4. monitoring for a condition.

### Examples

**One-time reminder:**

> “Remind me to send the report tomorrow at 9:00 a.m.”

**Recurring task:**

> “Every Monday morning, prepare a summary of artificial intelligence news.”

**Monitoring:**

> “Notify me when the price of this product changes.”

**Periodic review:**

> “Every Friday, review my upcoming events and create a preparation checklist.”

### The important point: they run in the cloud

A Scheduled Task must be able to run even if you do not have the chat open or are not at your computer. That is why it operates primarily in the cloud.

It is not the same as Windows Task Scheduler or `cron` on Linux, and it cannot freely run just any local program.

---

## 12. Scheduled Tasks versus Codex automations

They are similar concepts, but they have different goals.

### ChatGPT Scheduled Tasks

They are intended for:

- reminders;
- summaries;
- checks;
- recurring reports;
- monitoring updates;
- personal or knowledge-based activities.

### Codex automations

They are intended for technical workflows:

- reviewing a repository;
- running development processes;
- checking tests;
- conducting technical reviews;
- automating coding tasks.

---

## 13. Important limitations of Scheduled Tasks

### Access to files in a Project

You should not assume that a task created within a Project will automatically be able to read all of its files during each run.

### The associated chat matters

A task may be associated with a conversation. If that conversation is deleted, the task may be paused. Deleting the task does not necessarily delete the conversation.

### Active task limits

The number available depends on the plan and account policies.

### Tool compatibility

Not all ChatGPT experiences and tools necessarily support scheduled tasks. Availability may vary by product and plan.

---

## 14. How all the pieces work together

### Case A: learning a subject

```text
Project: Learning artificial intelligence
├── Files: notes and books
├── Instructions: explain for a beginner
├── Chat: daily questions
├── Work: create a study guide
└── Scheduled Task: send an exercise every morning
```

- Project organizes.
- Chat teaches.
- Work produces the guide.
- Scheduled Task maintains the habit.
- The overall setup can operate primarily in the cloud.

### Case B: analyzing a company

```text
Project: Company X analysis
├── Financial files
├── Research chats
├── Work to create the report
└── Scheduled Task to monitor new developments
```

Work conducts research and creates the deliverable. The scheduled task can monitor public developments, but you should not assume that it will automatically read all the files in the Project.

### Case C: developing software

```text
ChatGPT Project: New application
├── Requirements
├── Research
├── Product decisions
└── Design chats

Local folder:
~/repos/new-application

Local Codex:
- modifies the repository
- runs tests
- checks for errors

Remote or cloud Codex, when available:
- works remotely on delegated tasks
```

The Project retains the conceptual context; Codex works on the code.

### Case D: creating a presentation from local files

```text
Local Work
├── Opens authorized documents
├── Analyzes spreadsheets
├── Creates a presentation
└── Saves the file on your computer
```

This is different from manually uploading each file to a cloud chat.

---

## 15. Uploading files or granting local access

### Uploading a file

1. You select a specific copy.
2. That copy is added to the conversation or Project.
3. ChatGPT works with the uploaded version.
4. Later changes to your local file are not reflected automatically.

If you upload `budget.xlsx` on Monday and modify the original on Tuesday, the uploaded copy will not necessarily be updated.

### Local access

When an agent works directly with an authorized file, for example:

```text
C:\Company\budget.xlsx
```

it can open the current version and, depending on the workflow and permissions, modify it directly. This provides greater capability, but also greater risk.

---

## 16. Connected apps versus local access

A connected app, such as email or a calendar, is not the same as general access to your PC.

### Connected app

ChatGPT uses an authorized integration to access specific information:

- emails;
- events;
- contacts;
- documents from a service;
- business information.

Access is limited by the app’s permissions, the integration’s capabilities, account policies, and administrator controls.

### Local access

The agent interacts with computer resources through the desktop app, the terminal, or other local tools.

```text
Connected Gmail ≠ access to your entire browser
Connected Google Calendar ≠ access to your entire computer
Authorized local folder ≠ access to your entire drive
```

---

## 17. History and synchronization

| Type | Typical synchronization |
|---|---|
| Cloud Chat | Yes |
| Cloud Work | Yes |
| Local Work | May remain on the computer |
| Codex | Separate history or view |
| Project | Associated with the account and synchronized |
| Scheduled Task | Managed from the account |

Exact synchronization and availability may depend on the product, plan, device, and workspace policies.

---

## 18. Privacy and training

There are three different questions that should not be conflated:

1. **Where does the work run?**
2. **Where is the history stored?**
3. **Can the content be used to improve the models?**

They are not the same thing.

### Data controls

Personal accounts have data controls for managing whether new conversations can be used to improve models. Those controls may apply to the account and synchronize across devices.

### Temporary Chat

Temporary chats are designed not to appear in history or create memories. OpenAI may retain data for a limited period for security reasons, in accordance with its current policies.

### Codex

Codex may have specific controls related to its environments and workflows. It is advisable to review both the general ChatGPT settings and Codex’s own settings.

### Business accounts

Business, Enterprise, and Edu accounts, as well as API services, may be subject to data commitments and policies that differ from those for personal accounts. Organization-managed controls may also be in place.

> Because these policies may change, always review the current documentation and settings before working with sensitive information.

---

## 19. How to think about permissions

### Permission to read

> “You can open these files.”

### Permission to write

> “You can modify these files.”

### Permission to execute

> “You can run commands.”

### Network permission

> “You can connect to the internet or to specific domains.”

### App permission

> “You can use Gmail, Calendar, Drive, or another connected app.”

### Permission for external actions

> “You can send, publish, delete, purchase, or modify something outside the analysis environment.”

A useful rule of thumb:

> Reading is generally less risky than writing. Writing is generally less risky than executing. Taking action on external systems requires special care.

---

## 20. What to Choose in Each Situation

### Use Chat when…

- you want an explanation;
- you have a specific question;
- you want to have a conversation;
- you want to review an idea;
- you need a quick piece of writing;
- you want to interpret a document;
- the work can be handled interactively.

### Use Work when…

- you have a clear final outcome in mind;
- you need multiple steps;
- there are multiple files;
- you want a finished document, spreadsheet, presentation, or report;
- you need extensive research;
- you expect the agent to organize and execute the process.

### Use Codex when…

- the main outcome is code;
- there is a repository;
- you need to run tests;
- you need a terminal;
- you want to modify software files;
- you need to debug, review, or implement something.

### Use a Project when…

- the topic will last more than one session;
- there are several documents;
- you want to separate conversations;
- you need persistent instructions;
- you want to share context among chats that are part of the same effort.

### Use Scheduled Tasks when…

- something needs to happen later;
- it needs to recur;
- you want a notification;
- you want to check a condition periodically;
- you want a recurring report.

---

## 21. Simple decision tree

```text
Do you only need an answer or a conversation?
│
├── Yes → Chat
│
└── No
    │
    ├── Is the main outcome software or code?
    │   │
    │   ├── Yes → Codex
    │   │
    │   └── No → Work
    │
    └── Will this work continue for days or weeks?
        │
        ├── Yes → Put it inside a Project
        └── No → It can be a standalone session

Does it need to run later or recur?
│
├── Yes → Scheduled Task
└── No → Normal execution

Does it need to access files or programs on your PC?
│
├── Yes → Local workflow with permissions
└── No → Cloud is usually sufficient
```

---

## 22. Common conceptual mistakes

### Mistake 1: “Work is a folder”

No. Work is an agent or a way of working. A Project is the container.

### Mistake 2: “Codex is just another chat model”

It is more useful to think of it as an agent and a set of interfaces specialized in programming.

### Mistake 3: “Local means nothing leaves my computer”

Not necessarily. The agent can run tools locally while consulting a remote model.

### Mistake 4: “Cloud can automatically see everything on my PC”

No. It requires you to upload files, connect applications, or authorize tools.

### Mistake 5: “A Project works by itself”

No. It organizes context. Chat, Work, or other tools do the work.

### Mistake 6: “Scheduled Tasks can run any local program”

No. It is a ChatGPT cloud automation feature, not a general replacement for the operating system's task scheduler.

### Mistake 7: “If the task is in a Project, it has access to all of the Project's files”

You should not assume that. Access depends on the current capabilities of Scheduled Tasks.

### Mistake 8: “Memory and a Project are the same thing”

No. Memory personalizes the overall experience; a Project groups context for an initiative.

---

## 23. Recommended learning curve

### Level 1: master Chat

Learn to:

- ask specific questions;
- provide context;
- request examples;
- correct the output;
- ask for concise explanations;
- attach a file;
- search for up-to-date information.

**Goal:** use ChatGPT as a tutor and advisor.

### Level 2: learn Projects

Create a Project called:

```text
Learning ChatGPT
```

Add instructions:

```text
Explain everything to me as a beginner.
Use concrete examples.
Define every technical term.
Organize the information from the least to the most difficult.
```

Create separate chats for Fundamentals, Prompts, Projects, Privacy, Codex, and Automation.

**Goal:** preserve context without creating unmanageable conversations.

### Level 3: learn Work

Try this assignment:

> “Use my notes to create a study guide organized into five modules, with exercises and a glossary.”

**Goal:** move from asking for answers to delegating deliverables.

### Level 4: learn Scheduled Tasks

Start with something risk-free:

> “Every Monday morning, remind me to review my goals for the week.”

Then try:

> “Every Friday, prepare a summary of the latest major ChatGPT developments.”

**Goal:** understand the difference between having a conversation now and running something later.

### Level 5: learn Codex in a test repository

Use a small folder:

```text
hello-codex/
├── README.md
├── calculator.py
└── test_calculator.py
```

Ask it to explain the code, add a function, run tests, and show the changes.

**Goal:** understand reading, writing, execution, and review.

### Level 6: combine local and cloud

Try the same type of task in both environments and observe:

- which version of the file it sees;
- where the history appears;
- where the output is saved;
- which permissions it requests;
- whether it can continue with your computer turned off.

---

## 24. Recommended workflow for working safely

Before delegating a task, define:

### 1. Goal

```text
Create a second-quarter sales report.
```

### 2. Permitted sources

```text
sales.xlsx
customers.csv
meeting-notes.docx
```

### 3. Permitted actions

```text
Read files.
Create a report.
Do not modify the originals.
```

### 4. Output location

```text
Save the result as q2-sales-report.docx.
```

### 5. Restrictions

```text
Do not send emails.
Do not publish anything.
Do not delete files.
Do not use data from outside the folder.
```

### 6. Review

```text
Show a summary of the changes and ask for approval before taking any external action.
```

This format works especially well with Work and Codex.

---

## 25. Complete instruction examples

### For Work

```text
Analyze the files in this folder related to second-quarter sales.

Goal:
Create an executive report for management.

You must:
- review the spreadsheets;
- identify trends;
- flag anomalies;
- create three charts;
- write conclusions and recommendations;
- produce a finished Word document.

Restrictions:
- do not modify the original files;
- do not send the report;
- do not use files outside the authorized folder;
- identify any data you cannot verify.
```

### For Codex

```text
Review this repository and determine why the authentication tests are failing.

You must:
- reproduce the failure;
- identify the root cause;
- propose a plan;
- modify only the necessary files;
- run the tests;
- show the final diff;
- do not commit or push;
- do not change dependencies without explaining why.
```

The quality of the output improves when you separate:

- goal;
- scope;
- permissions;
- restrictions;
- output format;
- success criteria.

---

## 26. Final summary

### Chat

Conversation and quick help.

```text
“Explain this to me, help me think, answer, compare.”
```

### Work

General-purpose agent for complex work and deliverables.

```text
“Research, analyze, create, and deliver the result to me.”
```

### Codex

Agent specialized in software.

```text
“Open the repository, modify the code, run tests, and review the changes.”
```

### Projects

Persistent context container.

```text
“Keep the chats, files, and instructions for this initiative together.”
```

### Scheduled Tasks

Future, recurring, or conditional execution.

```text
“Do this tomorrow, every week, or when a change occurs.”
```

### Local

Authorized access to resources on your computer.

```text
“Work with my folders, files, applications, or terminal.”
```

### Cloud

Execution on remote infrastructure.

```text
“Work on remote servers and synchronize the result.”
```

### How all the concepts relate to one another

```text
                         CHATGPT
                            │
          ┌─────────────────┼──────────────────┐
          │                 │                  │
        Chat              Work              Codex
   conversation       general work        programming
          │                 │                  │
          └────────────┬────┴──────────┬───────┘
                       │               │
                    Projects      Scheduled Tasks
                     context       future execution
                       │               │
                       └───────┬───────┘
                               │
                       Local or Cloud
                depending on resources and environment
```

> **Chat converses. Work produces. Codex programs. Projects organize. Scheduled Tasks automate. Local accesses your computer; cloud works on remote servers.**

---

## Official sources

- [ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex)
- [Scheduled Tasks in ChatGPT](https://help.openai.com/en/articles/10291617-tasks-in-chatgpt)
- [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- [ChatGPT Temporary Chat FAQ](https://help.openai.com/en/articles/7730893-chatgpt-temporary-chat-faq)

These pages are the reference for checking current availability, limits, permissions, and data controls.

---

## Note on product changes

ChatGPT, Codex, their plans, permissions, and capabilities evolve over time. For decisions about privacy, availability, limits, or data access, it is advisable to check the official documentation and your account's current settings.
