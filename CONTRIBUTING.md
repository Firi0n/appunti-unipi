# 🤝 Linee Guida per Contribuire

Grazie per il tuo interesse nel contribuire agli appunti UniPi! Ogni contributo è benvenuto e apprezzato.

## 📋 Come Contribuire

### Segnalare Errori o Suggerimenti

1. Controlla prima se esiste già una [issue](https://github.com/Firi0n/appunti-unipi/issues) simile
2. Apri una nuova issue descrivendo:
   - Cosa hai trovato di errato o cosa vorresti migliorare
   - Dove si trova l'errore (link alla pagina o percorso del file)
   - Eventualmente, una proposta di correzione

### Contribuire con Modifiche

1. **Fork del Repository**
   ```bash
   # Clona il tuo fork
   git clone https://github.com/TUO-USERNAME/appunti-unipi.git
   cd appunti-unipi
   ```

2. **Crea un Branch**
   ```bash
   git checkout -b fix/nome-descrittivo
   # oppure
   git checkout -b feature/nome-descrittivo
   ```

3. **Apporta le Modifiche**
   - Segui le convenzioni di formattazione esistenti
   - Testa le modifiche localmente con `npm run dev`
   - Verifica che la build funzioni con `npm run build`

4. **Commit delle Modifiche**
   ```bash
   git add .
   git commit -m "Descrizione chiara delle modifiche"
   ```

5. **Push e Pull Request**
   ```bash
   git push origin nome-del-tuo-branch
   ```
   - Apri una Pull Request su GitHub
   - Descrivi chiaramente cosa hai modificato e perché

## 📝 Standard di Formattazione

### Markdown
- Usa intestazioni gerarchiche (##, ###, ####)
- Lascia una riga vuota tra paragrafi
- Usa code blocks con linguaggio specificato: \`\`\`python

### Formule Matematiche
- Inline: `$formula$` → `\(formula\)`
- Blocco: `$$formula$$` → `\[formula\]`

### Diagrammi
- **Mermaid**: Usa code blocks con \`\`\`mermaid
- **D2**: Usa code blocks con \`\`\`d2

## 🎯 Cosa Cerchiamo

- ✅ Correzioni di errori (typo, formule, concetti)
- ✅ Miglioramenti alla chiarezza espositiva
- ✅ Aggiunte di esempi o spiegazioni
- ✅ Nuovi appunti di corsi
- ✅ Miglioramenti alla struttura/navigazione

## ❌ Cosa Evitare

- ❌ Copia-incolla di materiale protetto da copyright
- ❌ Contenuti non verificati o incorretti
- ❌ Modifiche massive senza discussione preventiva
- ❌ Spam o contenuti off-topic

## 📚 Aggiungere Nuovi Appunti

1. Crea una nuova cartella in `src/content/docs/` per il corso
2. Aggiungi i file `.md` o `.mdx`
3. Aggiorna `sidebar.ts` per includere i nuovi appunti nella navigazione
4. Verifica che tutto compili correttamente

### Struttura Consigliata

```
src/content/docs/
└── nome-corso/
    ├── index.md          # Introduzione al corso
    ├── capitolo-1.md
    ├── capitolo-2.md
    └── esercizi.md
```

## 🔍 Processo di Review

Tutte le Pull Request vengono revisionate per verificare:
- Correttezza dei contenuti
- Qualità della formattazione
- Coerenza con lo stile esistente
- Funzionamento della build

## 💬 Comunicazione

- Per domande generali: apri una [Discussion](https://github.com/Firi0n/appunti-unipi/discussions)
- Per bug o richieste: apri una [Issue](https://github.com/Firi0n/appunti-unipi/issues)
- Per contributi: apri una [Pull Request](https://github.com/Firi0n/appunti-unipi/pulls)

## 📜 Licenza

Contribuendo a questo progetto, accetti che i tuoi contributi saranno rilasciati sotto la licenza [CC-BY-4.0](LICENSE).

---

**Grazie per contribuire agli appunti UniPi! 🎓**
