---
title: Problemi e modelli
sidebar:
    order: 2
---

# Modello

```mermaid
graph TD
    Modello -- Definizione --> desMat(Descrizone
    logico-matematica
    della realtà)
    Modello --> Classi --> Giochi & Simulazione & Analitici
    Giochi -- Scopo --> Individui(Modellare
    comportamento
    individui)
    Giochi -- Attraverso --> Giocatori -- con --> Ruolo
    Simulazione -- Scopo --> cs(Studiare
    comportamento
    sistemi)
    Simulazione --> A1(Attraverso) --> rm(relazioni
    matematiche) & gnc(Numeri
    pseudo-casuali)
    Analitici -- Scopo --> rs(Risolvere
    i sistemi)
    Analitici --> A2(Attraverso) --> Massimizzazione & Minimizzazione --> FO(Funzione
    obiettivo)
    A2 --> Vincoli
    FO -- Dominio --> Varabili -- Rispettanti --> Vincoli
    Modello --> Qualità -- Definizone --> Bilanciamento --> Accuratezza & Semplicità
```

# Problema

```mermaid
graph TD
    Problema --> Soluzione --> dipende --> Variabili & Parametri
    Problema --> Definito -- Caratterizzazione --> Soluzione
    Definito -- Descrizione --> Parametri
    Problema --> Istanza -- Definzione --> AssVal(Assegnamento
    valori) --> Parametri
```

# Problema di ottimizzazione

Un problema di ottimizzazione è un problema definito da variabili, vincoli, che definiscono una regione ammississibile
($F$) per le variabili, ed una funzione obiettivo $s$ definita su $F$.

$$c:F\rightarrow\mathbb{R}$$

Un problema di ottimizzazione può essere di massimo:

$$max\{c(x):x\in F\}$$

Oppure di minimo: $$min\{c(x):x\in F\}$$

```mermaid
graph TD
    PO(Problema di
    ottimizzazione) --> Definito --> Variabili
    Definito --> Vincoli -- Generano --> RA(Regione Ammissibile) -- sulle --> Variabili
    Definito --> FO(Funzione
    obiettivo)
    PO --> Soluzione --> Massimo --> Massimizzazione
    Soluzione --> Minimo --> Minimizzazione
    Massimizzazione & Minimizzazione --> FO -- Dominio --> RA
```

Un probema di massimo può essere riscritto come problema di minimo e viceversa:

$$min\{c(x):x\in F\} = -max\{-c(x):x\in F\}$$

## Soluzioni problema di ottimizzazione

```mermaid
graph TD
    PO(Problema di
    ottimizzazione) --> Vuoto & Illimitato & Ottimo
    Vuoto --> vuotoMat($$F=\emptyset$$)
    Vuoto -- Soluzione -->  Massimo & Minimo
    Massimo -- \- --> inf
    Minimo -- \+ --> inf($$\infty$$)
    Illimitato -- Soluzione -->  Max1(Massimo) & Min1(Minimo)
    Max1 -- \+ --> inf1
    Min1 -- \- --> inf1($$\infty$$)
    Ottimo -- Soluzione --> Finita
```

# Funzioni a carico fisso

$$
f(x) = \begin{cases}
b_1 + c_1 x & \text{se } x \in [a_1, a_2] \\
b_2 + c_2 x & \text{se } x \in (a_2, a_3] \\
\vdots & \vdots \\
b_n + c_n x & \text{se } x \in (a_n, a_{n+1}]
\end{cases}
$$

## Soluzione

$$
\begin{align*}
\min \quad & \sum_{i=1}^n (b_i + c_i a_i) y_i + \sum_{i=1}^n c_i z_i \\
\text{s.t.} \quad & x = \sum_{i=1}^n a_i y_i + \sum_{i=1}^n z_i \\
& 0 \leq z_i \leq (a_{i+1} - a_i)y_i, \quad i = 1, \dots, n \\
& \sum_{i=1}^n y_i = 1 \\
& y_i \in \{0, 1\}, \quad i = 1, \dots, n
\end{align*}
$$
