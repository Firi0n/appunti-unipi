---
title: Diagonalizzazione e campo complesso
sidebar:
    order: 7
---

# Diagonalizzabilità

## Endomorfismi

Un'applicazione lineare $f:V\rightarrow V$ è detta endomorfismo.

Sia $f:V\rightarrow V$ un endomorfismo e siano $B,B'$ basi di V. Allora:

$$M_{B'}^{B'}(f)=N^{-1}M_B^B(f)N\ |\ N=M_B^{B'}(Id)$$

$$\text{ due matrici }A,B\in M_{n,n}(K)\text{ sono simili}\Leftarrow\exists\text{ una matrice invertibile }N\ |\ N^{-1}AN=B.$$

-   è una relazione di equivalenza su $M_{n,n}(K)$;
-   tutte le matrici associate a un endomorfismo fissato $f:V\rightarrow V$ sono simili tra loro;

## Matrici diagonalizzabili

-   $A=(a_{ij})$ è diagonale $\Leftarrow\forall i\neq j\ .\ a_{ij}=0$;
-   un endomorfismo $f:V\rightarrow V$ è diagonalizzabile se rispetto a qualche base la matrice associata è diagonale;
-   una matrice quadrata $A$ è diagonalizzabile $\Leftrightarrow L_A$ è diagonalizzabile.

$$f\text{ è diagonalizzabile}\Leftrightarrow\exists\text{ una base }v_1,\dots,v_n\in V|f(v_i)=\lambda_iv_i$$

# Numeri complessi

Indichiamo con $\mathbb{C}$ l'insieme dei numeri complessi:

$$\mathbb{C}=\lbrace a+ib|a,b\in\mathbb{R}\rbrace$$

Definiamo le seguenti operazioni:

## Somma

$$\mathbb{C}\times\mathbb{C}\rightarrow\mathbb{C},\quad(a+ib)+(c+id)=a+c+i(b+d)$$

## Prodotto

$$\mathbb{C}\times\mathbb{C}\rightarrow\mathbb{C},\quad(a+ib)(c+id) = (ac−bd)+i(ad+bc)$$

## Coniugio

$$\mathbb{C}\rightarrow\mathbb{C},\quad\overline{a+ib}=a-ib$$

## Modulo

$$\mathbb{C}\rightarrow\mathbb{R},\quad|a+ib|=\sqrt{a^2+b^2}$$

Si ha un’inclusione naturale di $\mathbb{R}\subset \mathbb{C}$, cioè una mappa:

$$\mathbb{R}\rightarrow\mathbb{C},\quad a\rightarrow a+i0$$

che rispetta somma e prodotto.

## Proprietà di C

Dati $z,w,u\in\mathbb{C}$:

-   $(z+w)+u=z+(w+u)$
-   $z+0=z=0+z$
-   $\exists -z|z+(-z)=0=(-z)+z$
-   $z+w=w+z$
-   $z(w+u)=zw+zu$
-   $(z+w)u=zu+wu$
-   $zw=wz$
-   $1z=z$
-   $z\neq 0\Rightarrow\exists w | zw=1=wz$ (w è l'inverso di z)

# Teorema fondamentale dell'algebra

Ogni polinomio di grado positivo in $\mathbb{C}[x]$ ha almeno una radice.

Quindi:

-   Ogni polinomio $\mathbb{C}[x]$ ha la forma:

$$b(x-a_1)\cdots(x-a_n),\quad a_1,\dots,a_n\in\mathbb{C}$$

-   Ogni polinomio $\mathbb{R}[x]$ ha la forma:

$$bp_1\cdots p_n$$

$$\text{dove }b\in\mathbb{R}\land p_1,\dots,p_n\text{ hanno grado}\leq 2.$$
