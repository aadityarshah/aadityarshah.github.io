---
title: "My SRIP Experience: Unravelling the Enigma"
description: "A reflection on my IIT Gandhinagar SRIP research experience studying the mathematics of the Enigma machine, Rejewski's work, and combinatorial games."
date: 2026-07-09
slug: "srip-experience"
category: "SRIP"
tags:
  - SRIP
  - Research
  - Cryptanalysis
  - Python
banner:
  avif: "/assets/enigma.avif"
  png: "/assets/enigma.png"
  alt: "An Enigma machine with mechanical rotors and keys"
---

"What to do during the summer break?" I asked myself near the end of the second semester. Should I dive into Data Structures and Algorithms (DSA), take an online course, or build a project? I was torn.

### The Discovery
Then, I discovered the [Summer Research Internship Program (SRIP)](https://srip.iitgn.ac.in/) at IIT Gandhinagar. It felt like the perfect opportunity to explore new horizons, meet inspiring people, and gain hands-on research experience. I applied for a project under [Professor Jyothi Krishnan](https://iitgn.ac.in/faculty/cse/fac-jyothi), who had taught us Discrete Mathematics. The project's initial focus was on [Combinatorial Games](https://en.wikipedia.org/wiki/Combinatorial_game_theory). To my delight, I was selected. 

### Diving Into the Enigma
My first task was to understand the [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine) mathematically, serving as an introduction to basic [Group Theory](https://en.wikipedia.org/wiki/Group_theory) which could be useful. I started by reading ["The Code Book" by Simon Singh](https://simonsingh.net/books/the-code-book/) to grasp the machine's fascinating history and the monumental work of [Marian Rejewski](https://en.wikipedia.org/wiki/Marian_Rejewski) and [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing).

Prof. Krishnan soon provided me with a rare resource: a hardcopy of **"Memories of My Work in the Cipher Bureau of the General Staff Second Department"** by Rejewski himself. I paired this with **"A First Course in Abstract Algebra" by John B. Fraleigh**. Within two weeks, I understood how Enigma's components could be modeled via permutations and how Rejewski famously utilized this theory to 'crack' the machine. 

Based on these learnings, my co-intern [Arjun Maneesh Agarwal](https://arjunagarwal.substack.com/about) (Chennai Mathematical Institute) and I worked on formalizing the [Mathematical proof for Rejewski's theorem](https://aadityarshah.github.io/srip-2026/rejewski_theorem_proof.pdf), establishing the solid group-theoretic baseline required for our simulations.

Also, I noticed a stark gap in the existing literature: there were literally no step-by-step example walkthroughs available that demonstrated Rejewski's method using simulated data, and formal, rigorous mathematical analyses of his cryptanalysis were exceptionally scarce. This inspired me to create an interactive [Simulation for Enigma in Jupyter Notebook](https://github.com/aadityarshah/srip-2026/blob/main/notebook/rejewski_enigma_notebook.ipynb) using Google Colab, using a [simulated dataset of intercepted messages](https://github.com/aadityarshah/srip-2026/blob/main/notebook/messages_daywise.json) to replicate Rejewski's fast-rotor recovery.

### A Serendipitous Collaboration
While studying the mathematics of the machine, I used the 2025 Master's thesis ["Action This Day"](https://digitalcommons.dartmouth.edu/cgi/viewcontent.cgi?article=1272&context=masters_theses) by [Jonah Weinbaum](https://jonahweinbaum.github.io/) as a primary learning resource, as it was the only work I found that described the algebraic groups formally and properly. While studying, I spotted a minor algebraic discrepancy in the text and reached out to Jonah. To my excitement, he welcomed the correction and invited me to keep in touch. 

As I dug deeper, I encountered an unresolved problem. Rejewski's method reconstructed the internal wirings of the first two rotors only **"up to twist"** (leaving 26 possible configurations for each). In his writings, Rejewski stated that finding the remaining third rotor and reflector wirings was "trivial" once the first two rotors were fully resolved. However, actually finding those starting twists and absolute configurations without relying on manual clues was historically an open challenge. The [2017 Paper by Vazquez and Seral](https://doi.org/10.1080/01611194.2016.1257522) addresses it, but it proposes methods which don't have a sufficient likelihood of always working out and thus require some luck. 

I decided to spend the second half of my internship tackling this open problem. Through online meetings and extensive email exchanges, Jonah and I brainstormed algebraic approaches:

*   Jonah proposed a baseline framework called **right twist recovery**, suggesting that a "triplet" of specific days could resolve the rightmost rotor's twist along with recovering the third rotor's wirings up to twist.
*   However, when I ran the simulations during my internship, I observed that even though the method was accurate to recover the twist of the rightmost rotor for the month, a single day-triplet was insufficient for recovering the third rotor's wirings, leading me to formulate a more robust **dual-triplet approach**.
*   Expanding on these discussions, I designed a novel method utilizing **middle-rotor turnovers** (mechanical steps occurring on the middle rotor during non-initial indicators) to resolve the middle rotor's wiring up to twist. 
*   Finally, I developed a systematic method to deduce the remaining rotor twists once the absolute rotor wirings of the leftmost rotor are resolved.

Because Jonah was busy with his work, I formalized these derivations in my [SRIP-2026 report](https://aadityarshah.github.io/srip-2026/srip_2026_report.pdf) independently. We are now planning to collaborate to formalise and verify these novel, original algorithms.

### Looking Back
This has been a truly remarkable experience. For a first-year student to engage with unresolved academic problems and collaborate with a PhD researcher has been incredibly rewarding. It has sparked my interest in academic research. Beyond the academic growth, I have significantly improved my communication skills and forged meaningful connections with wonderful people.
