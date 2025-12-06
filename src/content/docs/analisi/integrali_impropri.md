---
title: Integrali impropri
---

# Definizione

$$\exist a\in\R\land\exist b \in \R\ |\ a<b\Rightarrow\\\exist f:[a,b)\to \R\ |\ \forall a<M<b\ |\ \exist\int_a^Mf(x)\, dx\text{ (Riemann) }\Rightarrow\\\exist \lim_{M\to b^-}\left(\int_a^Mf(x)\,dx\right)=L\Rightarrow\\\int_a^bf(x)\,dx=L$$

Definizione analoga per $(a,b]$
$$\int_{-\infty}^{+\infty}f(x)\,dx\land\exist x\in\R\Rightarrow\int_{-\infty}^{x}f(x)\,dx+\int_{x}^{+\infty}f(x)\,dx$$

$$\exist x,y\in\R\,|\,\int_{x}^{y}f(x)\,dx\land\exist k\notin\R\Rightarrow\int_{x}^{k}f(x)\,dx+\int_{k}^{y}f(x)\,dx$$

In entrambi i casi vale che:

$$\nexists\int_{x}^{k}f(x)\,dx\lor\nexists\int_{k}^{y}f(x)\,dx\lor\int_{x}^{k}f(x)\,dx+\int_{k}^{y}f(x)\,dx = \text{ Indeterminata} \Rightarrow\nexists\int_{x}^{y}f(x)\,dx$$

$$\exist\int_{x}^{k}f(x)\,dx=l_1\in\R\land\exist\int_{k}^{y}f(x)\,dx=l_2\in\R\Rightarrow\text{Converge}$$

## Comportamento integrale al variare di L

|     L     | Comportamento integrale |
| :-------: | :---------------------: |
|   $\R$    |        Converge         |
| $+\infty$ |  Diverge positivamente  |
| $-\infty$ |  Diverge negativamente  |

# Integrali impropri notevoli

$$
\int_a^b\frac{1}{(x-k)^\alpha}\,dx=\begin{cases}
    \text{Converge}&\alpha<1\\
    \text{Diverge}&\alpha\geq 1\\
\end{cases}
$$

$$
\exist a>0\Rightarrow\\\int_{a}^{+\infty}\frac{1}{x^\alpha}\,dx=\begin{cases}
    \text{Converge}&\alpha>1\\
    \text{Diverge}&\alpha\leq 1\\
\end{cases}
$$

$$
\exist 0<a<1\Rightarrow\\\int_{0}^{a}\frac{1}{x^\alpha\cdot|\ln(x)|^\beta}\,dx=\begin{cases}
    \text{Converge}&\begin{cases}
        \alpha<1&\forall \beta\in\R\\
        \alpha = 1&\forall \beta>1
    \end{cases}\\
    \text{Diverge}&\begin{cases}
        \alpha>1&\forall \beta\in\R\\
        \alpha = 1&\forall \beta\leq 1
    \end{cases}
\end{cases}
$$

$$
\exist a>1\Rightarrow\\\int_{0}^{a}\frac{1}{x^\alpha\cdot\ln^\beta(x)}\,dx=\begin{cases}
    \text{Converge}&\begin{cases}
        \alpha>1&\forall \beta\in\R\\
        \alpha = 1&\forall \beta>1
    \end{cases}\\
    \text{Diverge}&\begin{cases}
        \alpha<1&\forall \beta\in\R\\
        \alpha = 1&\forall \beta\leq 1
    \end{cases}
\end{cases}
$$

$$
\exist a>1\Rightarrow\\\int_{1}^{a}\frac{1}{\ln^\alpha(x)}\,dx=\begin{cases}
    \text{Converge}&\alpha<1\\
    \text{Diverge}&\alpha\geq 1\\
\end{cases}
$$

# Criterio del confronto

$$\exist a\in\R\land\exist b \in \R\ |\ a<b\Rightarrow\\\exist f:[a,b)\to \R\ |\ \forall a<M<b\ |\ \exist\int_a^Mf(x)\, dx\text{ (Riemann) }\Rightarrow\\\exist U\text{ Intorno sinistro di }b\,|\,(f(x)\geq0\land g(x)\geq0)\forall x\in U\cap[a,b)\Rightarrow\\\exist V\subset U\land\forall x\in V\cap[a,b)\,.\,f(x)\leq g(x)\Rightarrow$$

$$\int_a^bg(x)\,dx\text{ converge}\Rightarrow\int_a^bf(x)\,dx\text{ converge}$$

$$\int_a^bf(x)\,dx\text{ diverge}\Rightarrow\int_a^bg(x)\,dx\text{ diverge}$$

# Criterio del confronto asintotico

$$\lim_{x\to b^-}\frac{f(x)}{g(x)}=l\Rightarrow$$

$$l\neq 0\land l\neq+\infty\Rightarrow\\\int_a^bf(x)\,dx\text{ converge}\Leftrightarrow\int_a^bg(x)\,dx\text{ converge}$$

$$l=0\Rightarrow\\\int_a^bg(x)\,dx\text{ converge}\Rightarrow\int_a^bf(x)\,dx\text{ converge}$$

$$l=+\infty\Rightarrow\\\int_a^bf(x)\,dx\text{ converge}\Rightarrow\int_a^bg(x)\,dx\text{ converge}$$

# Criterio della convergenza assoluta

$$\exist I\subset\R\,|\,\exist f:I\to\R\,|\,\forall [a,b]\subset I\,.\exist\int_a^bf(x)\,dx\Rightarrow f\text{ si dice assolutamente integrabile su }I$$

## Parte positiva di x

$$
x^+=max\{x,0\}=\begin{cases}
    x&x\geq0\\
    0&x<0
\end{cases}
$$

$$x^+\geq0$$ $$x^+=\frac{|x|+x}{2}$$

## Parte negativa di x

$$
x^-=-min\{x,0\}=\begin{cases}
    0&x>0\\
    -x&x\leq0
\end{cases}
$$

$$x^-\geq0$$ $$x^-=\frac{|x|-x}{2}$$

## Proposizioni

$$f(x)=(f(x))^+-(f(x))^-$$ $$|f(x)|=(f(x))^++(f(x))^-$$

## Corollario

$$\exist a\in\R\land\exist b \in \R\ |\ a<b\Rightarrow\\\exist f:[a,b)\to \R\ |\ \forall a<M<b\ |\ \exist\int_a^Mf(x)\, dx\text{ (Riemann) }\Rightarrow\\\exist U=[b-\delta,b)\,|\,\forall x\in U\,.\,|f(x)|\leq g(x)\land\int_a^bg(x)\,dx\text{ converge}\Rightarrow\\\int_a^bf(x)\,dx\text{ converge}$$
