---
title: "Open Source Contributions"
homepageTitle: "Open Source Contributions"
question: "How can quantum software APIs evolve while remaining practical for existing users?"
summary: "My Cirq contribution added public support for NumPy's modern random generator API, with validation tests; PR #8382 was merged. A separate Qualtran contribution is in progress."
homepageSummary: "Added NumPy Generator support to Cirq; PR #8382 merged upstream. A separate Qualtran contribution is in progress."
status: "continuing"
category: "Open Source"
context: "Quantum Software · Cirq and Qualtran"
homepageFeatured: true
modes: ["Investigating", "Implementing", "Testing", "Reviewing"]
relatedQuestions: ["quantum-advantage"]
evidence:
  - label: "Merged Cirq PR #8382"
    url: "https://github.com/quantumlib/Cirq/pull/8382"
  - label: "Cirq issue #8374"
    url: "https://github.com/quantumlib/Cirq/issues/8374"
  - label: "Qualtran upstream project · work in progress"
    url: "https://github.com/quantumlib/Qualtran"
milestones: []
currentBelief: "A modern random-generator API can be added without removing the established RandomState input path."
evidenceSummary: "Cirq PR #8382 was merged upstream with the new public type and parser, support for integer seeds, None, numpy.random.Generator, and numpy.random.RandomState, plus tests for accepted and invalid inputs."
openQuestions: []
featuredOrder: 3
---

## Cirq: random generator support

I implemented a part of [Cirq issue #8374](https://github.com/quantumlib/Cirq/issues/8374), which called for support for NumPy's modern `numpy.random.Generator` API. The change added the public `PRNG_OR_SEED_LIKE` type and `parse_random_generator` parser, exported the API, and tested supported and invalid inputs. The accepted inputs include integer seeds, `None`, `numpy.random.Generator`, and the existing `numpy.random.RandomState` path.

[Cirq PR #8382](https://github.com/quantumlib/Cirq/pull/8382) was merged into `quantumlib/Cirq` on September 29, 2026. The work was reviewed and updated through the PR process.

## Qualtran: work in progress

A separate contribution to Qualtran is underway. It is not presented here as a completed upstream contribution; this page will be updated with the specific change and review link when those are available.
