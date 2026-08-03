---
title: "Recovering hidden structure from the Enigma"
question: "Can the machine's internal wiring be recovered from intercepted messages without relying on historical clues?"
summary: "A group-theoretic simulation of the Wehrmacht Enigma I, Rejewski's indicator attack, and new theoretical approaches to absolute rotor-wiring recovery."
status: "continuing"
startDate: 2026-05-07
endDate: 2026-07-09
modes: ["Formalized", "Simulated", "Tested", "Wrote"]
relatedQuestions: ["hidden-structure-in-cryptography"]
featuredOrder: 1
cover:
  src: "/assets/enigma.avif"
  alt: "An Enigma machine with mechanical rotors and keys"
evidence:
  - label: "Research repository"
    url: "https://github.com/aadityarshah/srip-2026"
  - label: "SRIP report"
    url: "https://aadityarshah.github.io/srip-2026/srip_2026_report.pdf"
  - label: "Field report"
    url: "/notes/srip-experience/"
milestones:
  - date: 2026-05-07
    label: "Started"
    summary: "Began modelling Enigma through permutations and group theory."
  - date: 2026-07-09
    label: "SRIP ended"
    summary: "The formal internship period ended; the cryptanalysis work continues as a project."
currentBelief: "A single day-triplet does not identify every rotor wiring uniquely; additional structural constraints matter."
evidenceSummary: "Permutation simulations reproduced the fast-rotor recovery path and exposed the limit of a single triplet."
changedMind: "The first right-twist recovery idea seemed sufficient until simulated counterexamples showed otherwise."
openQuestions:
  - "Can the dual-triplet approach be stated as a complete theorem?"
  - "Which turnover constraints make the remaining wiring identifiable?"
nextExperiment: "Continue formalizing the dual-triplet argument and test it across a wider family of simulated messages."
---

## The starting point

During IIT Gandhinagar's Summer Research Internship Program, I began by modelling the Enigma machine through permutations and reconstructing Marian Rejewski's algebraic indicator attack.

The literature explained the historical achievement, but rigorous step-by-step simulations were scarce. Building one exposed a deeper problem: the classical method reconstructed some rotor wirings only *up to twist*.

## The trail

1. Read Rejewski's account alongside introductory group theory.
2. Formalized the permutation model and Rejewski's theorem.
3. Built a notebook that reproduced fast-rotor recovery from simulated messages.
4. Tested a proposed right-twist recovery framework and found that a single day-triplet was not sufficient in the simulation.
5. Extended the framework with a dual-triplet approach and explored middle-rotor turnovers as additional constraints.

## Where it stands

The formal SRIP period ran from 7 May to 9 July 2026. The report records the current derivations and simulations, but the project continues beyond the internship. The next stage is further formal verification and stronger testing; “continuing” is a more honest label than “finished.”
