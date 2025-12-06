---
title: Insiemi
---

# Insiemi numerici:

-   $\N$ (Numeri naturali): Numeri interi positivi;
-   $\Z$ (Numeri relativi): Tutti i numeri interi;
-   $\mathbb{Q}$ (Numeri razionali): Classi di equivalenza di frazioni;
-   $\R$ (Numeri reali): Insieme dei numeri reali.

# Intervalli di $\R$

$I\subset\R\text{ si dice intervallo di }\R\text{ se }\forall x,y\in I\text{ con }x<y\text{, dato }z\subset\R\ |\ x<z<y\Rightarrow z \in I$

![Intervalli](/src/assets/analisi/Intervalli.png)

## Notazione:

-   [] = Intervallo chiuso (estremi inclusi);
-   () = Intervallo aperto (estremi esclusi).

è possibile abbinare i due tipi di parentesi per costruire intervalli semi-aperti/chiusi.

Utilizzando $\plusmn\infty$, a cui va abbinata la rispettiva parentesi tonda, otteniamo delle semirette.

# Funzioni

Una funzione è una terna di oggetti A,B,f:

-   A (Dominio) = Insieme di partenza;
-   B (Codominio) = Insieme di arrivo;
-   f è una legge che mette in corrispondenza ogni elemento di A con un solo elemento di B
    ([relazione totale e univalente](../Fondamenti/relazioni.md#proprietà-di-relazioni)).

## Grafico di f

$Graph(f)\subset A\times B$;

$Graph(f)=\{(a,b)\in A\times B\ |\ b=f(a)\}$.

## Immagine di D attraverso f

$D\subset A\Rightarrow \{ y\in B\ |\ \exist x\ |\ x\in D\land y=f(x)\}$.

## Funzioni monotone

$\text{Data } f:A\rightarrow B, \forall x_1,x_2\in A\ |\ x_1>x_2\Rightarrow\forall$

-   $f(x_1)>f(x_2)\Rightarrow\text{ f si dice strettamente crescente;}$
-   $f(x_1)<f(x_2)\Rightarrow\text{ f si dice strettamente decrescente;}$
-   $\text{In caso sia }\geq/\leq\ \Rightarrow\text{ f si dice debolmente crescente/decrescente.}$

Nei casi precedenti f si dice strettamente/debolmente monotona.

### In pratica

$\text{f è strettamente crescente }\Leftrightarrow{\triangle y\over\triangle x} > 0$.

$\text{f è strettamente decrescente }\Leftrightarrow{\triangle y\over\triangle x} < 0$.

vale la stessa cosa per debolmente crescente/decrescente sostituendo sempre $\geq/\leq$.

$f(x_1)=f(x_2)\Rightarrow$ f è sia debolmente crescente che debolmente decrescente (retta orizzontale).

### Proprietà delle funzioni monotone

| $f\circ g$    | f crescente              | f decrescente            |
| ------------- | ------------------------ | ------------------------ |
| g crescente   | $f\circ g$ è crescente   | $f\circ g$ è decrescente |
| g decrescente | $f\circ g$ è decrescente | $f\circ g$ è crescente   |

f è strettamente monotona $\Rightarrow$ f è iniettiva.

## Insieme di definizione (dominio naturale)

è il più grande sott’insieme di $\R$ dove ha senso scrivere la funzione.

## Parità e disparità

$\text{Data }f:A\rightarrow B,\forall x\in A\ .\ -x\in A\Leftrightarrow$

-   $\forall x\in A\ .\ f(x)=f(-x)\Leftrightarrow\text{ f è pari;}$
-   $\forall x\in A\ .\ f(x)=-f(-x)\Leftrightarrow\text{ f è dispari.}$

## Funzione periodica

$f:A\rightarrow B\text{ si dice periodica di periodo }P\in\R\text{ se P è il più piccolo numero reale | }\forall x\in A\ .\ f(x+P)=f(x)$

## Funzione inversa

Se f è bigettiva ([funzioni bigettive](../Fondamenti/relazioni.md#biiezioni)) allora esiste la funzione inversa.

$$f^{-1}(f(x))=x$$

## Massimi e minimi

$m = max(A)\Leftrightarrow\forall a\in A\ .\ \exist\ m\in A\ |\ m \geq a.$

$n = min(A)\Leftrightarrow\forall a\in A\ .\ \exist\ n\in A\ |\ n \leq a$.

Il massimo/minimo di una funzione è unico, ma ci possono essere più punti di massimo/minimo.

## Maggioranti e minoranti

Maggioranti di A = $M_A = \{k\ |\ \forall a\in A\ .\ k\geq a\}$.

Minoranti di A = $m_A = \{l\ |\ \forall a\in A\ .\ l\leq a\}$.

$\exist$ maggiorante/minorante di A $\Rightarrow$ ne esistono infiniti.

## Limitatezza

$M_A \neq \empty\Rightarrow$ A si dice limitato superiormente.

$m_A \neq \empty\Rightarrow$ A si dice limitato inferiormente.

A è limitato superiormente e inferiormente $\Rightarrow$ a si dice limitato.

## Estremi

### Estremo superiore

$sup(A)$ è il minimo dell'insieme dei maggioranti.

A non è limitato $\Rightarrow sup(A) = +\infty$.

$m = sup(A)\Leftrightarrow (\forall a\in A\ .\ m\geq a) \land (\forall\varepsilon > 0\ \exist\ \overline{a}\in A\ |\ \overline{a} > m-\varepsilon)$:

-   m è maggiorante e non ci sono altri maggioranti più piccoli di m.

### Estremo inferiore

$inf(A)$ è il massimo dell'insieme dei minoranti.

A non è limitato $\Rightarrow inf(A) = -\infty$.

$m = inf(A)\Leftrightarrow (\forall a\in A\ .\ m\leq a) \land (\forall\varepsilon > 0\ \exist\ \overline{a}\in A\ |\ \overline{a} < m-\varepsilon)$:

-   m è minorante e non ci sono altri minoranti più grandi di m.

### Proposizione

|                 | f è debolmente crescente | f è debolmente decrescente |
| --------------- | ------------------------ | -------------------------- |
| $\exist max(A)$ | f ammette massimo su A   | f ammette minimo su A      |
| $\exist min(A)$ | f ammette minimo su A    | f ammette massimo su A     |

## Continuità delle funzioni

$$
\text{f si dice continua in }x_0\Leftarrow\\
\forall\epsilon\text{ trovo un }\delta > 0\text{ con }x\in (x_0-\delta,x_0+\delta) \Rightarrow\\
x\in(f(x_0)-\epsilon,f(x_0)+\epsilon)
$$

![Continuità](/src/assets/analisi/continuità.png)

## Teorema della permanenza del segno

$$
\text{Dati: }A\subset\R, f:A\to\R, x_0\in A\ .\\
\text{f è continua in }x_0\land f(x_0) > M \Rightarrow\\
\exist\ \delta > 0\ |\ \forall\ x\in (x_0-\delta,x_0+\delta) .\ f(x) > M
$$

![alt text](/src/assets/analisi/permanenza_del_segno.png)

### Operazioni

$\text{f e g continue in }x_0\Rightarrow$

-   $f+g\text{ è continua in }x_0$;
-   $f\cdot g\text{ è continua in }x_0$;
-   $|f|\text{ è continua in }x_0$;
-   $f(x_0)\neq 0 \Rightarrow {1\over f(x_0)}\text{ è continua in }x_0$;
-   $f(x_0) = y_0\in B\ \land\text{ f continua in }x_0\land g\text{ continua in }y_0\Rightarrow g\circ f\text{ è continua in }x_0$;
-   $\text{f ha come dominio un intervallo }\land\text{ è continua }\land\text{ invertibile }\Rightarrow f^{-1}\text{ è continua.}$

### Teorema degli zeri

$$
f: [a;b]\rightarrow\R\ \land\text{ f continua su }[a;b]\Rightarrow\\
f(a)\cdot f(b)<0\Rightarrow\exist c\in (a;b)\ |\ f(c)=0
$$

### Teorema dei valori intermedi

$$
f\text{ ha come dominio un intervallo }\land\text{ è continua }\Rightarrow f(i)\text{ è un intervallo.}
$$

$$
f(I) \text{ è un intervallo }\Rightarrow\\
\exist\ x_1\ |\ f(x_1) = y_1 \land \exist\ x_2\ |\ f(x_2) = y_2\Rightarrow\forall y_1<y<y_2 \exist x\ |\ f(x) = y
$$

### Teorema di Weierstrass

$$
f:[a;b]\rightarrow\R\text{ è continua }\Rightarrow\text{ f ammette massimo e minimo su }[a;b]
$$

## Valore assoluto

$$
|x| = \begin{cases} x &x\geq 0 \\-x &x<0\end{cases}
$$

### Proprietà:

-   $\forall x\in\R\ .\ |x|\geq 0$;
-   $|x| = 0 \Leftrightarrow x = 0$;
-   $\forall x\in\R\ .\ |x| = |-x|$;
-   $\forall x\in\R\ .\ x\leq |x|$;
-   $\forall x\in\R\ .\ |-x|\leq x\leq |x|$;
-   $M > 0 \Rightarrow (|x\leq M|\Leftrightarrow -M\leq x\leq M)$.

### Disuguaglianza triangolare

$$
|a+b|\leq |a|+|b|
$$

$$
||a|-|b||\leq |a-b|
$$
