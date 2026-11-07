---
title: "Which kinds of problems could benefit from quantum computing?"
summary: "If quantum computation offers an advantage, what features of a problem make that advantage possible, and how broadly does it apply?"
status: "foundational reading"
domains: ["Quantum Computing","Algorithms","Computational Complexity"]
featuredOrder: 4
relatedInvestigations: []
relatedNotes: []
---

Even if a quantum advantage can be established in some setting, I do not yet understand its scope. Could quantum computation help with every kind of problem, or only particular families?

I want to understand what structure an algorithm can exploit, how the size of a speedup is measured, and when preparing inputs or reading outputs changes the comparison. This asks where to look for an advantage, alongside the separate question of how to prove one.

## Papers I am exploring

[John Preskill's *Quantum Computing in the NISQ era and beyond*](https://arxiv.org/abs/1801.00862) puts this question in the setting of noisy hardware: what useful tasks remain possible when noise limits circuit size? It offers context for applications and limitations, rather than a general complexity-class separation.

His later perspective, [*Beyond NISQ: The Megaquop Machine*](https://arxiv.org/abs/2502.17368), asks about potential uses of error-corrected machines capable of a million or more quantum operations. Together, these papers give me a way to ask how the prospect of useful quantum computation changes with the available hardware and error correction.

For the proof side, [Wu's thesis on Fourier growth](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-39.html) is a separate lead on problem structure and provable advantages in query and communication models. I want to keep that distinction between a formal resource advantage and a useful application on a realizable machine clear.
