---
title: "Open Source Contributions"
homepageTitle: "Open Source Contributions"
question: "How can quantum software become more reliable for the people using it?"
summary: "Three merged contributions to Qiskit and Cirq covering control-flow angle wrapping, tests for two-qubit block consolidation, and NumPy Generator support."
homepageSummary: "Fixed angle wrapping inside control flow and added circuit consolidation tests in Qiskit. Added NumPy Generator support to Cirq. All three contributions merged upstream."
status: "continuing"
category: "Open Source"
context: "Quantum Software · Qiskit and Cirq"
lastUpdated: 2026-11-09
homepageFeatured: true
modes: ["Investigating", "Implementing", "Testing", "Reviewing"]
relatedQuestions: ["quantum-advantage"]
evidence:
  - label: "Merged Qiskit PR #17259"
    url: "https://github.com/Qiskit/qiskit/pull/17259"
  - label: "Merged Cirq PR #8382"
    url: "https://github.com/quantumlib/Cirq/pull/8382"
  - label: "Merged Qiskit PR #17349"
    url: "https://github.com/Qiskit/qiskit/pull/17349"
  - label: "Qiskit issue #17167"
    url: "https://github.com/Qiskit/qiskit/issues/17167"
  - label: "Qiskit issue #17316"
    url: "https://github.com/Qiskit/qiskit/issues/17316"
  - label: "Cirq issue #8374"
    url: "https://github.com/quantumlib/Cirq/issues/8374"
milestones:
  - date: 2026-09-29
    label: "Cirq contribution merged"
    summary: "Added NumPy Generator support with validation tests in PR #8382."
  - date: 2026-11-03
    label: "Qiskit contribution merged"
    summary: "Fixed WrapAngles inside control flow, with a regression test and release note, in PR #17349."
  - date: 2026-11-09
    label: "Qiskit consolidation tests merged"
    summary: "Added tests for unitary preservation and basis-dependent gate counts in ConsolidateBlocks in PR #17259."
currentBelief: "Small, tested changes can improve quantum software reliability, from handling random generators to applying transpiler passes inside control flow."
evidenceSummary: "Qiskit PRs #17259 and #17349 and Cirq PR #8382 merged upstream. Together they cover basis-gate selection during consolidation, angle wrapping inside control flow, and supported random-generator inputs."
openQuestions: []
featuredOrder: 3
---

## Qiskit block consolidation with an explicit basis gate

I added tests for the `kak_basis_gate` argument to Qiskit's `ConsolidateBlocks` transpiler pass. The first test checks that the pass replaces a two-qubit circuit with a single unitary that preserves the original operation when given CX, CZ, ECR, or iSWAP as the basis gate. After code review, I added a second test that checks whether changing the basis affects the decomposition estimate. For the same two-qubit unitary, the decomposer estimates one CX gate or two iSWAP gates. [Qiskit issue #17167](https://github.com/Qiskit/qiskit/issues/17167)

The tests merged into Qiskit on November 9, 2026. [Qiskit PR #17259](https://github.com/Qiskit/qiskit/pull/17259)

## Qiskit: angle wrapping inside control flow

Qiskit's `WrapAngles` transpiler pass was failing to respect angle bounds inside control flow ([issue #17316](https://github.com/Qiskit/qiskit/issues/17316)). I added the `trivial_recurse` annotation so the pass also processes those nested blocks, along with a regression test and release note.

After revisions through code review, [Qiskit PR #17349](https://github.com/Qiskit/qiskit/pull/17349) was merged on November 3, 2026.

## Cirq: random generator support

I implemented a part of [Cirq issue #8374](https://github.com/quantumlib/Cirq/issues/8374), which called for support for NumPy's modern `numpy.random.Generator` API. The change added the public `PRNG_OR_SEED_LIKE` type and `parse_random_generator` parser, exported the API, and tested supported and invalid inputs. The accepted inputs include integer seeds, `None`, `numpy.random.Generator`, and the existing `numpy.random.RandomState` path.

[Cirq PR #8382](https://github.com/quantumlib/Cirq/pull/8382) was merged into `quantumlib/Cirq` on September 29, 2026. The work was reviewed and updated through the PR process.
