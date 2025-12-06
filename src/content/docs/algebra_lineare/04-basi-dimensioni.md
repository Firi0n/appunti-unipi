---
title: Basi e dimensioni
sidebar:
    order: 4
---

# Dipendenza lineare

$$
\exists i\in[1,k]|a_i\neq 0\land a_1v_1+\cdots+a_kv_k=0\Rightarrow\\
v_1,\dots,v_k\text{ sono linearmente dipendenti}
$$

$$
(\exists\text{ una combinazione lineare di }v_1,\dots,v_k\text{ non banale pari a 0 }\Rightarrow\\
v_1,\dots,v_k\text{ sono linearmente dipendenti.})
$$

Vattore linearmente dipandente $\Leftrightarrow$ è 0.

Due vettori sono linearmente dipendenti $\Leftrightarrow$ uno dei due è multiplo dell'altro.

# Basi

Se $v1,\dots,vk$ sono vettori linearmente indipendenti che generano $V$, si dice che i vettori $v1,\dots,vk$ formano una
base di V o che l’insieme $\lbrace v1,\dots,vk\rbrace$ è una base di V.

## Proposizione

Data una matrice $A,n\times n$, sono equivalenti:

-   le colonne $A^1,\dots,A^n$ sono una base;
-   $\exists$ una riduzione a scala di $A$ con $n$ pivot;
-   ogni riduzione a scala di $A$ ha $n$ pivot.

# Coordinate

## Teorema

Sia $V$ uno spazio vettoriale e siano $v_1,\dots,v_k$ vettori linearmente indipendenti.

$$a_1v_1,\dots,a_kv_k=b_1v_1,\dots,b_kv_k\Rightarrow\forall i\in[1,k]\ .\ a_i=b_i$$

Se i vettori $v_1,\dots,v_k$ formano una base di $V$ ogni vettore $v\in V$ si scrive in modo unico come:

$$x_1v_1,\dots,x_kv_k$$

Si dice che $v_1,\dots,v_k$ sono le coordinate di v rispetto alla base.

# Cardinalità della base

## Teorema

Sia $v_1,\dots,v_m$ una base di V, e siano $w_1,\dots,w_n$ vettori di $V$, con $n>m$. Allora $w_1,\dots,w_n$ sono
linearmente dipendenti.

## Corollario

Supponiamo che i vettori $v_1,\dots,v_k$ formino una base di $V$; allora ogni altra base contiene $k$ elementi.

Se $V$ ha una base finita, si dice che la cardinalità della base è la dimensione di $V$.

Se $V$ è lo spazio vettoriale banale la dimensione è zero.

Se non esiste una base finita si dice che la dimensione è infinita:

$$dim\ V=+\infty.$$

## Corollario

Sia A una matrice $m\times n$, con $n>m$. Il sistema lineare $AX = 0$ ha almeno una soluzione non banale.

## Proposizione

Siano:

$$A\in M_{m,n}(\mathbb{R})$$

$$W=\lbrace X\in\mathbb{R}^n|AX=0\rbrace$$

Se una riduzione a scala di $A$ ha $r$ pivot, allora $dim\ W = n − r$.

# Esistenza della base

Uno spazio vettoriale generato da $n$ vettori ha una base con $k\leq n$ elementi.

Dato uno spazio vettoriale $V$ di dimensione $n$, se $v_1,\dots,v_n$ sono linearmente indipendenti allora costituiscono
una base.

Se $V$ ha dimensione $n$ e $W\subseteq V$ è un sottospazio, allora $dim\ W\leq n$, e vale l’uguaglianza solo se $W = V$.

Sia $V$ uno spazio vettoriale di dimensione $n$ e siano $v_1,\dots,v_k$ elementi linearmente indipendenti di $V$. Allora
esistono vettori $v_{k+1},\dots,v_n$ tali che i vettori $v_1,\dots,v_n$ formano una base di $V$. Si dice che
$v_1,\dots,v_n$ è un completamento della base.
