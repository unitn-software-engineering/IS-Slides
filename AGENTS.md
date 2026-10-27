# AGENTS.md — IS-Slides

Slide del laboratorio di **Ingegneria del Software** (Università di Trento, Marco Robol).
Ogni capitolo è una cartella `NN-Nome/` con un deck **Marp** in `README.md`.

## Struttura

```
NN-Nome/
├── README.md        # deck Marp (front matter con marp: true)
├── NN-Nome.pdf      # export, NON versionato (*.pdf in .gitignore)
├── img/ o *.png     # immagini usate dal deck
└── package.json     # solo dove presente: script "build" per il PDF
```

- `00-SpecificationDrivedDevelopment/` — Specification Driven Development / AI-native SDLC
  - `AI-Native SDLC.md` — documento sorgente (non allineato all'ultima versione del deck)
  - `riferimenti/` — trascrizioni Markdown delle lezioni 6–8 di P. Giorgini (Use Case, Agile, User Story, esercizio completo); `riferimenti/tmp/` contiene i PDF originali (non versionati)
  - `img/` — screenshot delle lezioni 6–8 usati nel deck
- `01-Git/` … `12-GitHubActions/` — capitoli tecnici (Git, REST, OpenAPI, JS, Express, MongoDB, auth, frontend, deploy, testing, CI)

## Lingua

- Capitolo **00**: italiano.
- Capitoli **01–12**: inglese.
- Commit: italiano, come lo storico del repo.

## Convenzioni Marp

- Front matter: `marp: true`, `theme: default`, `paginate: true`, `header`, `footer`.
- Classi di slide definite nello `style:` del capitolo 00:
  - `<!-- _class: section -->` slide di sezione (centrata)
  - `<!-- _class: small -->` testo più piccolo
  - `<!-- _class: code -->` per slide con blocchi di codice lunghi
- Screenshot a pagina intera: `![bg 88%](img/…)` con `<!-- _header: '' -->`, `<!-- _paginate: false -->`.
- Materiale dalle lezioni del corso: citare sempre la fonte nel piè di pagina, es.
  `<!-- _footer: 'Fonte: P. Giorgini, Ingegneria del Software 2026, lez. 8 p.23' -->`.
- Tabelle e schede (backlog, US, Issue, PR, prompt) preferibilmente in blocchi di codice Markdown, su una colonna.
- Icone emoji nei titoli delle slide; non nel testo.

## Build e verifica

```bash
cd 00-SpecificationDrivedDevelopment
npm install            # prima volta
npm run build          # → 00-SpecificationDrivedDevelopment.pdf
```

Per controllare il layout, esportare le slide come immagini e guardare quelle modificate:

```bash
npx marp --no-stdin --allow-local-files README.md --images png -o /tmp/slides/s.png
```

- `--no-stdin` è necessario: senza, marp-cli resta in attesa dell'input e non termina.
- `--allow-local-files` è necessario per includere le immagini di `img/` nel PDF.
- Dopo ogni modifica verificare che nessuna slide sfori il piè di pagina; se sfora: classe `small`/`code`, testo più corto, o dividere la slide.

## Capitolo 00 — modello didattico (da mantenere coerente)

- **Progetto:** EasyLib. Backlog: US-01 Ricerca libri (RF3, UC-03), US-02 Login operatore (RF1),
  US-03 Registrazione prestito (RF4, UC-04), US-04 Registrazione restituzione (RF4, UC-05).
- **Requisiti:** derivano dal D1 e dalle lezioni 6–8 (`riferimenti/`); non inventare RF, UC o AC.
- **AC:** ID `AC-USxx-yy`, frase dichiarativa + scenario Given-When-Then a livello utente; gli scenari HTTP stanno nei test (Lezione 1) o in `spec.md` (Lezione 2).
- **Prima dello sprint:** ruoli (docente = stakeholder, studente = PO a rotazione), Product Backlog dal D1, setup del repo, DoR e DoD.
- **Lezione 1 (un solo sprint):** refinement → Sprint Planning → Sprint Backlog;
  US-01 code first senza Issue; US-02 test first con Issue e milestone;
  PR, review e merge dopo ogni US; demo e retrospective a fine sprint.
- **Lezione 2:** US-04 con OpenCode; passo 0 porta il contesto nel repo (`docs/requirements.md`, `AGENTS.md`), poi `intent.md` → `spec.md` → `oas3.yaml` → `plan.md`.
- **Prompt OpenCode nelle slide:** uno per task, con vincoli espliciti ("solo questo task", "non scrivere test", "non aggiungere dipendenze").
- Mostrare solo comandi e opzioni che esistono davvero: niente CLI o flag inventati.

## Git

- Non fare commit o push senza richiesta esplicita.
- Il push via HTTPS può fallire con `HTTP 400` per commit con immagini: `git config http.postBuffer 524288000`.
