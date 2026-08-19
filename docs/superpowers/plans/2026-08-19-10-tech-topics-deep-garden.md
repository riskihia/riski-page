# 10 Tech Topics Deep Interconnected Digital Garden Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a comprehensive, deeply-written, fully interconnected 10-topic Technology Digital Garden in Quartz 5 following the complete Garden Life-Cycle (Seeds -> Sprouts -> Plants -> Interlinked Knowledge Graph).

**Architecture:** For each of the 10 technology topics, generate a private Seed Note (`02 - Seeds/`), a private Sprout Note (`03 - Sprouts/`), and a published Deep Evergreen Plant Note (`04 - Plants/<Category>/`) containing code examples, Mermaid architectural diagrams, callout blocks, and explicit `[[WikiLinks]]` cross-referencing related topics.

**Tech Stack:** Quartz 5 SSG, Markdown, Mermaid.js, YAML Frontmatter.

## Global Constraints
- Target directory: `content/`
- Explicit publish: `publish: true` on Plant notes (`04 - Plants/`), `publish: false` on Seeds (`02 - Seeds/`) and Sprouts (`03 - Sprouts/`).
- Every Plant note must contain at least 1 Mermaid diagram, code examples, callout blocks, and `[[WikiLinks]]` to other notes.

---

### Task 1: Topic 1 - AI & LLM Engineering Series

**Files:**
- Create: `content/02 - Seeds/RAG dan Agentic Workflows.md`
- Create: `content/03 - Sprouts/Desain Pipeline Vector Database dan Chunking.md`
- Modify: `content/04 - Plants/01 - AI & LLMs/AI & LLMs.md`

**Interfaces:**
- Produces: Interconnected notes for AI & LLMs with `[[RAG dan Agentic Workflows]]` links

- [ ] **Step 1: Write Seed Note (02 - Seeds)**
Create `content/02 - Seeds/RAG dan Agentic Workflows.md` (`publish: false`).

- [ ] **Step 2: Write Sprout Note (03 - Sprouts)**
Create `content/03 - Sprouts/Desain Pipeline Vector Database dan Chunking.md` (`publish: false`).

- [ ] **Step 3: Write Deep Plant Note (04 - Plants)**
Update `content/04 - Plants/01 - AI & LLMs/AI & LLMs.md` (`publish: true`) with deep technical explanation of RAG, Vector Embeddings, Hybrid Search, Agentic Loops (ReAct pattern), code snippets, Mermaid diagram, and WikiLinks.

- [ ] **Step 4: Commit Task 1**
Run `git add content/ ; git commit -m "feat(garden): add deep AI & LLM Engineering series"`

---

### Task 2: Topic 2 - System Design & Architecture Series

**Files:**
- Create: `content/02 - Seeds/Event Driven vs Request Driven.md`
- Create: `content/03 - Sprouts/Message Broker Kafka vs RabbitMQ.md`
- Modify: `content/04 - Plants/02 - System Design/System Design.md`

**Interfaces:**
- Produces: Interconnected notes for System Design with `[[Event Driven vs Request Driven]]` links

- [ ] **Step 1: Write Seed & Sprout Notes**
Create `content/02 - Seeds/Event Driven vs Request Driven.md` and `content/03 - Sprouts/Message Broker Kafka vs RabbitMQ.md` (`publish: false`).

- [ ] **Step 2: Write Deep Plant Note**
Update `content/04 - Plants/02 - System Design/System Design.md` (`publish: true`) with deep analysis of Microservices, Event-Driven Architecture, Outbox Pattern, CAP Theorem, Mermaid sequence diagram, and code examples.

- [ ] **Step 3: Commit Task 2**
Run `git add content/ ; git commit -m "feat(garden): add deep System Design & Architecture series"`

---

### Task 3: Topic 3 - Modern Frontend Engineering Series

**Files:**
- Create: `content/02 - Seeds/Web Performance Metrics.md`
- Create: `content/03 - Sprouts/Server Components vs Client Components.md`
- Modify: `content/04 - Plants/04 - Frontend/Frontend.md`

**Interfaces:**
- Produces: Interconnected notes for Frontend Engineering

- [ ] **Step 1: Write Seed & Sprout Notes**
Create `content/02 - Seeds/Web Performance Metrics.md` and `content/03 - Sprouts/Server Components vs Client Components.md` (`publish: false`).

- [ ] **Step 2: Write Deep Plant Note**
Update `content/04 - Plants/04 - Frontend/Frontend.md` (`publish: true`) covering Core Web Vitals (LCP, INP, CLS), Code Splitting, React Server Components (RSC), Hydration, Code snippets, and Mermaid diagram.

- [ ] **Step 3: Commit Task 3**
Run `git add content/ ; git commit -m "feat(garden): add deep Modern Frontend Engineering series"`

---

### Task 4: Topic 4 - Database Engineering Series

**Files:**
- Create: `content/02 - Seeds/Optimasi Query SQL.md`
- Create: `content/03 - Sprouts/Indexing B-Tree dan GIN di PostgreSQL.md`
- Modify: `content/04 - Plants/05 - Databases/Databases.md`

**Interfaces:**
- Produces: Interconnected notes for Database Engineering

- [ ] **Step 1: Write Seed & Sprout Notes**
Create `content/02 - Seeds/Optimasi Query SQL.md` and `content/03 - Sprouts/Indexing B-Tree dan GIN di PostgreSQL.md` (`publish: false`).

- [ ] **Step 2: Write Deep Plant Note**
Update `content/04 - Plants/05 - Databases/Databases.md` (`publish: true`) covering PostgreSQL Indexing, EXPLAIN ANALYZE, Redis Caching Patterns, Connection Pooling, SQL code snippets, and Mermaid diagram.

- [ ] **Step 3: Commit Task 4**
Run `git add content/ ; git commit -m "feat(garden): add deep Database Engineering series"`

---

### Task 5: Task 5-10 Batch Deep Content Generation & Index Integration

**Files:**
- Modify: Categories 06-10 in `content/04 - Plants/`
- Modify: `content/index.md`

**Interfaces:**
- Produces: Fully linked Knowledge Map linking all 10 topics, seeds, sprouts, and plants

- [ ] **Step 1: Write Deep Plant Notes for DevOps, Security, Performance, Clean Code, & Dev Productivity**
Update Category index notes in `04 - Plants/` (06 to 10) with deep technical content, code snippets, Mermaid diagrams, and WikiLinks.

- [ ] **Step 2: Verify Build & Links**
Run `npx quartz build` and verify that all 10 topics build with 0 errors and interconnect seamlessly.

- [ ] **Step 3: Commit Task 5**
Run `git add content/ ; git commit -m "feat(garden): complete deep content for all 10 technology topics"`
