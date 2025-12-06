---
title: Mappe lineari complete
sidebar:
    order: 5
---

# Spazio somma e spazio intersezione

Sia $V$ uno spazio vettoriale; siano $U,W\subseteq V$ sottospazi:

-   $U\cap W$ è un sottospazio;
-   In generale $U\cup W$ non è un sottospazio;
-   Si definisce $U+W=\lbrace u+w|u\in U,w\in W\rbrace$;
-   $U+W$ è un sottospazio;
-   Si dice che $U$ e $W$ sono in somma diretta se $U\cap W = \lbrace 0\rbrace$;
-   $V=U+W\land U\cap W=\lbrace0\rbrace\Rightarrow V=U\oplus W\land W\text{ è complemento di }U$.

## Proposizione

$$
V=U\oplus W\Leftrightarrow\text{ ogni vettore di }V\text{ si
scrive in modo unico come }u+w, u\in U\land w\in W.
$$

# Formula di Grassmann

Sia $V$ uno spazio vettoriale di dimensione finita, e siano $U,W\subseteq V$ sottospazi. Allora:

$$dim(U+W)+dim(U\cap W) = dim(U)+dim(W)$$

# Trasposta

Data una matrice $A\in M_{n,n}(\mathbb{R})$, la trasposta di $A=(a_{ij})$ è la matrice
$B=(b_{ij})\text{ con } b_{ij}=a_{ji}$

Si scrive:

$$B=A^t$$

Valgono:

$$(A^t)^t=A$$

$$A^t=A\Rightarrow A\text{ è simmetrica.}$$

$$A^t=-A\Rightarrow A\text{ è antisimmetrica.}$$

Gli spazi:

$$U=\lbrace A\in M_{n,n}(\mathbb{R})|A^t=A\rbrace$$

$$V=\lbrace A\in M_{n,n}(\mathbb{R})|A^t=-A\rbrace$$

Sono sottospazi di $M_{n,n}(\mathbb{R})$.

Vale:

$$U\oplus W=M_{n,n}(\mathbb{R})$$

# Applicazioni lineari

Siano $V$ e $W$ due spazi vettoriali. Si dice che un'applicazione

$$f:V\rightarrow W$$

è lineare $\Leftarrow\forall u,v\in V,c\in\mathbb{R}$ soddisfa:

-   $f(u+v)=f(u)+f(v)$
-   $f(cu)=cf(u)$

Ogni applicazione lineare soddisfa:

$$f(0)=0$$

$$f(a_1v_1+\cdots+a_nv_n)=a_1f(v_1)+\cdots+a_nf(v_n)$$

# Applicazioni lineari definite in termini di una base

Siano $V, W$ spazi vettoriali e siano $v_1,\dots,v_n$ i vettori di una base di V. Dati vettori $w_1,\dots,w_n\in W$
eiste un'unica applicazione lineare $f:V\rightarrow W|f(v_i)=w_i$;

Esplicitamente:

$$f(a_1v_1+\cdots+a_nv_n)=a_1w_1+\cdots+a_nw_n$$

# Nucleo

Data un'applicazione lineare $f:V\rightarrow W$, il nucleo di f è lo spazio:

$$Ker\ f=\lbrace v\in V|f(v)=0\rbrace$$

Esso è un sottospazio vettoriale.

Data una matrice $A\in M_{m,n}(\mathbb{R})$, il nucleo di A è il nucleo $Ker\ A=Ker\ L_A$ dell'applicazione lineare
associata $L_A:\mathbb{R}^n\rightarrow\mathbb{R}^m$

$$Ker\ f=0\Leftrightarrow f\ iniettiva.$$

## Proposizione

$$
f:V\rightarrow W\ lineare\land iniettiva\Rightarrow\\
v_1,\dots,v_n\in V\text{ linearmente indipendenti}\Rightarrow\\
f(v_1),\dots,f(v_n)\text{ sono linearmente indipendenti.}
$$

# Immagine

Data un'applicazione lineare $f:V\rightarrow W$, la sua immagine è lo spazio:

$$Im\ f =\lbrace f(v)|v\in V\rbrace.$$

Esso è un sottospazio vettoriale.

$$f\ suriettiva\Leftrightarrow Im\ f =W.$$

$$A\ matrice\Rightarrow Im\ A=Im\ L_A$$

$$A=(A^1,\dots,A^n)\Rightarrow Im\ A=Span\lbrace A^1,\dots,A^n\rbrace$$

## Teorema

$$
f:V\rightarrow W\text{ lineare }\land V\text{ di dimensione finita}\Rightarrow\\
dim\ V = dim\ Im\ f+dim\ Ker\ f
$$

## Corollario

$$
f:V\rightarrow W|dim\ V=dim\ W<+\infty\Rightarrow\\
f\ iniettiva\Leftrightarrow f\ suriettiva.
$$

# Isomorfismi

Date applicazioni lineari:

$$f:V\rightarrow W,g:W\rightarrow U$$

la composizione:

$$g\circ f:V\rightarrow U$$

è un'applicazione lineare.

-   Un'applicazione lineare $f:V\rightarrow W$ è un isomorfismo se è biunivoca.
-   Due spazi vettoriali sono isomorfi se esiste un isomorfismo tra di essi.

$$f:V\rightarrow W\text{ è un isomorfismo}\Rightarrow f^{-1}:W\rightarrow V\text{ è un isomorfismo}$$

-   $B=\lbrace v_1,\dots,v_n\rbrace\text{ base di }V\Rightarrow M_B:V\rightarrow\mathbb{R}^n\text{ è un isomorfismo.}$
-   Ogni spazio vettoriale di dimensione finita è isomorfo a $\mathbb{R}^n$.

Dato $B=\lbrace v_1,\dots,v_n\rbrace$ una base di $V$, abbiamo isomorfismo:

$$M_B:V\rightarrow\mathbb{R}^n,M_B(v_i)=e_i$$
