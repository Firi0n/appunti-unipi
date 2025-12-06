---
title: Algoritmo SPT (Shortest path tree)
sidebar:
    order: 4
---

```js
procedure (p, d) = SPT (G, c, r){
    foreach(i ∈ N){
        p[i] = r;
        d[i] = M ;
    }
    d[r] = 0;
    Q = {r};
    do {
        select i from Q;
        Q = Q \ {i};
        foreach((i , j) ∈ FS(i)){
            if (d[i] + c_i_j < d[j]) {
                d[j] = d[i] + c_i_j ;
                p[j] = i;
                Q = Q ∪ {j};
            }
        }
    }while( Q ̸= ∅ );
}
```

L’algoritmo SPT controlla se le condizioni di Bellman sono verificate e, ogni volta che trova un arco $( i , j )$ per
cui esse sono violate, modifica il predecessore di $j$, ponendo $p[ j ] = i$, e l’etichetta di $j$ ponendo
$d_j = d_i + c_{ij}$.

# SPT.S

Viene estratto il nodo con costo minore.

## Liste non ordinate

inizializzazione delle etichette e della lista Q: $O( n )$

selezione del nodo di etichetta minima: $O( n )$

rimozione da Q del nodo di etichetta minima: $O( 1 )$

inserzione di un nodo o modifica della sua etichetta: $O( 1 )$

Complessità: $O(n^2)$

## Heap binario bilanciato

inizializzazione delle etichette e della lista Q: $O( n )$

selezione del nodo di etichetta minima: $O( 1 )$

rimozione da Q del nodo di etichetta minima: $O( log(n) )$

inserzione di un nodo o modifica della sua etichetta: $O( log(n) )$

Complessità: $O(m\cdot log(n))$

# Algoritmi a selezione su lista (SPT.L)

## FIFO (algoritmo di Bellman)

Corrisponde ad una “visita a ventaglio” (bfs) del grafo.

Tutte le operazioni sui nodi e sugli archi sono implementabili con complessità costante. Quindi la complessità dipende
solo dal numero di volte in cui si visita un nodo ossia $(n-1)$ per il numero di archi $m$.

Complessità: $O(m\cdot n)$

Inoltre possiamo intercettare un ciclo negativo nel momento in cui un nodo viene estratto più di n volte dalla coda.

## Liste a doppio ingresso

Nelle liste a doppio ingresso estraiamo per primi i nodi che non sono mai stati visitati. è più efficiente sul campo.

Complessità: $O(m\cdot n^2)$
