---
title: "When does incomplete evidence determine hidden structure?"
summary: "Enigma indicators reveal strong algebraic constraints, but reconstruction can stop at rotor-order, twist, or spin ambiguities. I am studying which observations and exact-twist conditions turn those constraints into a verified recovery."
status: "active investigation"
domains: ["Cryptography", "Mathematics", "Algorithms"]
started: 2026-05-07
featuredOrder: 1
relatedInvestigations: ["enigma-cryptanalysis"]
relatedNotes: ["srip-experience"]
---

The Enigma machine makes this question concrete: what can intercepted indicators determine about the rotor wirings, and which ambiguities remain when the evidence reveals only a conjugacy relation or a wiring up to twist?

The current investigation follows this question through Rejewski's indicator method, simulated right-twist recovery, and the dual-triplet approach. Multiple independent triplets whose $z$-settings satisfy the required arithmetic-progression conditions can determine a rightmost rotor's twist under specific known-wiring assumptions: each yields an admissible twist set, and their intersection isolates the correct value. The dual-triplet derivation developed during SRIP gives 26 candidates for the remaining rotor only when one additional relevant rotor twist is known exactly. When that information is missing, an extra ambiguity—spin—can change the candidate family.

The SRIP report established the mathematical model and proposed reconstruction procedures under explicit assumptions. Later simulations are testing those assumptions rather than treating one successful configuration as a universal method.

The broader question is when algebraic constraints identify a hidden system uniquely, when they identify only an equivalence class, and what additional evidence closes the gap.
