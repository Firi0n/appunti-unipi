---
title: Teorema spettrale
sidebar:
    order: 9
---

# Polinomio caratteristico

Data una matrice quadrate $A=(a_{ij})$,definiamo il polinomio caratteristico:

$$P_A(\lambda)=det(A-\lambda I)\in K[\lambda].$$

-   Le radici di $P_A(\lambda)$ sono gli autovalori di $A$;
-   $A\in M_{n,n}(K)\Leftarrow$ il polinomio caratteristico di $A$ ha grado $n$;
-   coefficiente di $\lambda^n\in P_A(\lambda)=(-1)^n$;
-   $B=N^{-1}AN\Rightarrow P_A(\lambda)=P_B(\lambda)$.

Se $f:V\rightarrow V$ è lineare, definiamo il polinomio caratteristico $P_f(\lambda)$ come il polinomio caratteristico
di una matrice $A=M_B^B(f)$ che rappresenta $f$ in una qualche base $B$.

-   La definizione di $P_f(\lambda)$ non dipende dalla base $B$.

Sia $f:V\rightarrow V$ un'applicazione lineare $|\ dim\ V=n$:

-   Il polinomio caratteristico ha al più $n$ radici;
-   $P_f(\lambda)$ ha esattamente $n$ radici contate con molteplicità $\Rightarrow$

$$P_f(\lambda)=(\lambda_1-\lambda)\cdots(\lambda_n-\lambda),$$

&emsp;&emsp;e diciamo che $f$ ha tutti gli autovalori in $K$;

-   $V$ è uno spazio vettoriale su $\mathbb{C}\Rightarrow f:V\rightarrow V$ ha tutti gli autovalori in $\mathbb{C}$;
-   $f$ ha tutti gli autovalori in $K$, il determinante è il prodotto degli autovalori.

# Molteplicità algebrica e geometrica

Dati: $V$ spazio vettoriale su $K$ di dimensione finita, $f:V\rightarrow V$ endomorfismo e $\lambda_0$ autovalore di
$f$:

-   La molteplicità algebrica di $\lambda_0$ è la sua molteplicità come radice di $P_f(\lambda)$;
-   La molteplicità geometrica di $\lambda_0$ è $dim\ V_{\lambda_0}$.

$A\in M_{n,n}(K)\land\lambda_0$ un suo autovalore $\Rightarrow$ le molteplicità algebrica e geometrica di $\lambda_0$
sono quelle come autovalore di $L_A:K^n\rightarrow K^n$.

-   Se $A$ è triangolare superiore o inferiore la molteplicità di $\lambda_0$ è il numero di volte che compare sulla
    diagonale.
-   Se $f$ è diagonalizzabile, la molteplicità algebrica di $\lambda_0$ coincide con la molteplicità geometrica.

Dato un endomorfismo $f$ di $V$, la molteplicità geometrica di ogni suo autovalore è minore o uguale alla molteplicità
algebrica.

# Criteri di diagonalizzazione

Sia $f$ un endomorfismo di uno spazio vettoriale $V$ su $K$; siano $\lambda_1,\dots,\lambda_k$ i suoi autovalori. Sono
equivalenti:

-   $f$ è diagonalizzabile;
-   $f$ ha tutti gli autovalori in $K\land\forall\lambda_i$ la molteplicità algebrica coincide con quella geometrica;
-   La somma delle molteplicità geometriche è pari a $dim\ V$.

Sia $f$ un endomorfismo di uno spazio vettoriale $V$ su $K$:

$f$ ha tutti gli autovalori in $K$ e ogni autovalore ha molteplicità algebrica uno $\Rightarrow$ f è diagonalizzabile.

# Teorema spettrale

Ogni matrice simmetrica ha una base ortonormale di autovettori; in particolare, è diagonalizzabile.
