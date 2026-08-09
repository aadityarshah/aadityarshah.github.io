---
title: "Recovering hidden structure from the Enigma"
question: "Can the machine's internal wiring be recovered from intercepted messages without relying on historical clues?"
summary: "An ongoing study of how permutation equations from intercepted Enigma indicators can recover rotor wirings, twists, and the limits of those methods."
status: "continuing"
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
    label: "SRIP conclusions formed"
    summary: "By late June and early July, developed the dual-triplet and middle-rotor-turnover approaches for recovering a remaining rotor wiring up to twist when the right rotor wiring is known up to twist."
  - date: 2026-07-09
    label: "SRIP ended"
    summary: "The formal internship period ended; the cryptanalysis work continues as a project."
  - date: 2026-07-31
    dateLabel: "Late July 2026"
    label: "Spin identified"
    summary: "Near the end of July, after the SRIP report, Jonah Weinbaum pointed out the spin issue. Independent formal analysis confirmed that an exact right rotor with the middle rotor still twisted produces 676 candidates for the left rotor, while fixing that additional twist leaves 26."
currentBelief: "Multiple independent triplets whose leftmost (z) settings form the required arithmetic progressions can recover a rightmost rotor's twist when the rightmost and middle wirings are known up to twist: intersecting their admissible twist sets isolates the correct value. The dual-triplet approach remains viable conditionally: once the rightmost rotor is exact, obtaining the twist of one further relevant rotor should remove the extra spin factor and recover the remaining rotor up to twist."
evidenceSummary: "Simulations verify the multi-triplet right-twist procedure and its intersection step. Later July analysis, first prompted by Jonah Weinbaum's observation and then independently formalized, confirmed that the dual-triplet result gives 26 candidates when the right rotor is exact and the remaining relevant rotor is also twist-fixed, but gives 676 candidates when that rotor remains known only up to twist."
openQuestions:
  - "Can an additional absolute rotor twist be recovered from the indicators or turnover constraints?"
  - "Under generalized rotor orders, when does fixing one more relevant twist remove the spin ambiguity and leave the expected 26 candidates?"
nextExperiment: "Find a method to obtain one additional exact rotor twist, then test whether the dual-triplet approach recovers the remaining rotor up to twist across generalized cases."
---

## The question

Marian Rejewski's work showed that intercepted indicators could reveal the internal structure of the Wehrmacht Enigma through permutation theory. But recovering a rotor wiring from the available equations does not always determine its absolute physical orientation.

This investigation asks: under what information and rotor-order conditions can the internal wirings of the rotors be recovered absolutely, rather than only up to rotational ambiguity?

This is a working record—not a history of Enigma or a reproduction of the formal report. It tracks the mathematical model, the reconstruction methods being tested, the conditions under which they work, and where the evidence remains incomplete.

## How the investigation began: SRIP

During IIT Gandhinagar's Summer Research Internship Program, I began by modelling the Enigma machine through permutations and reconstructing Marian Rejewski's algebraic indicator attack.

The literature explained the historical achievement, but rigorous step-by-step simulations were scarce. Building one exposed a deeper problem: the classical method reconstructed some rotor wirings only *up to twist*.

## SRIP work trail

1. Read Rejewski's account alongside introductory group theory.
2. Formalized the permutation model and Rejewski's theorem.
3. Built a notebook that reproduced fast-rotor recovery from simulated messages.
4. Tested right-twist recovery using independent triplets whose $z$-settings form arithmetic progressions, intersecting their admissible twist sets to determine the rightmost rotor's exact twist.
5. Developed the dual-triplet approach and explored middle-rotor turnovers to recover a remaining rotor wiring up to twist when the right rotor wiring is known up to twist.

## Minimum mathematical background

The alphabet can be treated as a set of 26 elements, and each rotor wiring is a permutation of that set. Let $P$ denote the one-step Caesar shift. The rotor, reflector, plugboard, and changing rotor positions can then be composed into a single permutation describing the effect of the machine on a letter.

The important ambiguity appears in a conjugacy relation such as

$$
\kappa = U^{-1}P^dU,
$$

where $U$ is an unknown rotor wiring and $P^d$ is a known shift. If $U_0$ is one solution, then the other solutions have the form

$$
U = P^tU_0,\qquad t \in \{0,1,\ldots,25\}.
$$

The value $t$ is the rotor's twist. Thus, a method that recovers the set of possible $U$ values has recovered the wiring only *up to twist*; an additional constraint is needed to identify the absolute wiring.

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

This reveals a conjugating permutation related to the rightmost rotor and leads to 26 possible rotor wirings. The remaining problem is to recover the third rotor, determine the twists, recover the reflector, and account for turnover constraints.

## What the SRIP work established

1. The Enigma can be represented as a composition of permutations whose form changes with the rotor settings.
2. Rejewski's reconstruction recovers the rotor occupying the rightmost position up to twist.
3. Two months with different rotor orders provide additional constraints for reconstructing the remaining rotor and reflector.
4. The possible rotor-order changes reduce to three representative cases: no rotor fixed, the middle rotor fixed, or the left rotor fixed.

## A representative example: $(L,M,N)$ and $(N,L,M)$

The general difficulty becomes concrete in one pair of rotor orders. Take the September order to be $(L,M,N)$ and the October order to be $(N,L,M)$. The two months place $N$ and $M$ in the rightmost position at different times, so Rejewski's method gives candidate sets for both of them up to twist:

$$
N=P^rN_0,\qquad M=P^sM_0.
$$

Several independent triplets can then be used for right-twist recovery. Since $N$ and $M$ are known up to twist, each triplet gives an admissible set of values for $r$; intersecting those sets isolates the correct value and makes $N$ absolute. This is an example of the narrower setting in which the multi-triplet method is currently supported.

The next step is to recover $L$ using the dual-triplet approach. In the derivation presented in the SRIP report, the twist of the relevant known rotor was treated as fixed, so the equations were expected to return 26 candidates for $L$. Later simulations showed that recovering only $N$ absolutely is not enough: if $M$ remains known only up to twist, the dual-triplet equations contain an additional unknown factor involving the twist of $M$.

We refer to this extra unknown contribution as the **spin**. Each of the 26 possible values of $s$ can produce a different set of 26 candidates for $L$, giving

$$
26 \times 26 = 676
$$

candidate configurations before the remaining twists are resolved. If the twist of the remaining relevant rotor—$M$ in this example—were also known exactly, this extra factor would be fixed and the dual-triplet equations are expected to return the intended 26 candidates for $L$. The number 676 belongs to this example; the broader lesson is that making only one rotor exact is not necessarily enough to fix the dual-triplet reconstruction. We use this case to introduce the general **spin** problem, not to claim that every rotor order produces exactly 676 candidates.

## Methods and current limits

The SRIP report develops several procedures for these cases. They should be read as methods with explicit assumptions, rather than as one universal recovery algorithm.

### Dual-triplet recovery

The dual-triplet method is intended to recover the third rotor wiring up to twist, provided that the equations have enough absolute twist information as input. In the representative setup, this means that after the rightmost rotor has been made exact, the twist of one further relevant rotor must also be determined. Choose two triplets of days such that the leftmost rotor settings in each triplet form an arithmetic progression with the same common difference $d$, where $d \neq 0$ and $\gcd(d,26)=1$.

Each triplet gives a conjugacy relation. Taken together, the two relations form a system of simultaneous conjugacy equations. If a relevant rotor is known only up to twist, its unknown orientation can introduce an additional factor into the conjugating permutation. We call this contribution **spin**. Once the additional relevant rotor twist is known exactly, that factor is fixed and the approach is expected to recover the remaining rotor up to its usual 26-fold twist, subject to the triplet and rotor-order assumptions. The $(L,M,N)$ / $(N,L,M)$ arrangement provides a concrete counterexample to the weaker assumption that making only the right rotor exact is enough: with $M$ still twisted, it produces 26 candidates for $L$ for each possible value of $s$, giving 676 candidates rather than a single 26-candidate set. Other rotor orders and available observations may produce different candidate counts, but the need for sufficient exact-twist information must be checked.

The equations therefore remain a promising conditional recovery method, rather than a failed one. What is not yet established is a general method for supplying the additional exact twist required to use them reliably across rotor orders.

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

The cycle structures of the resulting permutation products depend on the rightmost twist, while the relevant conjugacy relation can remain independent of the middle-rotor twist. Simulations verify that, under these assumptions, the intersection isolates the correct rightmost twist. In the representative case above, this is the step that makes $N$ absolute. It is not a general method for recovering the third rotor.

### Procedures still treated as provisional

The report also contains alternative procedures for other rotor-order configurations. Some are exploratory or marked as needing verification. They are not treated here as established conclusions until they have been tested against the relevant simulated cases.

## What later simulations changed

The later simulations did not invalidate right-twist recovery under its stated assumptions. They verified that several independent triplets can determine the twist of a rightmost rotor when the rightmost and middle rotor wirings are known up to twist, by intersecting their admissible twist sets.

The broader problem appears in dual-triplet recovery. Near the end of July, after the SRIP report, Jonah Weinbaum pointed out that an unknown twist contributes an additional factor—the spin. I then worked through the algebra independently and confirmed the observation. In the tested setting, the dual-triplet method gives 26 candidates for $L$ once the right rotor $N$ is known exactly and the relevant additional twist is fixed. If $N$ is exact but $M$ remains known only up to twist, each of $M$'s 26 twists can produce its own 26-candidate family for $L$, giving 676 candidates. The larger count is a by-product of the spin and twist ambiguity, not a failure of the dual-triplet equations; it identifies the additional exact-twist condition needed before they can be used as intended.

The current methods therefore do not yet provide a general way to determine all absolute rotor twists or reduce every rotor-order case to one fixed candidate family. New methods are being developed to characterize and resolve this additional ambiguity.

## Current position

- **Mathematical foundation:** the permutation model, conjugacy relations, and twist ambiguity are formalized.
- **Supported by current simulations:** Rejewski's fast-rotor recovery and multi-triplet right-twist recovery when the rightmost and middle rotor wirings are known up to twist.
- **Conditionally promising:** the dual-triplet system should recover a third rotor up to twist once one more relevant rotor twist is known exactly and the triplet assumptions hold.
- **Observed limitation:** knowing only one exact twist can leave spin in the dual-triplet equations; the representative example expands from 26 to 676 candidates.
- **Unresolved:** a general method for obtaining the additional exact twist and verifying the conditional recovery across rotor-order cases.

## What remains open

- How can one additional exact rotor twist be obtained from the available indicators or turnover constraints?
- Under what generalized conditions does fixing that twist remove the spin factor from the dual-triplet equations?
- How can the remaining rotor's twist be determined once the dual-triplet step has recovered its 26 candidates?

## Next experiment

The next step is to find a method for obtaining one additional exact rotor twist, then test the dual-triplet approach under that condition across generalized rotor-order cases. The $(L,M,N)$ / $(N,L,M)$ case remains a useful test case because it makes the missing-input problem visible as 676 configurations, but it is not the boundary of the problem. The eventual goal is a complete and verified method for recovering the absolute rotor wirings.
