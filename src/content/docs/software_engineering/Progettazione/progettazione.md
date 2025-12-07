---
title: Progettazione
sidebar:
    order: 3
---

```mermaid
---
config:
  layout: elk
  elk: {
    nodePlacementStrategy: "NETWORK_SIMPLEX"
  }
---
graph TB
    P[Progettazione] --> Pon[Ponte]
    Pon --> Specifica
    Pon --> Codifica
    Pon ~~~ A ~~~ Div

    P -->|produce| A[Architettura]

    P --> Div[Si divide in]
    Div --> PA["Progettazione
architetturale"]
    PA --> PA_Des1["scompone
in sottosistemi"]
    PA -->|identifica| PRPV
    PA --> specifica --> PRPV
    Div --> PD["Progettazione
di dettaglio"]
    PD -->|dettaglia| specifica

    A --> Def[definizione]
    Def -->|è la|SS["struttura
del sistema"]
    Def -->|costituita| PRPV
    subgraph PRPV [ ]
        parti & relazioni --> PV("proprietà
visibili")
    end
    Def --> ca("considera
aspetti")
    ca --> funzionali
    ca -->|non| funzionali
    A -->|descritta| viste
    subgraph viste
    direction TB
        Comportamentale ~~~
        Strutturale ~~~
        Deployment
    end
    A -->|si divide in| famiglie -->|con| car_com["caratteristiche
comuni"]
    famiglie -->|seguono| stili
    subgraph stili
    direction LR
    subgraph 1 [ ]
    direction TB
        PP["Pipes & Filter"] ~~~
        Client-Server ~~~
        Master-Slave ~~~
        P2P
    end
    subgraph 2 [ ]
    direction TB
        Publish-Subscribe ~~~
        Model-View-->Controller & Presenter ~~~
        PC["Process Coordinator"]
    end
    1 ~~~ 2
    end
```

# Viste

## Comportamentale

```mermaid
---
config:
  layout: elk
---
flowchart TD
    VC("Comportamentale") -->|definisce| VSSE("struttura sistema
a runtime") --> tramite
    subgraph tramite
    direction LR
        interfacce ~~~ componenti ~~~ connettori
        componenti -->|sono| comp_des["unità software
indipendente e riusabile"]
        componenti --> incapsula --> funzionalità & dati
        componenti -->|fornisce punti di
interazione| porti
        interfacce -->|"restringe
accesso"| funzionalità
        connettori -->|collegano| porti
    end
    VC("Comportamentale") --> utile --> VU1["analisi delle caratteristiche
di qualità a runtime"] & VU2["documentare lo
stile dell’architettura"]
```

---

## Strutturale

```mermaid
---
config:
  layout: elk
---
graph TB
    VS["Strutturale"] -->|definisce| UR["Unità di
realizzazione"]
    VS --> utile --> AD["analisi
dipendenze"] & PD["progettazione
test"] & VP["valutazione
portabilità"]
    UR --> tramite
    subgraph tramite
    direction LR
        subgraph moduli
        URM["unità software"] -->|contenenti| ICR["insieme coerente
di responsabilità"]
        end
        relazioni --> moduli
    end
```

---

## Deploymenti

```mermaid
---
config:
  layout: elk
---
graph TB
    VL["Logistica
(Deployment)"]
    VL -->|definisce| VLD["l'allocazione del software
su ambinti di esecuzione"]
    VL -->|utile| valutazione --> prestazioni & affidabilità
    VLD --> tramite
    subgraph tramite
    direction LR
        subgraph Artefatti
            VLP{prodotti} --> proc["processo di
sviluppo software"] & fun["funzionamento
di un sistema"]
        end
        AE["Ambienti
esecuzione"] ~~~ Artefatti
        dislocazione -->|degli| Artefatti
        dislocazione -->|negli| AE
        Artefatti -->|interconnessi| Artefatti
    end
```

# stili

## Pipes & Filter

```mermaid
---
config:
  layout: elk
---
flowchart TD
    PF["Pipes & Filter"] -->|consiste| fe["flusso di
elaborazione dati"]
    fe -->|viaggiano| Pipe
    fe -->|processati| Filter
    PF -->|componenti| Filter
    PF -->|connettori| Pipe

    Filter -->|ingresso| fl["flusso di dati"]
    Filter -->|uscita| flt["flusso di dati
trasformati"]

    Pipe --> unidirezionale & bufferizzato & po("preserva ordine
dati")
```

## Client-Server

```mermaid
classDiagram
direction LR
    Client "*"-->"1" Server: Invia richiesta
```

### Server

```mermaid
---
config:
  layout: elk
---
classDiagram
direction LR
    class RH["Request
Handler"]
    note for RH "elabora la richiesta e invia
la risposta al client"
    class SfH["Statefull
Handler"]
    note for SfH "consente richieste composite tramite sessione
(record delle richieste di un client)"
    class SlH["Stateless
Handler"]
    note for SlH "gestisce ogni richiesta in modo indipendente"
    class RL["Request
Listener"]
    note for RL "in attesa di richieste"
    RL "1" --> "*" RH
    RH <|-- SfH
    RH <|-- SlH
```

## Master-Slave

```mermaid
classDiagram
direction LR
    Master "1"-->"*" Slave: Invia richiesta
```

## P2P

```mermaid
---
config:
    layout: elk
---
classDiagram
direction LR
    class Peer
    class PeerInterface{
        <<interface>>
    }
    Peer ..> PeerInterface: Input port
    Peer ..|> PeerInterface: Output port
```

## Publish-Subscriber

```mermaid
---
config:
  layout: elk
---
classDiagram
direction LR
    class Publisher-Subscriber{
        <<component>>
    }
    note for Publisher-Subscriber "Publisher: produce classi di eventi

Subscriber: si abbona alle classi di
eventi che ritiene rilevanti"
    class Broker{
        <<component>>
    }
    note for Broker "Smista gli eventi pubblicati"
    class SubscriberInterface{
        <<interface>>
        +notify()
    }
    class BrokerInterface{
        <<interface>>
        +subscribe()
        +remove_subscription()
        +publish()
    }

    Publisher-Subscriber -- Broker: Richiesta sottoscrizione/pubblicazione
    Publisher-Subscriber -- Broker: dati
    BrokerInterface <.. Publisher-Subscriber
    SubscriberInterface <|.. Publisher-Subscriber
    BrokerInterface <|.. Broker
    SubscriberInterface <.. Broker
```

### Publisher e Subscriber distinti (PUSH)

```mermaid
---
config:
  layout: elk
---
classDiagram
direction LR
    class Publisher{
        <<component>>
    }
    class Subscriber{
        <<component>>
    }
    class Broker{
        <<component>>
    }
    class SubscriberInterface{
        <<interface>>
        +subscribe()
        +remove_subscription()
    }
    class PublishInterface{
        <<interface>>
        +publish()
    }
    class NotifyInterface{
        <<interface>>
        +notify()
    }

    SubscriberInterface <|.. Broker
    SubscriberInterface <.. Subscriber
    Subscriber ..|> NotifyInterface
    Broker ..> NotifyInterface
    Broker ..|> PublishInterface
    PublishInterface <.. Publisher
```

## Model-View-Controller

```d2
    grid-columns: 2
    style{
        fill: transparent
    }
    *{
        style{
            fill: transparent
        }
    }
    classes {
        *{
            style{
                fill: transparent
                stroke-width: 0
            }
        }
        empty {
            label: ""
            style: {
                fill: transparent
            }
        }
        User{
            shape: person
            style.stroke-width: 3
            height: 120
        }
        View{
            style{
                fill: lightgreen
                font-color: green
            }
        }
        Model{
            style{
                fill: yellow
                font-color: darkorange
            }
        }
    }
    model-view-controller{
        grid-rows: 3
        grid-columns: 3
        vertical-gap: 80
        style.stroke-width: 0
        empty1.class:empty
        user.class: User
        empty2.class:empty
        empty3.class:empty
        view.class:View
        empty4.class:empty
        Controller{
            style{
                fill: orange
                font-color: darkred
                stroke: transparent
            }
        }
        empty5.class:empty
        model.class:Model
        user -> view: user interaction
        view -> controller: passes calls to
        controller -> model: manipulates
        model -> view: fire events {
            style{
                stroke-dash: 3
            }
        }
    }
    model-view-presenter {
        style.stroke-width: 0
        user.class: User
        view.class:View
        Presenter{
            style{
                fill: lightblue
                font-color: blue
                stroke: transparent
            }
        }
        model.class:Model

        user -> view: user interaction
        view -> Presenter: passes calls to
        Presenter -> model: manipulates
        Presenter -> view: updates
        model -> Presenter: fire events {
            style{
                stroke-dash: 3
            }
        }
    }
```

## Process coordinator

```mermaid
---
config:
    layout: elk
---
classDiagram
direction LR
Coordinator "1"-->"1..*" Component:Invoca
```
