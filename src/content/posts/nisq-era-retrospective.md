---
title: "The NISQ Era, Revisited: How Far Have We Come Since 2018"
description: "A retrospective on John Preskill's vision for noisy quantum computers, the progress that followed, and the challenges that remain."
date: 2026-10-13
slug: "nisq-era-retrospective"
kind: "reflection"
topics:
  - Quantum Computing
  - Research
  - CSE
draft: false
relatedQuestions:
  - quantum-advantage
relatedInvestigations: []
---

Quantum Computing, now viewed to be something that is going to bring up a major paradigm shift in future (who knows how further or near future) by many people along with some mixed opinions about it, has major bottlenecks and lot of progress to be made to reach to the point where it makes practical impact in the world and people's lives. 

In [Quantum Computing in the NISQ era and beyond](https://arxiv.org/pdf/1801.00862), a perspective paper published by *John Preskill* in 2018, Preskill coined the term *NISQ* referring to the *Noisy Intermediate-Scale Quantum* (NISQ) technology to be available in the near future. I went through his paper and tried to understand what was the state of quantum computing few years back.

I aim to revisit his vision of the NISQ era, examine the progress made over the past eight years, and understand what lies ahead for quantum computing.

## About Quantum Computing

### What is Quantum Computing?

Normal (classical) computers which we use in our day-to-day lives use bits which are equivalent to a switch, either ON or OFF. But with progress and developments made in 20th century and learning about quantum mechanics, we learnt that everything around us could be explained by more fundamental principles of quantum physics.

This led to the birth of the abstract idea of Qubits which use the concept of [Quantum Superposition](https://en.wikipedia.org/wiki/Quantum_superposition), explained by abstract algebra of vector spaces and linear algebra.

However, superposition does not mean that a quantum computer can simply evaluate every possible answer and read out the correct one. Quantum algorithms must exploit interference and other quantum effects to make useful outcomes more likely. Designing algorithms that achieve a genuine computational advantage is therefore a central challenge in quantum computing.

Quantum Computing is the method of computing relying on these principles of quantum physics using the idea of qubits.

### Why Quantum Computing?

The properties that a qubit possesses such as superposition, entanglement, etc. give rise to enormous potential computation power. One of the most important examples of a potential quantum speedup is [*Shor's algorithm*](https://en.wikipedia.org/wiki/Shor%27s_algorithm), developed by Peter Shor, which can factor integers in polynomial time in their number of digits under the standard theoretical model. A sufficiently powerful quantum computer running this algorithm could threaten widely used public-key cryptosystems such as RSA, although today's quantum computers cannot factor cryptographically relevant integers. This contrasts with classical factorization methods such as the [general number field sieve](https://en.wikipedia.org/wiki/General_number_field_sieve).

The reason behind this are the intrinsic properties of a quantum system. Although classical computers can efficiently simulate certain classes of quantum computations, simulating general quantum circuits is believed to become intractable as their size and complexity grow. Understanding exactly where quantum computers outperform classical ones remains an important question in theoretical computer science. Also, one could simulate quantum systems using quantum computers. 

Thus, the potential quantum computing has can not be doubted. But, the important question becomes where are we right now? If it has so much power, then why are we not able to see it being used practically anywhere around us yet? These are the questions that Preskill addressed in his paper and I aim to analyze the progress made since then.

## Progress in the NISQ Era 

Preskill had mentioned in 2018 that we were entering a pivotal new era in quantum technology and called it *NISQ* which stands for *Noisy Intermediate-Scale Quantum* where "intermediate scale" refers to the size of quantum computers which he believed would be available in the next few years. 

### The 50-Qubit Barrier and Qubit "Quality"

Preskill argued that 50 qubits could be a significant milestone because simulating certain quantum systems with that many qubits could exceed the capabilities of the most powerful classical computers. However, this was never a universal threshold: the difficulty of classical simulation depends on the circuit, the task being performed, and the computational resources available. We have not just broke the barrier of $50$ qubits with [Google's Sycamore](https://research.google/blog/quantum-supremacy-using-a-programmable-superconducting-processor/), we have got into the scale of hundreds and entered into the thousands with [IBM's Condor](https://www.ibm.com/quantum/blog/quantum-roadmap-2033).

But creating processors with thousands of physical qubits is no more the metric. These quantum machines are not error-corrected and noise severely limits their computational power as Preskill mentions in [Beyond NISQ: The Megaquop Machine](https://arxiv.org/pdf/2502.17368) and envisions *Megaquop* and *Gigaquop* machines, capable of executing a million or a billion quantum operations. Therefore, we now focus on error-corrected logical qubits which are robust, reliable qubits and actually required to run the complex quantum algorithms flaw-free. [Quantinuum's Helios processor](https://www.quantinuum.com/blog/introducing-helios-the-most-accurate-quantum-computer-in-the-world) has demonstrated a Greenberger–Horne–Zeilinger (GHZ) state involving 94 error-detected logical qubits using 98 physical qubits, alongside a separate demonstration involving 48 error-corrected logical qubits. These results are important milestones, but error detection and error correction are distinct, and neither result by itself establishes large-scale fault-tolerant quantum computing. 

The number of logical qubits alone, however, does not determine whether a processor can solve a useful problem. Practical applications will also require sufficiently low logical error rates, reliable logical operations, and circuits long enough to carry out the desired computation. Consequently, reaching 1,000 logical qubits would be a milestone, but not a guarantee of practical quantum advantage.

### Quantum-Resistant Cryptography (PQC)

With the progress in quantum computing kept in mind, it is important to keep in the mind the disruptive effects of quantum computers on how we protect our privacy. [Public-key cryptosystems](https://en.wikipedia.org/wiki/Public-key_cryptography) such as RSA are vulnerable to sufficiently powerful fault-tolerant quantum computers running Shor's algorithm. Although current quantum computers cannot break RSA at cryptographically relevant sizes, the prospect of future attacks makes the transition to post-quantum cryptography an important priority. Thus, attackers could use [*"Harvest Now, Decrypt Later"*](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later) strategy, i.e. intercept and store encrypted data and decrypt it as soon as powerful quantum computers become available.

To deal with this, the development of cryptographic algorithms designed to be secure against attacks by future quantum computers has been started and is referred to as *Post-quantum cryptography*, called *PQC* in short. The NIST has finalised the first primary [PQC standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards). 

Although a cryptographically relevant quantum computer is not available today, the transition to post-quantum cryptography is already important. Information intercepted and stored today could be decrypted in the future, making long-term confidentiality particularly relevant for sensitive personal, medical, financial, governmental, and commercial data. NIST finalised its first three principal post-quantum cryptography standards in 2024, and the challenge now is to deploy and migrate to these standards securely. There is no need for individual users to panic, but the transition should not be postponed until large-scale quantum computers arrive. 

### Quantum Key Distribution

*Quantum Key Distribution* (QKD) refers to a secure communication method based upon the fundamental principles of quantum physics to generate and share secret encryption keys between two parties. QKD was already an established research area when Preskill wrote his paper in 2018, with experimental demonstrations and practical deployments underway. Since then, work has continued on extending communication distances, developing satellite links, and integrating QKD into larger networks. 

Various ways of QKDs, consisting of *Discrete Variable QKD*, *Continuous Variable QKD* and *Entanglement-Based QKD* have been tested in the real world and encouraging results have been obtained. 

Optical signals, commonly involving photons, are used to transmit quantum information in many QKD implementations. Depending on the setup, communication can take place through optical fibres, free-space links, or satellites. The practical challenges differ across these approaches, particularly in transmission loss, distance, and the infrastructure required. QKD distributes secret keys. It does not independently replace the encryption systems that use those keys. These include Free-Space QKD, Fiber-Based QKD, Satellite-Based QKD, etc. Some of the most notable trials include [China's Space-to-Ground Link](https://www.nature.com/articles/s41586-020-03093-8), [Poland's PIONIER-Q Network](https://www.psnc.pl/the-polish-pionier-quantum-network-has-the-longest-range-in-europe-the-pionier-q-project-featured-in-the-parp-report/), [India's NQM Mission Quantum Communication Links](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2250162&reg=3&lang=1), etc. 

## Requirement of Further Developments

Inspite of significant developments, maybe more than expected in some areas, quantum computing still requires much more further developments in order to have commercial value. 

### Fault-Tolerant Quantum Computing

Some quantum experiments have reached regimes where reproducing their results using classical computers is extremely challenging. However, this depends on the particular computation, and classical simulation remains feasible for many quantum circuits. Many such demonstrations use noisy devices and do not, by themselves, establish fault-tolerant computation. This distinction is important because computational difficulty for classical simulators and reliable, useful quantum computation are separate milestones. 

Therefore, one of the important aspects for further progress is [*Fault-tolerant quantum computing*](https://en.wikipedia.org/wiki/Fault_tolerant_quantum_computing) in which [*quantum error correction*](https://en.wikipedia.org/wiki/Quantum_error_correction) is used and applied to multiple physical qubits in order to obtain protected logical qubits, so that computations can run with arbitrarily low error rates. 

[Google's Willow processor](https://blog.google/innovation-and-ai/technology/research/google-willow-quantum-chip/) demonstrated *below-threshold quantum error correction*: in the reported surface-code experiment, increasing the code distance reduced the logical error rate. This is an important step towards fault-tolerant quantum computing, but it does not mean that adding physical qubits will automatically improve reliability in every system or that large-scale fault-tolerant computation has already been achieved. Google subsequently reported a verifiable [quantum advantage](https://en.wikipedia.org/wiki/Quantum_supremacy) using its [Quantum Echoes algorithm](https://blog.google/innovation-and-ai/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/) on Willow, which completed a particular computation involving out-of-time-order correlators in about two hours. Google estimated that the corresponding classical simulation would take roughly 13,000 times longer. This is a task-specific result based on a particular classical-computing estimate, not evidence that quantum computers are now broadly faster for practical applications. But, this doesn't demonstrate large-scale fault-tolerant quantum computing required for solving important problems. 

### Classical Verification of Quantum Computations

Another major hurdle which could be faced in the future is verifying the results obtained by quantum computations. As quantum experiments reach regimes that are difficult to reproduce using classical computers, independently verifying their results becomes increasingly important. This challenge is especially significant when classical simulation is too expensive to serve as a practical check. 

Classically verifying a quantum computation is a challenging research problem, particularly when reproducing the computation on a classical computer is itself prohibitively expensive. *Urmila Mahadev*'s work, [*Classical Verification of Quantum Computations*](https://arxiv.org/abs/1804.01082), established an important theoretical approach to this problem using cryptographic assumptions. However, it is not a universal solution for verifying every quantum computation. The challenges also extend beyond gate error rates: verification methods must establish that the computation was performed correctly and that the reported result is trustworthy. 

### Quantum Simulations

There have been notable developments in analog and digital methods of quantum simulation. Examples include a [60-atom analog quantum simulator](https://www.nature.com/articles/s41586-024-07173-x) and a [69-qubit analog-digital simulator](https://www.nature.com/articles/s41586-024-08460-3), illustrating how quantum devices can be used to investigate complex many-body dynamics. These demonstrations show progress in experimental capability, although their scientific value must be assessed through the physical phenomena studied, the reliability of the results, and the limitations of available classical methods. These developments also illustrate Preskill's argument that quantum simulation could be a valuable application while large-scale fault-tolerant digital quantum computers remain difficult to build. However, demonstrating that a system is difficult to simulate classically does not, by itself, establish a useful practical advantage, accuracy, computational cost, and the scientific value of the results matter as well. 

### Other Areas

There are several promising areas in which quantum computing could have applications, although a broadly useful practical advantage over the best classical methods remains unestablished for many of them. They are currently major research directions, but practical advantages remain unresolved. These areas include quantum-classical algorithms such as [*QAOA* (Quantum Approximate Optimization Algorithm)](https://arxiv.org/pdf/2511.18377) and [*VQE* (Variational Quantum Eigensolver)](https://en.wikipedia.org/wiki/Variational_quantum_eigensolver), [*quantum machine learning*](https://en.wikipedia.org/wiki/Quantum_machine_learning), [*quantum annealing*](https://en.wikipedia.org/wiki/Quantum_annealing), [*quantum recommendation systems*](https://arxiv.org/pdf/1603.08675),  [*quantum semidefinite programming*](https://arxiv.org/pdf/2306.11637), and many more areas.
## Revisiting Preskill's Vision

Reading Preskill's paper also helped me understand how broad and interdisciplinary quantum technology is, drawing on physics, mathematics, computer science, and engineering. I came away realizing that quantum computing itself is a vast field, with many distinct questions and directions. A single milestone or application cannot capture its full scope.

Looking back, Preskill's central caution has held up well: increasing the number of physical qubits does not automatically translate into useful computational power. Hardware has progressed substantially, and quantum error correction has moved from a long-term objective towards experimentally demonstrated capabilities. Yet, turning these advances into reliable, scalable computations remains a major challenge. The picture is therefore not simply that the NISQ era has ended or that its promises have been fulfilled. Rather, progress in noisy devices, quantum error correction, and fault-tolerant architectures is occurring in parallel, with the ultimate test being whether quantum computers can solve important problems better than the strongest classical alternatives.

| Topic | Preskill's 2018 perspective | Progress and what remains |
| --- | --- | --- |
| Qubit scale | 50 qubits could mark an important threshold for classical simulation. | Physical processors have reached hundreds and thousands of qubits, and logical-qubit demonstrations have advanced. Qubit count alone does not establish useful computational power, the task and circuit quality matter. |
| Noise and error correction | NISQ devices would be noisy and limited, with fault tolerance still a goal. | Willow demonstrated below-threshold error correction, and Helios demonstrated error-detected and error-corrected logical-qubit results. Large-scale fault-tolerant computation remains unachieved. |
| Quantum advantage | Quantum devices could eventually outperform classical computers on selected tasks. | Quantum Echoes showed a reported, verifiable advantage for a particular computation. Task-specific advantage and simulation difficulty do not establish broadly useful practical advantage. |
| Applications and infrastructure | Near-term devices could support exploration, while major practical applications remained uncertain. | Quantum simulation experiments have advanced, QKD networks and post-quantum cryptography have progressed. Practical value depends on reliable results and useful applications. |
