---
title: Autovalori, autovettori e determinante
sidebar:
    order: 8
---

# Diagonalizzazione su R e C

Se $A\in M_{n,n}(\mathbb{R})$, vale una delle tre:

-   A è diagonalizzabile su $\mathbb{R}$ e su $\mathbb{C}$;
-   A è diagonalizzabile su $\mathbb{C}$ ma non su $\mathbb{R}$;
-   A non è diagonalizzabile.

# Autovalori ed autovettori

Sia $f:V\rightarrow V$ un'applicazione lineare. Diciamo che:

-   un vettore $v\neq 0$ è un autovettore di $f\Leftarrow f(v)=\lambda v$ per qualche $\lambda\in\mathbb{R}$;
-   $\lambda$ è un autovalore di $f$;
-   $v$ è un autovettore relativo all'autovalore $\lambda$;

$A=n\times n\Rightarrow$ si definiscono autovalori ed autovettori in termini di
$L_A:\mathbb{R}^n\rightarrow\mathbb{R}^n$.

-   $A=$ matrice diagonale $\Rightarrow$ i vettori della base canonica sono autovettori.
-   $A=\lambda Id\Rightarrow$ tutti i vettori $\neq 0$ sono autovettori $\land$ l'unico autovalore è $\lambda$.
-   Un'applicazione lineare è diagonalizzabile $\Leftrightarrow\exists$ una base di autovettori.

# Autospazi

Data $f:V\rightarrow V$ lineare ed autovalore $\lambda$, si definisce:

$$V_\lambda=\lbrace v\in V|f(v)=\lambda v\rbrace.$$

-   $V_\lambda$ lo spazio di tutti gli autovettori relativi a $\lambda$ uniti allo 0.
-   $V_\lambda$ è lo spazio relativo a $\lambda$.

---

Sia $f:V\rightarrow V$ lineare, e sia $\lambda$ un autovalore. Allora:

$$V_\lambda=Ker(f-\lambda Id);$$

in particolare $V_\lambda$ è un sottospazio.

---

Sia $V$ uno spazio vettoriale $\land\ f:V\rightarrow V$ un endomorfismo $\Rightarrow$

$$\lambda\text{ è un autovalore}\Leftrightarrow f-\lambda Id\text{ non è invertibile.}$$

---

$$\lambda_1,\dots,\lambda_n\text{ autovalori}\in f:V\rightarrow V|\lambda_1\neq\cdots\neq\lambda_n\land v_1,\dots,v_n\text{ autovettori relativi}\Rightarrow$$

$$v_1,\dots,v_n\text{ sono linearmente indipendenti.}$$

---

$V$ spazio di dimensione $n\land f:V\rightarrow V$ ha $n$ autovalori distinti $\Rightarrow f$ è diagonalizzabile.

$V$ spazio di dimensione $n\Rightarrow f:V\rightarrow V$ non può avere più di $n$ autovalori distinti.

# Determinante

$$A\in M_{n,n}(k)|k\in(\mathbb{R}\lor\mathbb{C})\Rightarrow det\ A\in K.$$

$$A\text{ è invertibile}\Leftrightarrow det\ A\neq 0.$$

$$det\ Id=1.$$

## Determinante di matrici con n piccoloù

$$A=(a_{11})\Rightarrow det\ A=a_{11}.$$

---

$$
A=\begin{pmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{pmatrix}\Rightarrow det\ A=a_{11}a_{22}-a_{12}a_{21}.
$$

---

$$
A=\begin{pmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{pmatrix}\Rightarrow
$$

$$
det\ A=\begin{matrix}
  +a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}\\
  -a_{31}a_{22}a_{13}-a_{32}a_{23}a_{11}-a_{33}a_{21}a_{12}
\end{matrix}
$$

## Proprietà del determinante

Sia $A\in M_{n,n}(k)$:

-   $\exists i\neq j\ .\ A^i=A^j\Rightarrow det\ A=0$;
-   $B$ è la matrice ottenuta da $A$ scambiando due colonne $\Rightarrow det\ B=-det\ A$;
-   $B$ è la matrice ottenuta da $A$ aggiungendo ad una colonna un multiplo di un'altra $\Rightarrow det\ B=det\ a$.

# Sviluppo di Laplace

Data una matrice $A\in M_{n,n}(K)$, indichiamo con $A_{ij}$ la matrice $(n-1)\times (n-1)$ ottenuta eliminando da $A$ la
i-esima riga e la j-esima colonna.

Vale lo sviluppo di Laplace $\forall 1\leq i\leq n$:

$$det\ A=\sum_{j=1}^n(-1)^{i+j}a_{ij}det\ A_{ij}.$$

Il determinante di una matrice triangolare è il prodotto della diagonale principale.

# Teorema di Binet

Siano $A,B$ matrici $n\times n\Rightarrow$

$$dat\ AB=det\ A\ det\ B.$$

Una matrice quadrata $A$ è invertibile $\Leftrightarrow det\ A\neq 0.$

$A$ è invertibile $\Rightarrow det\ A^{-1}=(det\ A)^{-1}$.

Data $A\in M_{n,n}(K),\lambda\in K$ è autovalore di $A\Leftrightarrow det(A-\lambda I)=0$
