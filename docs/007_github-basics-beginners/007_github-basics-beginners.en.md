---
# Unique semantic identifier (links EN/ES versions)
content_id: "docs-github-basics-beginners"

# Locale
locale: "en"

# SEO & Display
title: "GitHub Fundamentals: A Beginner's Guide to Version Control"
description: "Learn Git and GitHub from scratch. Complete beginner guide covering repositories, commits, branches, and collaboration workflows."

# Author
author: "AIPaths Academy"

# Publication dates (ISO 8601 format)
publishedAt: "2025-10-02T00:00:00Z"
updatedAt: "2025-10-02T00:00:00Z"

# Cover image
coverImage: "https://raw.githubusercontent.com/aipaths/aipaths-academy-content/main/public/images/docs/default-hero.jpg"

# Tags (canonical lowercase English IDs)
# IMPORTANT: Both EN/ES versions MUST have IDENTICAL tags
tags:
  - beginner
  - github
  - guide
  - collaboration
---

Have you ever accidentally deleted important code? Overwritten a file that was working perfectly? Struggled to collaborate with teammates on the same project without creating conflicts?

These are problems every developer faces—and version control with GitHub solves them all.

GitHub isn't just "where code lives." It's a time machine for your projects, a collaboration platform for teams, and an essential skill for any developer in 2025. Whether you're working solo or with a global team, understanding GitHub fundamentals will transform how you build software.

**What you'll learn:**
- What GitHub is and why it matters
- Understanding commits: your project's save points
- Working with branches: safe experimentation spaces
- Collaborating with teams through pull requests
- Essential GitHub workflows for daily development
- Best practices to avoid common mistakes

**Time to read:** 12 minutes
**Skill level:** Beginner
**Prerequisites:** Basic command line knowledge, a GitHub account (free)

## What is GitHub?

GitHub is a cloud-based platform for version control and collaboration. Think of it as a combination of:

- **Dropbox for code**: Stores your projects in the cloud
- **Time machine**: Tracks every change you've ever made
- **Collaboration hub**: Enables teams to work together without conflicts
- **Portfolio**: Showcases your work to employers and the community

### GitHub vs. Git: What's the Difference?

This confuses many beginners, so let's clarify:

**Git** = The version control system (the engine)
**GitHub** = A website/platform that hosts Git repositories (the garage)

Think of Git as Microsoft Word's "Track Changes" feature, but infinitely more powerful. GitHub is like Google Drive—it hosts your documents (code) online so others can access them.

**Other platforms like GitHub:**
- GitLab
- Bitbucket
- SourceForge

But GitHub is the most popular, with over 100 million developers worldwide.

### Why Use Version Control?

Without version control:
```
my-project/
├── app.js
├── app_v2.js
├── app_v2_final.js
├── app_v2_final_ACTUAL.js
└── app_v2_final_ACTUAL_USE_THIS_ONE.js
```

Sound familiar? Version control eliminates this chaos.

**Real benefits:**
1. **Never lose work**: Every version is saved permanently
2. **Safe experimentation**: Try new features without breaking working code
3. **Team collaboration**: Multiple people work simultaneously without conflicts
4. **Code reviews**: Team members review changes before merging
5. **Professional requirement**: 99% of tech jobs require Git/GitHub knowledge

## Prerequisites and Setup

Before we dive into GitHub concepts, let's get you set up.

### What You'll Need

**Required:**
- A GitHub account (free): [github.com/signup](https://github.com/signup)
- Git installed on your computer
- A terminal/command line application
- 20 minutes to complete the setup

**Optional but Recommended:**
- VS Code or another code editor
- GitHub Desktop (GUI alternative to command line)

### Installing Git

**macOS:**
```bash
# Check if already installed
git --version

# If not installed, use Homebrew
brew install git
```

**Windows:**
Download from [git-scm.com](https://git-scm.com/download/win) or use:
```bash
# Using winget
winget install Git.Git
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install git
```

### Configuring Git

After installation, tell Git who you are:

```bash
# Set your name (appears in commits)
git config --global user.name "Your Name"

# Set your email (must match GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

> **Note**: Use the same email you registered with GitHub. This links your commits to your GitHub profile.

### Creating Your First Repository

Let's create a practice repository:

**Option 1: On GitHub (Recommended for beginners)**

1. Go to [github.com](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it `my-first-repo`
4. Add a description: "Learning GitHub basics"
5. Check "Add a README file"
6. Click "Create repository"

**Option 2: From Your Computer**

```bash
# Create a new directory
mkdir my-first-repo
cd my-first-repo

# Initialize Git repository
git init

# Create a README file
echo "# My First Repository" > README.md

# Add and commit
git add README.md
git commit -m "Initial commit"

# Connect to GitHub (after creating repo on GitHub)
git remote add origin https://github.com/YOUR_USERNAME/my-first-repo.git
git push -u origin main
```

## Understanding Commits: Your Project's Save Points

Commits are the foundation of Git. Think of them as "save points" in a video game—you can always return to any previous state.

### What is a Commit?

A commit is a snapshot of your project at a specific moment. It records:
- **What changed**: Which files were modified, added, or deleted
- **Who changed it**: Author name and email
- **When**: Timestamp
- **Why**: Commit message explaining the changes

### Anatomy of a Commit

```bash
commit a3f4d8e9b2c1f6e7d8a9b0c1d2e3f4g5h6i7j8k9
Author: Jane Doe <jane@example.com>
Date:   Wed Nov 6 10:30:45 2025 -0500

    Add user authentication feature

    - Implement login form
    - Add password hashing
    - Create session management
```

**Breaking it down:**
- **Hash**: Unique identifier (like a fingerprint)
- **Author**: Who made the change
- **Date**: When it was made
- **Message**: Why the change was made

### Creating Your First Commit

```bash
# 1. Check status of your project
git status

# 2. Create or modify a file
echo "Hello, GitHub!" > hello.txt

# 3. Check status again (you'll see "untracked file")
git status

# 4. Stage the file (prepare it for commit)
git add hello.txt

# 5. Commit with a message
git commit -m "Add hello.txt with greeting"

# 6. View commit history
git log
```

### The Three States of Git

Understanding these states is crucial:

```
Working Directory → Staging Area → Repository
    (modified)         (staged)      (committed)
```

1. **Working Directory**: Where you edit files
2. **Staging Area**: Files ready to be committed (use `git add`)
3. **Repository**: Permanently saved commits (use `git commit`)

**Practical example:**

```bash
# Edit a file
echo "More content" >> hello.txt

# Check what changed
git status
# Output: Changes not staged for commit

# Stage the change
git add hello.txt

# Check again
git status
# Output: Changes to be committed

# Commit
git commit -m "Add more content to hello.txt"
```

### Writing Good Commit Messages

**Bad commit messages:**
- ❌ "Update"
- ❌ "Fix stuff"
- ❌ "asdfasdf"
- ❌ "Changes from yesterday"

**Good commit messages:**
- ✅ "Add user login form"
- ✅ "Fix bug in payment processing"
- ✅ "Update API documentation"
- ✅ "Refactor database connection logic"

**Best practices:**
1. **Use imperative mood**: "Add feature" not "Added feature"
2. **Be specific**: Say what you did and why
3. **Keep first line under 50 characters**
4. **Add details in body if needed**

**Example of a detailed commit message:**

```bash
git commit -m "Add password reset functionality

- Create password reset request endpoint
- Implement email sending with reset token
- Add token expiration (24 hours)
- Create password reset confirmation page

Resolves issue #142"
```

### Common Commit Commands

```bash
# View commit history
git log

# View compact history
git log --oneline

# View changes in last commit
git show

# View changes before committing
git diff

# Undo changes in working directory
git checkout -- filename.txt

# Unstage a file (keep changes)
git reset HEAD filename.txt

# Amend last commit (fix message or add files)
git commit --amend -m "New message"
```

> **Warning**: Never amend commits that have been pushed to shared branches. This rewrites history and can cause problems for collaborators.

## Understanding Branches: Safe Experimentation

Branches are one of Git's most powerful features. They let you work on new features without affecting the main codebase.

### What is a Branch?

Think of branches as parallel universes for your code:

```
main branch:    A---B---C---D---E (production code)
                     \
feature branch:       F---G---H (new feature in development)
```

**The main/master branch:**
- Default branch in every repository
- Usually contains production-ready code
- Protected in team environments

### Why Use Branches?

**Scenario without branches:**
You're building a new feature. Halfway through, a critical bug appears in production. You need to fix it NOW, but your code is half-finished and broken.

**Scenario with branches:**
Your new feature is on a separate branch. You switch to `main`, fix the bug, deploy it, then switch back to your feature branch and continue working.

### Creating and Using Branches

```bash
# View all branches (* indicates current branch)
git branch

# Create a new branch
git branch feature/add-login

# Switch to the new branch
git checkout feature/add-login

# Create and switch in one command (recommended)
git checkout -b feature/add-login

# Make changes and commit
echo "Login form" > login.html
git add login.html
git commit -m "Add login form"

# Switch back to main branch
git checkout main

# View all branches with last commit
git branch -v
```

### Branch Naming Conventions

Professional teams use consistent naming:

**Common patterns:**
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Urgent production fixes
- `docs/description` - Documentation changes
- `refactor/description` - Code improvements

**Examples:**
- ✅ `feature/user-authentication`
- ✅ `bugfix/login-validation`
- ✅ `hotfix/payment-crash`
- ✅ `docs/api-endpoints`
- ❌ `my-branch`
- ❌ `test`
- ❌ `new-stuff`

### Merging Branches

Once your feature is complete, merge it back into main:

```bash
# Switch to the branch you want to merge INTO
git checkout main

# Merge the feature branch
git merge feature/add-login

# Delete the feature branch (cleanup)
git branch -d feature/add-login
```

### Handling Merge Conflicts

Conflicts occur when the same lines of code are modified in different branches.

**Example conflict:**

```bash
# You get a merge conflict
git merge feature/add-login

# Git tells you:
CONFLICT (content): Merge conflict in app.js
Automatic merge failed; fix conflicts and then commit the result.
```

**Conflict in file:**

```javascript
function greet() {
<<<<<<< HEAD
    return "Hello, World!";
=======
    return "Hi, there!";
>>>>>>> feature/add-login
}
```

**How to resolve:**

1. Open the file in your editor
2. Decide which version to keep (or combine both)
3. Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Save the file
5. Stage and commit

```bash
# After resolving conflicts manually
git add app.js
git commit -m "Merge feature/add-login - resolve greeting conflict"
```

### Branch Workflows

**Simple workflow (solo developer):**

```bash
main → feature/new-thing → merge back to main
```

**Team workflow (more complex):**

```bash
main (production)
  └── develop (integration)
        ├── feature/login
        ├── feature/payments
        └── bugfix/header-style
```

### Common Branch Commands

```bash
# List all branches
git branch

# List remote branches
git branch -r

# List all branches (local + remote)
git branch -a

# Create branch
git branch feature/my-feature

# Switch branches
git checkout feature/my-feature

# Create and switch
git checkout -b feature/my-feature

# Rename current branch
git branch -m new-branch-name

# Delete branch (safe - prevents deleting unmerged work)
git branch -d feature/my-feature

# Force delete branch (use carefully!)
git branch -D feature/my-feature

# Merge branch into current branch
git merge feature/my-feature

# View merged branches
git branch --merged

# View unmerged branches
git branch --no-merged
```

## Team Collaboration: Working Together

GitHub transforms Git from a solo tool into a collaboration platform. Here's how teams work together.

### Cloning Repositories

When joining a project, you'll clone (download) the repository:

```bash
# Clone a repository
git clone https://github.com/username/repository.git

# Clone into a specific folder
git clone https://github.com/username/repository.git my-folder

# Clone and navigate into it
git clone https://github.com/username/repository.git && cd repository
```

### Pushing and Pulling Changes

**Push**: Upload your commits to GitHub
**Pull**: Download commits from GitHub

```bash
# Push commits to GitHub
git push origin main

# Push a new branch
git push -u origin feature/my-feature

# Pull latest changes
git pull origin main

# Fetch changes without merging
git fetch origin
```

### The Complete Team Workflow

**1. Start with the latest code:**

```bash
git checkout main
git pull origin main
```

**2. Create a feature branch:**

```bash
git checkout -b feature/add-payment-gateway
```

**3. Make changes and commit:**

```bash
# Make changes to files
git add .
git commit -m "Add Stripe payment integration"
```

**4. Push your branch:**

```bash
git push -u origin feature/add-payment-gateway
```

**5. Create a Pull Request on GitHub:**
- Go to your repository on GitHub
- Click "Compare & pull request"
- Add description of changes
- Request reviewers
- Submit

**6. Team reviews your code:**
- Reviewers comment on your code
- Request changes if needed
- You make updates and push again

**7. Merge when approved:**
- Once approved, merge via GitHub interface
- Delete the feature branch

**8. Update your local repository:**

```bash
git checkout main
git pull origin main
git branch -d feature/add-payment-gateway
```

### Pull Requests: Code Review Made Easy

Pull requests (PRs) are GitHub's way of saying "I have changes, please review them."

**What a PR includes:**
- Your changes (diff view)
- Commit history
- Discussion thread
- Review status
- Merge status

**Creating a good PR:**

**Title:**
✅ "Add user authentication with JWT tokens"
❌ "Update"

**Description template:**

```markdown
## What does this PR do?
Adds JWT-based authentication to the API

## Changes made:
- Implement login/logout endpoints
- Add JWT token generation
- Create auth middleware
- Update user model

## How to test:
1. Start the server: `npm start`
2. POST to `/api/login` with credentials
3. Verify token is returned

## Screenshots:
[Attach relevant images]

## Related issues:
Closes #123
```

### Review Best Practices

**As a reviewer:**
- ✅ Be constructive: "Consider using const instead of let here"
- ❌ Don't be rude: "This code is terrible"
- ✅ Explain why: "This could cause memory leaks because..."
- ✅ Ask questions: "Why did you choose this approach?"

**As an author:**
- Don't take criticism personally
- Ask for clarification if unsure
- Make requested changes promptly
- Thank reviewers for their time

## Common GitHub Workflows

Let's put it all together with real-world scenarios.

### Workflow 1: Solo Developer

```bash
# 1. Start a new feature
git checkout -b feature/dark-mode

# 2. Work on feature (repeat as needed)
# ... edit files ...
git add .
git commit -m "Add dark mode toggle button"

# 3. More work
# ... edit files ...
git add .
git commit -m "Implement dark mode styles"

# 4. Feature complete - merge to main
git checkout main
git merge feature/dark-mode

# 5. Push to GitHub
git push origin main

# 6. Cleanup
git branch -d feature/dark-mode
```

### Workflow 2: Team Member on Existing Project

```bash
# 1. Clone the repository (first time only)
git clone https://github.com/team/project.git
cd project

# 2. Always start with latest code
git checkout main
git pull origin main

# 3. Create feature branch
git checkout -b feature/user-profile-page

# 4. Make changes and commit regularly
git add .
git commit -m "Create user profile component"

# 5. Push branch to GitHub
git push -u origin feature/user-profile-page

# 6. Create Pull Request on GitHub
# (Use GitHub web interface)

# 7. Make changes based on review
# ... edit files based on feedback ...
git add .
git commit -m "Address review feedback - add validation"
git push origin feature/user-profile-page

# 8. After PR is merged, cleanup
git checkout main
git pull origin main
git branch -d feature/user-profile-page
```

### Workflow 3: Fixing a Bug in Production

```bash
# 1. Get latest production code
git checkout main
git pull origin main

# 2. Create hotfix branch
git checkout -b hotfix/fix-login-crash

# 3. Fix the bug
# ... edit files ...
git add .
git commit -m "Fix null pointer error in login handler"

# 4. Push and create PR
git push -u origin hotfix/fix-login-crash
# Create PR on GitHub for quick review

# 5. After merge, update local
git checkout main
git pull origin main
git branch -d hotfix/fix-login-crash
```

## Essential Git Commands Cheat Sheet

### Repository Setup

```bash
git init                    # Initialize new repository
git clone <url>             # Clone existing repository
```

### Basic Commands

```bash
git status                  # Check current status
git add <file>              # Stage specific file
git add .                   # Stage all changes
git commit -m "message"     # Commit staged changes
git log                     # View commit history
git log --oneline           # Compact history
```

### Branching

```bash
git branch                  # List branches
git branch <name>           # Create branch
git checkout <name>         # Switch branch
git checkout -b <name>      # Create and switch
git merge <branch>          # Merge branch
git branch -d <name>        # Delete branch
```

### Remote Operations

```bash
git remote add origin <url> # Add remote repository
git push origin <branch>    # Push to remote
git pull origin <branch>    # Pull from remote
git fetch origin            # Fetch without merging
```

### Undoing Changes

```bash
git checkout -- <file>      # Discard working changes
git reset HEAD <file>       # Unstage file
git revert <commit>         # Create new commit that undoes changes
git reset --hard <commit>   # Reset to specific commit (dangerous!)
```

### Useful Commands

```bash
git diff                    # Show unstaged changes
git diff --staged           # Show staged changes
git stash                   # Temporarily save changes
git stash pop               # Restore stashed changes
git tag v1.0.0              # Create version tag
```

## Best Practices for Beginners

### 1. Commit Often, Push Regularly

**Good habit:**
- Commit every logical change
- Push at least once a day
- Don't wait until "everything is perfect"

**Why?**
- Smaller commits are easier to review
- You can't lose work that's pushed
- Team stays updated on progress

### 2. Write Meaningful Commit Messages

**Template:**
```
[Type] Short description (50 chars or less)

More detailed explanation if needed (wrap at 72 characters)

- Bullet points are okay
- Include context about WHY, not just WHAT

Related to issue #123
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation change
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance tasks

### 3. Keep Main Branch Stable

**Rules:**
- Never commit directly to `main` in team projects
- Always use feature branches
- Only merge tested, reviewed code
- `main` should always be deployable

### 4. Pull Before Push

**Always do this:**
```bash
git pull origin main    # Get latest changes
# ... resolve any conflicts ...
git push origin main    # Push your changes
```

**Prevents:**
- Merge conflicts
- Rejected pushes
- Overwriting teammates' work

### 5. Review Your Changes Before Committing

```bash
# Check what you're about to commit
git status
git diff

# Stage files
git add .

# Check staged changes
git diff --staged

# If everything looks good
git commit -m "Your message"
```

### 6. Don't Commit Sensitive Information

**Never commit:**
- Passwords or API keys
- Database credentials
- Private keys or certificates
- `.env` files with secrets

**Use `.gitignore`:**

```bash
# Create .gitignore file
cat > .gitignore << EOF
.env
.env.local
*.log
node_modules/
*.key
*.pem
config/secrets.json
EOF

git add .gitignore
git commit -m "Add .gitignore for sensitive files"
```

### 7. Learn to Read Git Messages

Git tells you what's happening:

```bash
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

**Translation:** You have 2 commits that aren't on GitHub yet. Run `git push`.

## Common Issues & Troubleshooting

### Issue 1: "Fatal: Not a git repository"

**Cause:** You're not in a Git-initialized folder

**Solution:**
```bash
# Check current directory
pwd

# Navigate to correct directory
cd /path/to/your/project

# Or initialize Git here
git init
```

### Issue 2: "Permission denied (publickey)"

**Cause:** SSH keys not set up with GitHub

**Solution:**
```bash
# Use HTTPS instead of SSH for now
git remote set-url origin https://github.com/username/repo.git

# Or set up SSH keys (recommended long-term)
ssh-keygen -t ed25519 -C "your.email@example.com"
# Add the key to GitHub: Settings → SSH Keys → New SSH key
```

### Issue 3: "Your branch is behind 'origin/main'"

**Cause:** Remote has commits you don't have locally

**Solution:**
```bash
# Pull the latest changes
git pull origin main

# If you have local changes, stash them first
git stash
git pull origin main
git stash pop
```

### Issue 4: "Merge conflict in file"

**Cause:** Same lines modified in two branches

**Solution:**
1. Open the conflicted file
2. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Choose which version to keep
4. Remove conflict markers
5. Save file
6. `git add &lt;file&gt;`
7. `git commit -m "Resolve merge conflict"`

### Issue 5: "Failed to push some refs"

**Cause:** Remote has commits you need to pull first

**Solution:**
```bash
# Pull and merge
git pull origin main

# Or pull with rebase (cleaner history)
git pull --rebase origin main

# Then push
git push origin main
```

### Issue 6: Committed to Wrong Branch

**Cause:** Forgot to create/switch to feature branch

**Solution:**
```bash
# Don't push yet! Undo the commit, keep changes
git reset HEAD~1

# Create correct branch
git checkout -b feature/my-feature

# Commit again
git add .
git commit -m "Add feature on correct branch"
```

## Next Steps

You now understand GitHub fundamentals! Here's how to level up:

### Immediate Practice

**Day 1-3: Solo practice**
1. Create a personal project repository
2. Make 10+ commits practicing good messages
3. Create 3+ branches and merge them
4. Push to GitHub and explore the web interface

**Day 4-7: Learn more features**
1. Explore GitHub Issues (task tracking)
2. Try GitHub Actions (automation)
3. Star repositories you like
4. Read other developers' code

**Week 2+: Contribute to projects**
1. Find beginner-friendly open source projects
2. Fork a repository
3. Make a small improvement
4. Submit your first Pull Request

### Resources for Continued Learning

**Interactive tutorials:**
- [GitHub Skills](https://skills.github.com/) - Interactive courses
- [Learn Git Branching](https://learngitbranching.js.org/) - Visual game
- [Git Immersion](https://gitimmersion.com/) - Hands-on labs

**Documentation:**
- [GitHub Docs](https://docs.github.com/) - Official documentation
- [Pro Git Book](https://git-scm.com/book/en/v2) - Free, comprehensive guide

**Practice repositories:**
- [First Contributions](https://github.com/firstcontributions/first-contributions) - Practice your first PR
- [Contribute to Open Source](https://github.com/danthareja/contribute-to-open-source) - Beginner-friendly

### What's Next in Your Git Journey?

**Intermediate topics:**
- Git rebase and interactive rebase
- Cherry-picking commits
- Git hooks for automation
- Advanced merge strategies
- Git submodules

**Team collaboration:**
- Code review best practices
- CI/CD integration
- Semantic versioning
- Release management

**GitHub features:**
- GitHub Actions for CI/CD
- GitHub Projects for project management
- GitHub Wiki for documentation
- GitHub Pages for hosting websites

## Conclusion

GitHub is more than just a tool—it's the foundation of modern software development. By mastering these fundamentals, you've taken a crucial step in your developer journey.

**Key takeaways:**
- **Commits** are snapshots of your project at specific points in time
- **Branches** enable safe experimentation and parallel development
- **Pull Requests** facilitate code review and team collaboration
- **Git workflow** becomes second nature with daily practice
- **Best practices** prevent problems before they start

### Remember:

1. **Everyone was a beginner once** - Even senior developers had to learn Git
2. **You will make mistakes** - That's okay! Git can undo almost anything
3. **Practice makes perfect** - The more you use Git, the more intuitive it becomes
4. **Ask for help** - The developer community is welcoming to learners

Start small, commit often, and don't be afraid to experiment. You've got this!

---

**Questions?** Open an issue or join our community discussions!

**Ready to contribute?** Check out beginner-friendly open source projects!

**Want more?** Follow us for advanced Git tutorials, GitHub Actions workflows, and team collaboration strategies!
