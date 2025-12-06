---
title: Grafi e reti
sidebar:
    order: 3
---

# Vincoli di conservazione del flusso

-   $BS$ = stella entrante;
-   $FS$ = stella uscente;
-   $b_i$ = deficit del nodo $i$;
-   $x_{ij} =  \begin{cases}
1 & \text{se prendiamo l'arco dal nodo i al nodo j}\\
0 & altrimenti
\end{cases}$
-   $c_{ij}$ costo dell'arco che va dal nodo $i$ al nodo $j$
-   $cx$ = costo del flusso $x$
-   $l_{ij}$ = limite inferiore del flusso che può passare dell'arco che va dal nodo $i$ al nodo $j$
-   $u_{ij}$ = limite superiore del flusso che può passare dell'arco che va dal nodo $i$ al nodo $j$
    $$
    \sum_{(j,i)\in BS(i)} x_{ji} - \sum_{(i,j)\in FS(i)} x_{ij} = b_i = \begin{cases}
    b_i & pozzo\\
    -b_i & sorgente\\
    0 & trasferimento
    \end{cases}
    $$

$$l_{ij} \leq x_{ij} \leq u_{ij} \quad (i,j) \in A$$

Associamo ad ogni flusso x un costo dato dalla somma dei flussi degli archi per il loro costo:

$$cx = \sum_{(i,j) \in A} c_{ij} x_{ij}$$

# Problema del flusso di costo minimo

$$\min \{ cx : Ex = b, l \leq x \leq u \}$$

# Cammini di costo minimo

$$\min \{ C(P) : P \in \mathcal{P}_{rt} \}$$

$$
u_{ij} = +\infty \quad (i,j) \in A, \qquad b_i = \begin{cases}
-1 & \text{se } i = r \\
1 & \text{se } i = t \\
0 & \text{altrimenti}
\end{cases} \quad i \in N.
$$

È possibile considerare un problema più generale:

Data una radice r, determinare in G un cammino di costo minimo da r a i, per ogni i ̸= r.

$$\min \left\lbrace \sum_{i \neq r} C(P_i) : P_i \in \mathcal{P}_{ri} \right\rbrace$$

$$
b_i =
\begin{cases}
-(n-1) & \text{se } i = r \\
1 & \text{altrimenti}
\end{cases}
\quad i \in \mathbb{N} \, .
$$

# Albero cammini minimi

## Condizioni di Bellman

$$d_i + c_{ij} \geq d_j \quad \forall (i, j) \in A$$

Sia $T = ( N , AT )$ un albero di copertura radicato in $r$ e orientato, e sia $d$ il corrispondente vettore di
etichette:

T è un albero dei cammini minimi $\Leftrightarrow d$ verifica le condizioni di Bellman
