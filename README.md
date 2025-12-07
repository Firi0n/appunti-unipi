# 📚 Appunti UniPi

Repository contenente appunti universitari dell'Università di Pisa, realizzati con [Starlight](https://starlight.astro.build) (un framework di documentazione basato su Astro).

🌐 **Sito web**: [https://firi0n.github.io/appunti-unipi/](https://firi0n.github.io/appunti-unipi/)

## 🚀 Caratteristiche

- **Navigazione intuitiva**: organizzazione gerarchica degli appunti tramite sidebar personalizzabile
- **Ricerca integrata**: ricerca full-text per trovare rapidamente i contenuti
- **Responsive design**: ottimizzato per desktop, tablet e mobile
- **Dark mode**: supporto automatico per il tema chiaro/scuro
- **Deploy automatico**: CI/CD con GitHub Actions per pubblicazione su GitHub Pages
- **Formattazione avanzata**: supporto completo per LaTeX, diagrammi D2, Mermaid e Markdown esteso

## 📐 Supporto Formattazione

- **LaTeX**: rendering avanzato di formule matematiche e notazioni scientifiche
- **Markdown**: supporto completo della sintassi Markdown con estensioni
- **Diagrammi D2**: creazione di diagrammi dichiarativi moderni
- **Mermaid**: diagrammi di flusso, sequenze, Gantt e altro
- **Syntax highlighting**: evidenziazione del codice per numerosi linguaggi

## 🛠️ Tecnologie

- **[Astro](https://astro.build)**: framework per siti statici ad alte prestazioni
- **[Starlight](https://starlight.astro.build)**: tema di documentazione per Astro
- **Docker**: containerizzazione per sviluppo locale consistente
- **GitHub Actions**: automazione del deployment

## 📦 Installazione

### Sviluppo locale

```bash
# Clona la repository
git clone https://github.com/Firi0n/appunti-unipi.git
cd appunti-unipi

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito sarà disponibile su `http://localhost:4321`.

### Sviluppo con Docker

```bash
# Build e avvio con Docker Compose
docker-compose up

# Oppure build manuale
docker build -t appunti-unipi .
docker run -p 4321:4321 appunti-unipi
```

## 📝 Struttura

```
appunti-unipi/
├── src/
│   ├── content/
│   │   └── docs/        # File markdown degli appunti
│   └── assets/          # Immagini e risorse statiche
├── public/              # File pubblici statici
├── sidebar.ts           # Configurazione sidebar
├── astro.config.mjs     # Configurazione Astro
└── Dockerfile           # Configurazione Docker
```

## 🔧 Comandi

| Comando | Azione |
|---------|--------|
| `npm install` | Installa le dipendenze |
| `npm run dev` | Avvia server di sviluppo su `localhost:4321` |
| `npm run build` | Build del sito statico in `./dist/` |
| `npm run preview` | Preview del build locale |

## 📄 Licenza

Questo progetto è rilasciato sotto licenza aperta. Gli appunti sono condivisi per scopi didattici.

## 🤝 Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue o pull request per:
- Correggere errori
- Aggiungere nuovi appunti
- Migliorare la documentazione esistente
