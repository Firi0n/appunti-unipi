---
title: Eliminazione di Gauss e prodotto matrice-vettore
sidebar:
    order: 2
---

# Eliminazione di Gauss

## Proposizione

Applicando a un sistema lineare una delle seguenti operazioni:

1. moltiplicare un'equazione per uno scalare diverso da 0;
2. scambiare due equazioni;
3. aggiungere a un'equazione un multiplo di un'altra,

si ottiene un sistema lineare equivalente.

## Metodo di eliminazione di Gauss

Consiste nel trasformare un sistema lineare con matrice completa $(A|B)$ in un sistema a scala applicando operazioni
elementari.

1. Se $A$ è la matrice nulla, è già a scala.
2. Altrimenti, identificare la prima colonna non nulla $A^k$ di $A$.
3. Tra gli elementi di $A^k$ uno è non nullo. Sceglierne uno, diciamo $a_{hk}$ ; se $h\neq1$, scambiare la riga h-esima
   della matrice completa con la prima.
4. $\forall\ i > 1$, sommare alla riga i-esima un multiplo della prima riga in modo che il termine $a_{ik}$ diventi
   zero.
5. Ripetere il processo per la sottomatrice.

## Esempio

$$
\begin{cases}
2x_1 + x_2 + 3x_3 &= 2 \\
x_1 - x_2 &= 3 \\
2x_1 + 2x_3 &= 1 \\
-x_1 + x_2 &= 3
\end{cases}
$$

$$
\left(\begin{array}{ccc|c}
2 & 1 & 3 & 2\\
1 & -1 & 0 & 3\\
2 & 0 & 2 & 1\\
-1 & 1 & 0 & 3
\end{array}
\right)\begin{array}{c}
I + 2\cdot IV\\
II + IV\\
III + 2\cdot IV\\
I\leftrightarrow IV\\
\end{array}\rightarrow
\left(\begin{array}{ccc|c}
-1 & 1 & 0 & 3\\
0 & 0 & 0 & 6\\
0 & 2 & 2 & 7 \\
0 & 3 & 3 & 8
\end{array}
\right)\\
$$

$$
b_2\neq0\Rightarrow\text{Il sistema non ha soluzione}
$$

# Prodotto matrice per vettore

Data una matrice $m\times n$:

$$A = (a_{ij})$$

ed un vettore colonna:

$$
B=\begin{pmatrix}
    b_1\\
    \vdots\\
    b_n
\end{pmatrix}
$$

il prodotto $AB$ è definito come il vettore:

$$AB=b_1A_1+\cdots+b_nA_n$$

(colonna per riga)

Introdotto il vettore delle incognite:

$$
X=\begin{pmatrix}
    x_1\\
    \vdots\\
    x_n
\end{pmatrix}
$$

un sistema lineare con matrice completa (A|B) può essere scritto nella forma:

$$AX=B$$

## Proprietà

Siano $A$, $B$ matrici $m\times n$ e siano $X$, $Y$ vettori con $n$ componenti; sia $\lambda$ uno scalare, vale che:

1. $A(X+Y)=AX+AY$;
2. $(A+B)X=AX+AB$;
3. $A(\lambda X)=\lambda(AX)$.

## Proposizione

Data $A\in M_{m,n} (\mathbb{R})$, sia $W$ l'insieme delle soluzioni del sistema lineare omogeneo $AX = 0$. Dato
$B\in R_n$, se il sistema lineare $AX = B$ ammette una soluzione $X_0$, le sue soluzioni sono tutte e soli i vettori:

$$X_0 + Y\in\mathbb{R}^n,$$

al variare di $Y\in W$.
