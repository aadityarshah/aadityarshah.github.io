---
title: "Embedded Memory Manager"
question: "How can a small allocator stay predictable as memory pressure and fragmentation increase?"
summary: "A C99 memory manager for a simulated 64 KB embedded RAM, built across four levels: fixed and variable-size allocation, fragmentation control, task quotas and leak scans, then handle-based compaction and out-of-memory recovery."
homepageSummary: "Implemented four levels of a C99 allocator for simulated 64 KB RAM, from fixed-size allocation to compaction and out-of-memory recovery."
status: "complete"
category: "Systems"
context: "C · HackRush 2026"
homepageFeatured: true
modes: ["Allocation", "Fragmentation control", "Task quotas", "Compaction"]
relatedQuestions: []
evidence:
  - label: "GitHub repository"
    url: "https://github.com/aadityarshah/hackrush26-embedded-memory-manager"
milestones: []
openQuestions: []
featuredOrder: 2
---

## The system

This project implements memory-management concepts over a simulated 64 KB embedded memory system. The repository is organized as progressive levels, with each level building on the previous one and introducing another systems concern.

## What I implemented

- **Fixed-size allocation:** blocks with metadata checksum validation.
- **Variable-size allocation:** First-Fit and Best-Fit strategies, block splitting, and coalescing.
- **Task-aware management:** per-task quotas, peak-usage tracking, and leak scanning.
- **Recovery under pressure:** handle-based allocation, heap compaction, and an out-of-memory eviction fallback.

The repository includes runnable C99 programs for each level and a script to run them together. The README records the project structure and build commands.

## Evidence

The source code and runnable levels are available in the [GitHub repository](https://github.com/aadityarshah/hackrush26-embedded-memory-manager).
