---
title: Successioni
---

# Definizione

Una successione è una funzione che ha come Dominio una semiretta.

$$f:S\to\R\,|\,S=\{n\in\N\,|\,\exist n_0\,|\,n\geq n_0\}$$

# Notazione

Le successioni si indicano con $a_n$

Tutta la successione si denota con $\{a_n\}_{\forall n\in S}$

# Limiti di successioni

Ha senso solo il limite per $n\to+\infty$ (perchè $+\infty$ è l'unici punto di accumulazione di qualsiasi semiretta)

## Definizione

$$\forall V=\{l-\delta,l+\delta\}\,.\,\exist\overline{n}\in\N\,|\,\forall n\geq\overline{n}\,.\,A_n\in V\Rightarrow\\\lim_{n\to+\infty}a_n=l$$

## Comportamento limite

$$l\in\R\Rightarrow\text{converge}$$ $$l=+\infty\Rightarrow\text{diverge positvamente}$$
$$l=-\infty\Rightarrow\text{diverge negativamente}$$

# Sottosuccessioni (estratte)

$$\exist a_n:S\to\R\exist k_n:\N\to S\,|\,\forall n>m\,.\,k_n>k_m\Rightarrow\\a_{k_n}\text{ è una sottosuccessione}$$ In
pratica scegliamo solo un certo sott'insieme di indici, in modo crescente.

## Teorema

$$\lim_{n\to+\infty}a_n=l\Leftrightarrow\forall \subseteq a_n\,.\,\lim_{n\to+\infty}a_{k_n}=l$$ Si può usare per
dimostrare che una successione non a limite.

# Monotonia

$$\forall n\in\N\,.\,a_{n+1}\geq a_n\Leftrightarrow a_n\text{ è debolmente crescente}$$
$$\forall n\in\N\,.\,a_{n+1}> a_n\Leftrightarrow a_n\text{ è strettamente crescente}$$
$$\forall n\in\N\,.\,a_{n+1}\leq a_n\Leftrightarrow a_n\text{ è debolmente decrescente}$$
$$\forall n\in\N\,.\,a_{n+1}<a_n\Leftrightarrow a_n\text{ è strettamente decrescente}$$

## Teorema

$$\{a_n\}\text{ è monotona}\Rightarrow\text{ammette limite}$$ Se è debolmente crescente il limite non può essere
$-\infty$

Se è debolmente decrescente il limite non può essere $+\infty$

# Limitatezza

$$\exist m\in\R\,|\,\forall n\in S\,.\,a_n\geq m\rightarrow\{a_n\}\text{ è limitata superiormente}$$

$$\exist m\in\R\,|\,\forall n\in S\,.\,a_n\leq m\rightarrow\{a_n\}\text{ è limitata inferiormente}$$

$\{a_n\}$ è limitata se è limitata sia superiormente che inferiormente

Se è limitata non è detto che abbia massimo o minimo

## Teorema

$$\lim_{n\to+\infty}a_n=+\infty\Rightarrow\{a_n\}\text{ ha minimo}$$

$$\lim_{n\to+\infty}a_n=-\infty\Rightarrow\{a_n\}\text{ ha massimo}$$

$$\lim_{n\to+\infty}a_n=l\in\R\Rightarrow$$
$$\exist\overline{n}\in\R\,|\,a_{\overline{n}}\geq l\Rightarrow\{a_n\}\text{ ha massimo}$$
$$\exist\overline{n}\in\R\,|\,a_{\overline{n}}\leq l\Rightarrow\{a_n\}\text{ ha minimo}$$

# Legame tra limiti di funzioni e successioni

$$\exist A\subseteq\R\land\exist x_0\in Acc(A)\land\exist f:A\to\R\Rightarrow\\\forall\{a_n\}\subseteq A\,|\,lim_{n\to+\infty}a_n=x_0\land a_n\neq x_0\,.\,\\lim_{x\to x_0}f(x)=l\Leftrightarrow lim_{n\to+\infty}f(a_n)=l$$
![alt text](/src/assets/analisi/image.png)

Ci si può dimostrare che il limite per $x\to x_0$ di $f(x)$ non esiste
