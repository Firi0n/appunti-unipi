---
title: Spazi e sottospazi vettoriali
sidebar:
    order: 3
---

# Spazi e sottospazi

## Spazio vettiriale

Uno spazio vettoriale reale è un insieme V su cui sono definite due operazioni:

$$V\times V\rightarrow V,\quad(v,w)\rightarrow v+w$$

$$\mathbb{R}\times V\rightarrow V,\quad(a,v)\rightarrow av$$

che soddisfano le seguenti proprietà:

-   $(v+w)+u=v+(w+u)$;
-   $\exists 0\in V | V+0=V=0+V$;
-   $v+(-1)v=0=(-1)v+v$;
-   $v+w=w+v$;
-   $\lambda(\mu v)=(\lambda\mu)v$;
-   $\lambda(v+w)=(\lambda v)+(\lambda w)$;
-   $(\lambda+\mu)v=\lambda v+\mu v$;
-   $1v=v$;
-   Elemento $V$ = vettore;
-   Elemento $\mathbb{R}$ = scalare.

## Sottospazio vettiriale

Dato uno spazio vettoriale V, un sottospazio di V è $W\subset V\ |$ :

-   $0\in W$
-   $v,w\in W\Rightarrow v+w\in W$
-   $v\in W\land c\in\mathbb{R}\Rightarrow cv\in W$

Il sottospazio $W\subset V$ è ancora uno spazio vettoriale.

# Spazio dei polinomi

Sia $a:N\rightarrow R$ una funzione:
$$(i\rightarrow a_i | \exists n\in\mathbb{N}\ |\ \forall i\in[0, n]\ .\ a_i\neq 0)$$

Polinomio a coefficienti reali nell'indeterminata $x$:

$$p=a_0x^0+\cdots a_nx^n$$

Per costruzione, 0 è un polinomio ($\forall i\in[0, n]\ .\ a_i=0$);

Il grado di $p\neq0$ viene indicato con $deg\ p$ ed è uguale a $n$, $deg\ 0 =-\infty$;

L'insieme dei polinomi a coefficienti reali nell'indeterminata $x$ si indica con $\mathbb{R}[x]$.

Lo spazio dei polinomi ha una struttura di spazio vettoriale.

# Combinazioni lineari

Dati due vettori:

-   $v_1,\dots,v_k$ di uno spazio vettoriale V
-   $a_1,\dots,a_k$ di scalari

Il vettore:

$$a_1v_1,\dots,a_kv_k$$

è una combinazione lineare di $v_1,\dots,v_k$.

Una combinazione lineari si definisce **banale** se:

$$\forall i\in[1,k]\ .\ a_i=0$$

<br>

$$k=0\Rightarrow 0\in V\text{combinazione lineare di 0 vettori}$$

# Spazio generato

Dato uno spazio vettoriale $V$ e vettori $v_1,\dots,v_k\in V$ si dice spazio generato da $v_1,\dots,v_k$ l'insieme dei
vettori che sono combinazioni lineari di $v_1,\dots,v_k$:

$$Span\lbrace v_1,\dots,v_k\rbrace=\lbrace a_1v_1+\cdots+a_kv_k|a_1,\dots,a_k\in\mathbb{R}\rbrace$$

Lo spazio generato è un sottospazio.

Se $W$ è un sottospazio di V che contiene $v_1,\dots,v_k$, allora W contiene Span{$v_1,\dots,v_k$}.

Quindi Span{$v_1,\dots,v_k$} è il più piccolo sottospazio di $V$ che contiene $v_1,\dots,v_k$.
