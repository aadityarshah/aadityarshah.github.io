---
title: "Can quantum advantage be proved formally?"
summary: "Quantum computing feels intuitively different. I want to understand what would establish an advantage over classical computation, and what exactly such a proof would compare."
status: "foundational reading"
domains: ["Quantum Computing", "Mathematics", "Algorithms"]
featuredOrder: 2
relatedInvestigations: ["quantum-simulator"]
relatedNotes: []
---

I have started exploring computational complexity theory and its intersection with quantum computing. My intuition that quantum computation could offer an advantage comes from the principles of quantum mechanics, mainly superposition. I also wonder whether entanglement can be used to help produce speedups, and what role it plays. I do not yet understand how these ideas translate into a computational advantage, or how far that intuition can be justified.

What would count as a formal proof of quantum advantage? How do claims about a particular algorithm, a restricted model, and general classical computation differ? I want to learn which comparisons are proved, which depend on assumptions, and which remain open.

This is a question I am beginning to study, not a conclusion I have reached.

## Papers I am exploring

These are papers I want to investigate in connection with this question, rather than results I have already worked through.

[Kewen Wu's *Quantum Advantages via Fourier Growth Analysis of Boolean Functions*](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2025/EECS-2025-39.html) is a direct lead: it establishes unconditional exponential quantum advantages in query and communication settings. I want to understand the classical lower bounds and exactly what resource is being compared. Such a separation in a specified model is different from establishing BPP ≠ BQP for ordinary computation.

[Urmila Mahadev's *Classical Verification of Quantum Computations*](https://arxiv.org/abs/1804.01082) motivates a related question: how can a classical computer check a quantum computation? Its interactive protocol relies on the learning-with-errors problem being hard for efficient quantum computers. That is a verification result under a cryptographic assumption, not an unconditional separation of classical and quantum computation, nor a proof that BQP is contained in NP.

[Thomas Vidick's *Verifying quantum computations at scale: A cryptographic leash on quantum devices*](https://www.ams.org/journals/bull/2020-57-01/S0273-0979-2019-01678-4/S0273-0979-2019-01678-4.pdf) is an introduction to Mahadev's result and the complexity, quantum computing, and cryptographic ideas behind it. It looks like a useful route into that verification question, rather than a general survey of every form of quantum advantage.
