---
title: "Recovering hidden structure from the Enigma"
homepageTitle: "Enigma Cryptanalysis"
question: "When can intercepted Enigma indicators uniquely identify rotor wirings without relying on historical clues?"
summary: "I’m investigating when intercepted Enigma indicators and rotor-setting constraints can pin down the exact rotor wirings, including their rotational offsets."
homepageSummary: "Testing how far Rejewski's permutation methods can recover Enigma rotor structure—and where their ambiguities remain."
status: "continuing"
category: "Research"
context: "SRIP 2026 · IIT Gandhinagar"
homepageFeatured: true
startDate: 2026-05-07
lastUpdated: 2026-08-09
modes: ["Formalizing", "Simulating", "Testing", "Writing"]
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
  - date: 2026-06-30
    dateLabel: "Late June–early July 2026"
    label: "Reconstruction procedures"
    summary: "Derived the dual-triplet equations and explored middle-rotor turnovers as an additional constraint on the remaining wiring."
  - date: 2026-07-09
    label: "SRIP ended"
    summary: "The formal internship period ended. The cryptanalysis work continues as a project."
  - date: 2026-07-31
    dateLabel: "Late July 2026"
    label: "Spin identified"
    summary: "Jonah Weinbaum spotted the extra factor. With the middle twist unresolved, the candidate count grew from 26 to 676 joint configurations in the tested setup."
evidenceSummary: "In simulation, I reproduced Rejewski's fast-rotor reconstruction up to twist. With the right and middle wirings known up to twist, intersecting candidate sets from qualifying triplets isolated the right rotor's exact twist in the cases I tested."
openQuestions:
  - "Can an additional absolute rotor twist be recovered from the indicators or turnover constraints?"
  - "Across rotor orders, when does fixing one more relevant twist remove spin and leave 26 candidates?"
  - "What further constraint would select the remaining rotor's exact wiring from those 26 candidates?"
nextExperiment: "Test whether indicators or turnovers can fix the missing twist in the worked example, then compare dual-triplet candidate counts across rotor orders."
---

## The question

Marian Rejewski's work showed that intercepted indicators could reveal the internal structure of the Wehrmacht Enigma through permutation theory. But recovering a rotor wiring from the available equations does not always determine its absolute physical orientation.

## How the investigation began: SRIP

I began this work in my first year during IIT Gandhinagar's Summer Research Internship Program. I was learning permutation group theory as I modelled the Enigma and reconstructed Rejewski's algebraic indicator attack.

Building the simulation made the distinction concrete. The classical method reconstructed some rotor wirings only *up to twist*.

## SRIP work trail

1. Read Rejewski's account alongside introductory group theory.
2. Formalized the permutation model and worked with co-intern Arjun Maneesh Agarwal on a proof of Rejewski's pairing theorem.
3. Built a notebook that reproduced fast-rotor recovery from simulated messages.
4. Tested right-twist recovery using independent triplets whose $z$-settings form arithmetic progressions, intersecting their admissible twist sets to determine the rightmost rotor's exact twist.
5. Derived the dual-triplet equations and explored middle-rotor turnovers as a source of additional constraints.

## Minimum mathematical background

The alphabet can be treated as a set of 26 elements, and each rotor wiring is a permutation of that set. Let $P$ denote the one-step Caesar shift. The rotor, reflector, plugboard, and changing rotor positions can then be composed into a single permutation describing the effect of the machine on a letter.

The important ambiguity appears in a conjugacy relation such as

$$
\kappa = U^{-1}P^dU,
$$

where $U$ is an unknown rotor wiring and $P^d$ is a known shift. When $\gcd(d,26)=1$, the only permutations commuting with $P^d$ are the powers of $P$. If $U_0$ is one solution, then all solutions have the form

$$
U = P^tU_0,\qquad t \in \{0,1,\ldots,25\}.
$$

The value $t$ is the rotor's twist. Thus, a method that recovers the set of possible $U$ values has recovered the wiring only *up to twist*. An additional constraint is needed to identify the absolute wiring.

For the reconstruction procedures, choose one representative from each known candidate set and write

$$
N=P^rN_0,\qquad M=P^sM_0,\qquad L=P^tL_0.
$$

Here $N_0$, $M_0$, and $L_0$ are representatives of the candidate sets, while $r$, $s$, and $t$ are their corresponding twists.

### The machine as permutations

The notation used in the report represents the plugboard by $S$, the right, middle, and left rotors by $N$, $M$, and $L$, and the reflector by $R$. The Caesar shifts $P^x$, $P^y$, and $P^z$ encode the current absolute rotor settings. Rotor stepping changes these settings between key presses, including middle-rotor turnover and double stepping.

For a day $D$, let $A_{D,j}$ denote the involution produced by the $j$-th letter of that day's six-letter indicator, where $j \in \{1,\ldots,6\}$. For a selected day $D_i$, the absolute settings after the first key press are written as $(z_i,y_i,x_i)$, corresponding to the left, middle, and right rotors. When only the first-letter involution from the selected day is needed, define the shorthand $a_i := A_{D_i,1}$.

### The recovery problem

For a fixed day $D$, Rejewski's indicator method gives six known involutions $A_{D,1},\ldots,A_{D,6}$. After shifting known terms, consecutive products of the corresponding transformed permutations can produce a relation of the form

$$
B_{D,j+1}B_{D,j}
=
(N^{-1}PN)(B_{D,j}B_{D,j-1})(N^{-1}PN)^{-1}.
$$

Identifying the conjugating permutation $N^{-1}PN$ leaves 26 possible wirings for the rightmost rotor. The remaining problem is to recover the third rotor, determine the twists, recover the reflector, and account for turnover constraints.

## What the SRIP work established

1. The Enigma can be represented as a composition of permutations whose form changes with the rotor settings.
2. Rejewski's reconstruction recovers the rotor occupying the rightmost position up to twist.
3. Two months with different rotor orders provide additional constraints for reconstructing the remaining rotor and reflector.
4. The report treats three cases of rotor-order changes: no rotor fixed, the middle rotor fixed, or the left rotor fixed.

## A representative example: $(L,M,N)$ and $(N,L,M)$

The general difficulty becomes concrete in one pair of rotor orders. Take the September order to be $(L,M,N)$ and the October order to be $(N,L,M)$. The two months place $N$ and $M$ in the rightmost position at different times, so Rejewski's method gives candidate sets for both of them up to twist:

$$
N=P^rN_0,\qquad M=P^sM_0.
$$

With $N$ and $M$ known up to twist, each qualifying triplet gives an admissible set of values for $r$. In the simulations for this setup, intersecting those sets isolated the correct value and fixed $N$ exactly.

The next step is to recover $L$ using the dual-triplet approach. In the derivation presented in the SRIP report, the twist of the relevant known rotor was treated as fixed, so the equations were expected to return 26 candidates for $L$. Later simulations showed that recovering only $N$ absolutely is not enough: if $M$ remains known only up to twist, the dual-triplet equations contain an additional unknown factor involving the twist of $M$.

We refer to this extra unknown contribution as the **spin**. Each of the 26 possible values of $s$ can produce a different set of 26 candidates for $L$, giving

$$
26 \times 26 = 676
$$

joint configurations of the middle twist and the left wiring. Fixing $M$'s twist in this example fixes the spin factor and leaves 26 candidates for $L$.

## Methods and current limits

### Dual-triplet recovery

The dual-triplet method is intended to recover the third rotor wiring up to twist, provided that the equations have enough absolute twist information as input. In the representative setup, this means that after the rightmost rotor has been made exact, the twist of one further relevant rotor must also be determined. Choose two triplets of days such that the leftmost rotor settings in each triplet form an arithmetic progression with the same common difference $d$, where $d \neq 0$ and $\gcd(d,26)=1$.

Each triplet gives a conjugacy relation. Taken together, the two relations form a system of simultaneous conjugacy equations. An unresolved twist on another rotor can introduce **spin** into the conjugating permutation, as in the worked example. Fixing that twist lets the equations recover the remaining rotor up to its usual 26-fold twist in the tested setup.

### Right-twist recovery

The right-twist method is a multi-triplet procedure for recovering the rightmost rotor's twist. Consider a month with rotor order $(L,M,N)$ and choose several independent triplets $T_k=(D_{k,1},D_{k,2},D_{k,3})$. For each triplet, the leftmost settings must form the required arithmetic progression:

$$
z_{k,3}-z_{k,2}=z_{k,2}-z_{k,1}=d_k,\qquad d_k\neq 0,\qquad \gcd(d_k,26)=1.
$$

It applies when the rightmost and middle rotor wirings are each known up to twist, so that $N=P^rN_0$ and $M=P^sM_0$. For each triplet, writing $a_{k,i} := A_{D_{k,i},1}$ for the first-letter involution from the selected day, the report shifts the known terms and denotes the resulting expressions by $B_{k,i}(r)$.

$$
B_{k,3}(r)B_{k,2}(r)
=
\left(P^{-s}L^{-1}P^{d_k}LP^s\right)
\left(B_{k,2}(r)B_{k,1}(r)\right)
\left(P^{-s}L^{-1}P^{d_k}LP^s\right)^{-1}.
$$

Each triplet produces an admissible set $\mathcal{R}_k$ of rightmost-twist values. The right-twist estimate is obtained by intersecting the independent results:

$$
\mathcal{R}_{\mathrm{right}}=\bigcap_{k=1}^{m}\mathcal{R}_k.
$$

The cycle structures of the resulting permutation products can vary with the trial rightmost twist. Comparing them requires no knowledge of the middle twist because conjugation preserves cycle structure. In the simulated cases, the intersection isolated the correct rightmost twist. In the worked example, this is the step that fixes $N$ exactly.

### Procedures still treated as provisional

The report also contains exploratory procedures for other rotor-order configurations that still need to be tested in the relevant cases.

## The 26 → 676 spin correction

After the SRIP report, Jonah Weinbaum pointed out that the middle rotor's unknown twist contributes an extra factor to the dual-triplet equations. I worked through the algebra independently and confirmed that my original count had fixed that twist without determining it. The right-twist intersection still worked in the simulations. The correction changed what the dual-triplet step needed as input and left open how to obtain that extra twist from the available observations.
