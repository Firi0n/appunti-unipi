---
title: Testing
sidebar:
    order: 7
---

```mermaid
graph LR
Testing --> fasi --> Progettazione & Escuzione & Analisi & Debugging
Testing -- diviso per --> livelli
Testing --> cp["caso di
prova"] --> tripla --> Input & OA["Output
atteso"] & Ambiente
Testing --> ca["criterio di
adeguatezza"] -- "è soddisfatto se" --> for["$$\forall\text{ test obbligation }\\\ \exists\text{ caso di test}$$"]
ca -- insieme di --> ct
Testing --> TO[Test obbligation] --> ct["caso di
test"] -- su --> pi["proprietà
importanti"]
TO --> d["definite a
partire da"] --> funzionalità & struttura & modello & fi["fault
ipotetici"]
Testing --> Black-Box & White-Box
Black-Box -- "si basano
solo sulla" --> specifica
Black-Box --> strategia -- separare --> funzionalità
strategia -- derivare --> ct1["casi di
test"] -- per --> funzionalità
White-Box -- "si basano sui" --> cs["criteri
strutturali"] -- del --> codice
White-Box --> s0[strategia] -- "percorrere
tutto il" --> fc["flusso di
controllo"]
Testing --> scaffolding -- è --> de["il codice
dei test"]
scaffolding --> include --> driver --> sc["sostituti del
chiamante"]
include --> stub & mock --> sf["sostituti delle
funzionalità"]
include --> harness --> sa["sostituisce parte
dell'ambiente"]
include --> tool --> ge["gestiscono
l'esecuzione"] & rr["registrano i
risultati"] & ar["analizzano i
risultati"]
```

# Metodi Black-box

## Selezione dei valori di test

```mermaid
graph LR
    SV["Selezione
    valori"] --> MS["metodo
    statistico"]
    MS -- usa --> IP["input più
    probabili"]
    MS --> GDA["generazione
    dati"] --> automatizzabile
    MS -- "difficile
    trovare" --> ra["risultato
    atteso"]

    PC -- valido se --> pos_com["possibili
    comportamenti"] -- "<<" --> cd["configurazioni
    d'ingresso"]
    SV --> PC["partizione in
    categorie"] -- divisione in --> CE[classi di
    equivalenza]
    CE --> input -- producono --> sc["stesso
    comportamento
    del programma"]

    SV --> frontiera --> limiti & estremi --> rispetto
    rispetto --> CE
    rispetto --> ti["tipo degli
    input"]
    frontiera --> nasconde --> dc["difetti nel
    codice"]
    frontiera --> significativo --> pd["punto di
    discontinuità"]

    SV --> cnv["casi non
    validi"] -- "devono
    generare" --> errore

    SV --> random --> cn["costo
    nullo"]
    random -- non sempre --> ripetibile
    random -- "difficile
    trovare" --> oa["output
    atteso"]
    SV --> catalogo --> cu["casi
    utili"] -- per --> variabile
```

## Testing combinatorio

```mermaid
graph LR
TC["Testing
combinatorio"] --> strategie -- per ridurre --> ec["esplosione
combinatoria"]
strategie --> vincoli --> errore & proprietà & singoletti
errore --> ue["un errore"] -- per --> posizione
proprietà --> pc["proprietà
comuni"] -- per --> cad["classi di
equivalenza
diverse"]
singoletti -- fissare --> parametri
TC --> PT["Pairwise
testing"] --> cc["combinazioni
delle coppie"]
```

# Metodi White-box

## Flusso di controllo

```mermaid
---
config:
    elk: {
        considerModelOrder: "PREFER_EDGES",
    }
---
graph LR
    FC["Flusso di
    controllo"] --> CS["Criteri strutturali
    di progettazione"] -- "sono definiti per" --> CE["classi di
    elementi"] --> comandi & branch & condizioni & cammini
    CS -- richiedono --> test -- "esercitino
    tutti" --> CE
    FC --> GF["Grafo di
    flusso"] -- definisce --> SC["struttura
    codice"]
    GF -- identifica --> parti --> SC
    GF -- "identifica
    collegamenti" --> parti
    FC --> input --> copertura --> GF
    copertura --> c0[comandi]
    c0 -- adeguatezza --> cop_com["$$\frac{\text{comandi esercitati}}{\text{comandi totali}}$$"]
    c0 --> MT["minimizzare
    test"] -- a parità --> copertura
    copertura --> decisioni -- adeguatezza --> com_cop["$$\frac{\text{rami esercitati}}{\text{rami totali}}$$"]
    copertura --> c1[condizioni] -- adeguatezza --> for["$$\frac{\text{valori assunti dalle condizioni semplici}}{2\cdot\text{condizioni semplici}}$$"]
    c1 -- cresce --> esponenzialmente
    c1 --> tc["test
    cicli"] --> zv["zero
    volte"] & uv["una
    volta"] & pv["più
    volte"]
```

### Copertura delle condizioni definizione formale

```mermaid
graph LR
    definizione --> dati
    dati --> T["$$T=\text{Insieme di test}$$"] -- per --> P
    dati --> P["$$P=\text{Programma}$$"] ~~~
    dati --> CS_def["$$CS=\text{Condizione semplice}$$"]
    definizione --> vale
    vale --> for["$$\forall\ CS \in P\ .$$"] --> t1["$$\exists\ t_1 \in T :\\\ CS(t_1) = \text{True}$$"]
    for --> t2["$$\exists\ t_2 \in T :\\\ CS(t_2) = \text{False}$$"]
    t1 & t2 --> allora["$$\Rightarrow T \text{ copre tutte le } CS \in P$$"]
```

## Altri criteri di test

### Mutazionale

```mermaid
graph LR
Mutazionale -- è --> fault-based
Mutazionale -- valuta --> bt["batteria
di test"]
Mutazionale -- sfrutta --> Mutazioni --> def_m["piccoli cambiamenti
programma"]
Mutazionale --> ipotesi --> dr["difetti
reali"] -- "come
variazioni" --> pc["programma
corretto"]
Mutazionale --> passaggi -- precondizione --> TP["T è corretto su P"]
passaggi -- testiamo --> TsP["T su P'"]
TsP --> PP["P' = mutazione P con difetti"]
passaggi -- verifichiamo --> ris_T["risultato
di T"]
ris_T --> uc["uccide
mutante"] -- ossia --> ft["fallisce almeno
un caso di test"]
uc --> btb["batteria di
test buona"]

ris_T --> ms["mutante
sopravvive"] --> bts["batteria di
test scarsa"]
Mutazionale -- efficacia --> for["$$\frac{\text{mutanti uccisi}}{\text{mutanti totali}}$$"]
Mutazionale -- "numero
difetti" --> for0["$$\frac{\text{mutanti}\cdot\text{difetti}}{\text{mutanti uccisi}}-\text{mutanti}$$"]
Mutazionale -- difetto --> costo
```

### Oracolo

```mermaid
graph LR
Oracolo --> strumento -- genera --> ra["risultati
attesi"]
Oracolo --> metodi --> rs["ricavarli dalle
specifiche"] --> formali & eseguibili
metodi --> IF["inversione delle
funzioni"]
metodi --> VP["Versioni
precedenti"]
metodi --> VM["Versioni
multiple"]
metodi --> SI["Semplificazione
degli input"]
metodi --> SR["Semplificazione
dei risultati"]
```

# Test di sistema

```mermaid
graph LR
TS["Test di
sistema"] --> Facility --> funzionalità
TS --> Security --> sicurezza
TS --> Usability --> uu["usabilità
utente"]
TS --> Performance --> prestazioni
TS --> Load --> cm["carico
massimo"]
TS --> Stress --> sl["superamento
limiti operativi"]
TS --> Storage --> mp["memoria
persistente"]
TS --> Configuration --> cp["configurazioni
previste"]
TS --> Compatibility --> compatibilità
```
