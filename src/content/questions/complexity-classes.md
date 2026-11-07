---
title: "How do P, NP, and BQP relate to one another?"
summary: "I know the informal definitions of these classes. I want to understand how they are related and which relationships are known."
status: "foundational reading"
domains: ["Computational Complexity","Quantum Computing"]
featuredOrder: 3
relatedInvestigations: []
relatedNotes: []
---

I know the informal definitions of P, NP, BQP, PSPACE, BPP, and PP. What I want to understand next is how their relationships are proved, and where our knowledge stops.

I understand P in terms of solving a problem in polynomial time, and NP in terms of checking a short proof of a yes-answer in polynomial time. PSPACE instead limits the memory used to solve the problem. I also have some familiarity with BPP and BQP, where we allow randomness or quantum computation and a bounded chance of error, and with PP, where the probability gap can be much smaller.

The one-third bound in BPP and BQP is a convention. Repetition can reduce the error. I want to understand why that works, and why PP's potentially tiny gap makes a difference.

Which of these classes are known to be inside others, and which relationships are still unknown? What would count as a proof that quantum algorithms can solve some problems in polynomial time that classical algorithms cannot? These are the questions I want to understand next.
