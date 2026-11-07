---
title: "Open Source Contributions"
homepageTitle: "Open Source Contributions"
question: "How can quantum software become more reliable for the people using it?"
summary: "Merged contributions to Qiskit and Cirq: correcting angle wrapping inside control flow and adding support for NumPy's modern random generator API, with tests."
homepageSummary: "Fixed control-flow angle wrapping in Qiskit and added NumPy Generator support to Cirq. Both contributions merged upstream."
status: "continuing"
category: "Open Source"
context: "Quantum Software · Qiskit and Cirq"
lastUpdated: 2026-11-03
homepageFeatured: true
modes: ["Investigating", "Implementing", "Testing", "Reviewing"]
relatedQuestions: ["quantum-advantage"]
evidence:
  - label: "Merged Qiskit PR #17349"
    url: "https://github.com/Qiskit/qiskit/pull/17349"
  - label: "Qiskit issue #17316"
    url: "https://github.com/Qiskit/qiskit/issues/17316"
  - label: "Merged Cirq PR #8382"
    url: "https://github.com/quantumlib/Cirq/pull/8382"
  - label: "Cirq issue #8374"
    url: "https://github.com/quantumlib/Cirq/issues/8374"
milestones:
  - date: 2026-09-29
    label: "Cirq contribution merged"
    summary: "Added NumPy Generator support with validation tests in PR #8382."
  - date: 2026-11-03
    label: "Qiskit contribution merged"
    summary: "Fixed WrapAngles inside control flow, with a regression test and release note, in PR #17349."
currentBelief: "Small, tested changes can improve quantum software reliability, from handling random generators to applying transpiler passes inside control flow."
evidenceSummary: "Qiskit PR #17349 and Cirq PR #8382 were reviewed and merged upstream. The changes include tests for control-flow angle wrapping and supported random-generator inputs, respectively."
openQuestions: []
featuredOrder: 3
---

## Qiskit: angle wrapping inside control flow

Qiskit's `WrapAngles` transpiler pass was failing to respect angle bounds inside control flow ([issue #17316](https://github.com/Qiskit/qiskit/issues/17316)). I added the `trivial_recurse` annotation so the pass also processes those nested blocks, along with a regression test and release note.

After revisions through code review, [Qiskit PR #17349](https://github.com/Qiskit/qiskit/pull/17349) was merged on November 3, 2026.

## Cirq: random generator support

I implemented a part of [Cirq issue #8374](https://github.com/quantumlib/Cirq/issues/8374), which called for support for NumPy's modern `numpy.random.Generator` API. The change added the public `PRNG_OR_SEED_LIKE` type and `parse_random_generator` parser, exported the API, and tested supported and invalid inputs. The accepted inputs include integer seeds, `None`, `numpy.random.Generator`, and the existing `numpy.random.RandomState` path.

[Cirq PR #8382](https://github.com/quantumlib/Cirq/pull/8382) was merged into `quantumlib/Cirq` on September 29, 2026. The work was reviewed and updated through the PR process.
