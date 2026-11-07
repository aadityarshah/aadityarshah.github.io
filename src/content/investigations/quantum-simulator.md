---
title: "Quantum state simulator in C"
question: "How do the mathematical objects of quantum computing become a working simulator?"
summary: "Building a simulator from scratch in C: complex arithmetic, single- and multi-qubit state representations, normalization, Bloch-sphere angles, and general quantum operators. Gate and circuit simulation are in progress."
status: "in progress"
category: "Systems"
context: "C · Quantum computing"
homepageFeatured: false
modes: ["Modelling", "Implementing", "Testing"]
relatedQuestions: ["quantum-advantage"]
evidence:
  - label: "GitHub repository"
    url: "https://github.com/aadityarshah/quantum-simulator"
evidenceSummary: "The repository contains source code, mathematical documentation, and tests for the implemented foundations. End-to-end circuit simulation remains in development."
featuredOrder: 7
---

## The question

I am building this simulator to connect the mathematical foundations of quantum computing with their implementation in C, from representing a state to applying an operator.

## Implemented foundations

- Complex-number arithmetic.
- Single- and multi-qubit state representations and normalization.
- Bloch-sphere angle computation for a qubit.
- General quantum operators.

## Work in progress

The next layer is quantum gates, including enforcing unitarity, followed by measurement and circuit simulation. These are development goals, not completed capabilities.

## Validation

The repository includes tests that can be run with `make test`. The current implementation provides the foundations for a circuit simulator. It does not yet demonstrate a verified end-to-end circuit workflow.

The code and documentation are available in the [GitHub repository](https://github.com/aadityarshah/quantum-simulator).
