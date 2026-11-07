---
title: "What determines the power and speed of a computational model?"
summary: "Which features of a model change what it can compute, and which change the resources it needs to do so?"
status: "foundational reading"
domains: ["Computational Complexity","Models of Computation"]
featuredOrder: 5
relatedInvestigations: []
relatedNotes: []
---

While exploring [Kewen Wu's technical report on quantum advantages through Fourier growth](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-39.html), I came across the idea of characterizing what allows quantum speedups. It made me wonder which features of computational models allow them to produce speedups.

I want to distinguish what a model can compute from the resources it needs. How do its allowed operations, access to inputs, randomness, parallelism, and representation of information affect the comparison? What assumptions make that comparison fair? Quantum computation is what led me here, but the question feels broader than quantum computing.

## Papers I am exploring

[Grier, Morris, and Wu's *The Robustness of QAC0*](https://arxiv.org/abs/2610.02154) connects directly to the role of allowed gates and error. It studies constant-depth quantum circuits, including exact computation and restricted gate sets. I want to understand how its conclusions depend on the model, including the availability of polynomially many copies of the classical input in its exact simulation result.

[Poremba, Quek, and Shor's *The Learning Stabilizers with Noise problem*](https://arxiv.org/abs/2410.18953) raises a different issue: the task has quantum inputs, so ordinary decision classes alone do not describe it. The paper studies decoding noisy stabilizer codes, algorithms in different noise regimes, and evidence of hardness. It is a lead for understanding how input representation changes the complexity question, rather than evidence that quantum computers make every decoding problem easy.

[Chen, Gong, Haferkamp, and Quek's *Information-Computation Gaps in Quantum Learning via Low-Degree Likelihood*](https://arxiv.org/abs/2505.22743) looks relevant for a similar reason. It asks when information in quantum data can be extracted efficiently and how the allowed measurements can change the difficulty. This gives me another way to think about how access to information and the rules of a model affect what can actually be computed.

These are specific directions to explore as I build the necessary background.
