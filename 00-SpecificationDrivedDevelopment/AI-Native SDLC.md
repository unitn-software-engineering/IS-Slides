# AI-Native SDLC — Percorso didattico progressivo

Oct 6, 2026 · @Marco

## Introduzione

Il percorso è composto da due lezioni e da un'anticipazione del workshop. Entrambe le lezioni usano lo stesso progetto di riferimento, **EasyLib**, una piattaforma per la gestione dei prestiti bibliotecari universitari. Le User Story sono il vincolo di lavoro: la lezione 1 implementa US-07 (restituzione libro) a mano; la lezione 2 ripete il ciclo su US-06 (controllo libro già in prestito) con OpenCode strutturato.

- **Lezione 1: Dai requisiti all'implementazione.** Tutti i passi a mano, con un commit per ogni passo. OpenCode è ammesso solo come generatore di codice, con un prompt unico e senza documenti di contesto.
- **Lezione 2: Ciclo strutturato con OpenCode.** Gli stessi passi, ma gli artefatti intermedi (intent.md, spec.md, plan.md) vengono prodotti con OpenCode in dialogo, e tu li approvi prima di andare avanti.
- **Anticipazione: Workshop.** Automazione completa con agenti, git worktree, pull request e review automatiche.

## Lezione 1: Dai requisiti all'implementazione

**Obiettivo.** Percorrere una volta l'intero ciclo, dal requisito al codice, toccando con mano ogni decisione e l'ordine in cui va presa. Nessun passo viene delegato.

### Passo zero: sviluppo esplorativo

Su un repository di prova, senza alcun documento, chiedi a OpenCode di implementare `GET /api/v1/books` con un solo prompt. Funziona e i test passano. Il giorno dopo chiedi di aggiungere la restituzione dei libri: OpenCode non ricorda nulla della sessione precedente e deve rileggere il codice per ricostruire il contesto. Questo è il problema che il resto della lezione risolve. Poi si riparte dal setup su EasyLib.

### Setup del progetto

1. **README.md.** Scrivi a mano il nome del progetto, una o due frasi di descrizione e lo stack scelto. Commit: `docs: add README`.
2. **docs/requirements.md.** Identifica gli attori, le entità principali con gli attributi chiave e il backlog in tabella (ID, User Story, Priorità Must/Should/Could Have, Stato). Organizza il backlog per feature (es. Gestione prestiti) e scarta ciò che è fuori scope. Commit: `docs: add requirements`.
3. **Scaffold.** Crea a mano le cartelle derivate dai requisiti, un file placeholder per ogni entità, `.gitignore`, `package.json` con le dipendenze e `.env.example`. Commit tutto prima di installare la prima dipendenza: `chore: scaffold project structure`.

### Ciclo per US-07

4. **Chiarisci la US.** Prendi US-07 dal backlog («come bibliotecario, voglio registrare la restituzione di un libro») e scrivi in `docs/us/US-07.md` le domande aperte. Esempi: chi può registrare la restituzione? Va conservata la storia del prestito? Rispondi tu, come committente, e annota le risposte. Commit: `docs: clarify US-07`.
5. **Criteri di accettazione.** Scrivi a mano i criteri in formato Given-When-Then, uno per scenario: successo, libro non trovato, utente non autorizzato. Commit: `docs: acceptance criteria US-07`.
6. **Piano dei file.** Elenca a mano i file da creare o modificare, descrivi cosa cambia in ciascuno e in quale ordine. Ordina per dipendenza: cosa deve esistere prima che il resto funzioni? Commit: `docs: plan US-07`.
7. **Test per primi.** Scrivi i test che derivano dai criteri, prima del codice. Devono fallire. Commit: `test: US-07 acceptance tests`.
8. **Implementazione.** Scrivi il codice seguendo il piano, file per file. Se vuoi usare OpenCode, usa un solo prompt del tipo «Implementa US-07 seguendo docs/us/US-07.md e i test esistenti», poi leggi ogni file generato e correggi ciò che non torna. Commit per file o gruppo logico.
9. **Verifica.** Esegui i test. Per ogni criterio di accettazione annota a mano se è coperto da un test verde. Commit delle correzioni.
10. **Diario.** In fondo a `docs/us/US-07.md` scrivi tre righe: cosa è stato più difficile, quale decisione hai dovuto ricordare, cosa cambieresti. Commit: `docs: retrospective US-07`.

### Collaborazione su GitHub

Questa parte usa solo GitHub e la review tra compagni, senza automazioni.

11. **Issue.** Apri una Issue nel repository con titolo e descrizione della US, copiando i criteri da `docs/us/US-07.md`. Annota il numero (es. #7).
12. **Branch.** Crea `feature/us-07` a partire da `main` e lavora solo lì.
13. **Pull request.** Apri una PR verso `main` con una description scritta a mano: cosa cambia, quali criteri sono coperti da quali test, e `Closes #7` per collegare la Issue.
14. **Review.** Un compagno legge il diff, verifica che rispetti `docs/us/US-07.md` e lascia almeno un commento costruttivo. Anche tu fai review della PR di un compagno, con lo stesso criterio.
15. **Correzioni e merge.** Correggi i commenti ricevuti, aggiorna la PR e fai merge solo dopo l'approvazione. La Issue si chiude da sola.

**Deliverable.** Un repository con US-07 implementata, test verdi, una PR mergiata con almeno un commento di review, la Issue chiusa e il link tra i due visibile nella cronologia GitHub.

**Il limite che emerge.** Quando riapri il progetto il giorno dopo, il contesto è nei file ma non è collegato: nulla dice quale criterio ha guidato quale riga. Lo si nota quando un requisito cambia a metà implementazione e devi ricordarti a mano quali file toccare. È il problema che la lezione 2 affronta.

### Esempi della lezione 1

**README.md (esempio di passo 1).**

```
# EasyLib

Piattaforma fullstack per la gestione dei prestiti bibliotecari universitari.
Gli studenti consultano il catalogo, verificano la disponibilità
delle copie e gestiscono i propri prestiti attivi.

## Stack
- **Backend**: Node.js, Express 5, MongoDB (Mongoose), JWT
- **Frontend**: Vue 3, Vite
- **Test**: Jest, Supertest
```

**docs/requirements.md (esempio di passo 2).**

```
# Requisiti — EasyLib

## Attori
- **Studente**: consulta il catalogo, gestisce i propri prestiti
- **Bibliotecario**: gestisce il catalogo e le restituzioni
- **Sistema**: verifica disponibilità, gestisce autenticazione

## Entità principali
| Entità | Attributi chiave |
|---|---|
| Student | email, password |
| Book | title, author, isbn, genre, year |
| Booklending | student, book, start_date, end_date, status |

## Backlog iniziale
| ID | User Story | Priorità | Stato |
|---|---|---|---|
| US-01 | Come studente, voglio consultare il catalogo con titolo, autore e ISBN | Must Have | Da fare |
| US-04 | Come studente autenticato, voglio prendere in prestito un libro disponibile | Must Have | Da fare |
| US-06 | Come studente, non devo poter prendere un libro già in prestito | Must Have | Da fare |
| US-07 | Come bibliotecario, voglio registrare la restituzione di un libro | Should Have | Da fare |

## Domande aperte
- I bibliotecari hanno credenziali separate dagli studenti?
- Esiste un limite al numero di libri che uno studente può tenere in prestito?
- Quanto dura un prestito standard?
```

**Struttura creata (esempio di passo 3).**

```
EasyLib/
├── README.md
├── docs/
│   └── requirements.md
├── .gitignore
├── .env.example           # PORT, SUPER_SECRET, DB_URL, GOOGLE_CLIENT_ID
├── package.json
├── index.js               # TODO: configurare Express e connettere MongoDB
├── app/
│   ├── authentications.js # TODO
│   ├── books.js           # TODO
│   ├── students.js        # TODO
│   ├── booklendings.js    # TODO
│   └── models/
│       ├── book.js        # TODO
│       ├── student.js     # TODO
│       └── booklending.js # TODO
└── test/
```

**Passo zero: file prodotti dal prompt unico.** Il prompt per GET /api/v1/books ha prodotto `app/models/book.js` (schema Mongoose con title, author, isbn, genre, year, available), `app/books.js` (route che risponde con array e campo `self`), `app/books.test.js` (200 con array) e la registrazione in `index.js`. Commit: `feat: GET /api/v1/books`.

**Esempio di commento in review (passo 8 della lezione, controllo del compagno).** `app/booklendings.js`: il middleware `tokenChecker` non è applicato a questa route. Lo spec dice che senza token la risposta deve essere 401. Lo studente corregge, aggiorna la PR e fa merge solo dopo l'approvazione.

## Lezione 2: Ciclo strutturato con OpenCode

**Obiettivo.** Ripetere i passi della lezione 1 su US-06, ma con gli artefatti intermedi generati da OpenCode. Il tuo ruolo cambia: non scrivi più i documenti, li valida. Ogni artefatto ha un gate: lo approvi, lo committi, poi passi al successivo.

### Contesto persistente

Prima di aprire OpenCode, chiedigli di generare `AGENTS.md` a partire da `README.md` e `docs/requirements.md`, poi rivedilo. Questo file è il contesto che l'agente rilegge a ogni sessione, così il giorno dopo non deve ricostruire tutto dal codice. Se esistono, includi anche `docs/architecture.md` e `oas3.yaml`. Commit: `docs: add AGENTS.md`.

### Ciclo per US-06

1. **intent.md (just-in-time).** Crea `intent/<feature>/intent.md` con le sezioni Problema, Risultato atteso, Utenti e sistemi coinvolti, Vincoli, Domande aperte. Non compilarlo a mano: descrivi la US a OpenCode a voce. Lui fa domande, tu rispondi, e il file viene generato. Rileggilo, correggi ciò che non è vero e imposta lo stato su approvato. Commit: `docs: intent US-06`.
2. **spec.md.** Chiedi a OpenCode di derivare `spec.md` dall'intent approvato: endpoint (metodo, path, autenticazione, codici di risposta), modifiche al modello dati, criteri Given-When-Then per successo, not found e non autorizzato, e una sezione Aree di concern con le ambiguità. Risolvi tu ogni concern prima di andare avanti e annota la decisione nell'intent. Commit: `docs: spec US-06`.
3. **Contratto API.** Se il progetto ha un `oas3.yaml`, chiedi a OpenCode di estenderlo con i nuovi endpoint definiti in `spec.md`. Commit: `docs: openapi US-06`.
4. **plan.md.** Avvia OpenCode in plan mode e chiedi il piano: file da creare o modificare, ordine, dipendenze, test da scrivere. Correggi il piano: i test devono venire prima del codice e l'ordine deve rispettare le dipendenze. Commit: `docs: plan US-06`.
5. **Implementazione a passi.** Esegui il piano un passo alla volta. Dopo ogni passo: test, lettura del diff, commit. Se un passo non torna, correggi `plan.md` prima di continuare, non il codice in silenzio.
6. **Verifica contro la spec.** Scorri i criteri di `spec.md` uno per uno e collega ciascuno a un test. Un criterio senza test è un criterio non verificato.
7. **Confronto.** Riprendi la retrospettiva della lezione 1: quali passi hai delegato? Quali errori hai intercettato in `plan.md` invece che nel codice?

**Deliverable.** `intent/<feature>/intent.md`, `spec.md` e `plan.md` committati prima dell'implementazione, almeno una correzione manuale documentata nei commit, test verdi e ogni criterio di `spec.md` collegato a un test.

**Struttura di riferimento a fine lezione:**

```
EasyLib/
├── AGENTS.md
├── README.md
├── docs/
│   ├── requirements.md
│   └── us/
├── intent/
│   └── <feature>/
│       ├── intent.md
│       ├── spec.md
│       └── plan.md
├── oas3.yaml
├── app/
└── .github/
```

### Esempi della lezione 2

**AGENTS.md: prompt.**

```
Leggi README.md e docs/requirements.md.
Genera AGENTS.md come file di contesto per le future sessioni OpenCode.
Includi: convenzioni di stack, vincoli espliciti, dove trovare
requisiti e artefatti.
Non inventare dettagli architetturali — il codice non esiste ancora.
```

**AGENTS.md: output generato.**

```
# EasyLib — contesto per OpenCode

## Stack
Node.js + Express 5 (backend), MongoDB + Mongoose (persistenza),
Vue 3 + Vite (frontend), Jest + Supertest (test).

## Convenzioni
- ES Modules ovunque (import/export, mai require)
- Messaggi di commit: Conventional Commits (feat/fix/docs/test/chore)

## Vincoli
- Non aggiungere dipendenze npm senza indicarlo esplicitamente
- Non risolvere silenziosamente ambiguità di dominio: segnalarle
- I requisiti sono in docs/requirements.md — non inventarne di nuovi

## Dove trovare le cose
- Requisiti e backlog: docs/requirements.md
- Intent, spec, plan per ogni US: intent/<feature-name>/
- Architettura (quando disponibile): docs/architecture.md
- API reference (quando disponibile): oas3.yaml
```

**intent.md (just-in-time): prompt.**

```
Voglio implementare la restituzione di un libro. Oggi non esiste
un modo per segnare un libro come restituito — il bibliotecario
deve farlo manualmente nel database.

Aiutami a definire questa feature. Fai le domande necessarie
per chiarire scope, vincoli e comportamento atteso, poi genera
intent/return-book/intent.md usando il template standard.
```

OpenCode fa due domande: (1) chi può registrare la restituzione, solo il bibliotecario o anche lo studente? (2) serve conservare la storia del prestito o basta eliminare il documento? Lo studente risponde: solo il bibliotecario, e per ora basta eliminare il documento.

**intent/return-book/intent.md: output generato.**

```
# Intent: restituzione libro
Autore: studente. Stato: bozza.

## Problema
Quando uno studente restituisce un libro fisicamente, non esiste
un modo per segnarlo come disponibile nel sistema. Il bibliotecario
deve intervenire direttamente sul database.

## Risultato atteso
Il bibliotecario può chiamare DELETE /api/v1/booklendings/:id
per registrare la restituzione. Il prestito viene rimosso e
il libro torna disponibile per nuovi prestiti.

## Utenti e sistemi coinvolti
Bibliotecario, BooklendingModel, endpoint /api/v1/booklendings.

## Vincoli
Solo il bibliotecario può registrare restituzioni.
L'autenticazione JWT esistente deve essere usata.
Non è necessario conservare la storia del prestito in questa versione.

## Domande aperte
- I bibliotecari hanno un ruolo distinto nel sistema o usano
  le stesse credenziali degli studenti?
```

**spec.md: prompt.**

```
Leggi intent/return-book/intent.md e produci la specifica tecnica
completa come intent/return-book/spec.md.

La specifica deve includere:
- Endpoint coinvolti con metodo, path, auth richiesta
- Modifiche al modello dati
- Criteri di accettazione in formato Given-When-Then
- Aree di concern: segnala esplicitamente qualsiasi vincolo
  in conflitto o punto ambiguo che richiede una decisione
  prima dell'implementazione.
```

**intent/return-book/spec.md: output generato.**

```
# Spec: restituzione libro (US-07)

## Endpoint
DELETE /api/v1/booklendings/:id
- Auth: richiesta (tokenChecker middleware)
- Risposta successo: 204 No Content
- Risposta errore: 404 Not Found se il prestito non esiste

## Modifiche al modello dati
Nessuna modifica a BooklendingModel.
L'operazione rimuove il documento dal database.

## Criteri di accettazione
Given un prestito attivo con id=123
When DELETE /api/v1/booklendings/123 (con token valido)
Then il documento viene rimosso da MongoDB
And la risposta è 204 No Content

Given un prestito inesistente
When DELETE /api/v1/booklendings/999 (con token valido)
Then la risposta è 404 Not Found

Given una richiesta senza token
When DELETE /api/v1/booklendings/123
Then la risposta è 401 Unauthorized

## ⚠ Aree di concern
1. Autorizzazione: il tokenChecker verifica che l'utente sia
   autenticato, ma non verifica che sia un bibliotecario. Chiunque
   abbia un token valido (inclusi gli studenti) può chiamare questo
   endpoint. Decisione richiesta prima dell'implementazione.
2. Storia dei prestiti: eliminare il documento non consente
   di sapere quanti libri uno studente ha avuto in passato.
   L'intent esclude questo scope per ora, ma potrebbe impattare
   future US (es. statistiche, penali per ritardi).
```

Il concern #1 viene portato al docente prima di procedere. La decisione presa (per ora si usa il tokenChecker senza ruoli) viene annotata come domanda aperta risolta nell'intent.md.

**plan.md: prompt (plan mode).**

```
opencode --plan

Leggi intent/return-book/spec.md e produci un piano di
implementazione dettagliato come intent/return-book/plan.md.

Il piano deve indicare:
- File da creare o modificare, in ordine
- Dipendenze tra i passi
- Test da scrivere prima dell'implementazione
```

**intent/return-book/plan.md: output generato.**

```
# Piano: restituzione libro (US-07)

## Ordine di implementazione

1. app/booklendings.js: aggiungere handler DELETE
   - Trovare il documento per id
   - Restituire 404 se non esiste
   - Eliminare il documento
   - Restituire 204
   Dipende da: BooklendingModel (già esistente)

2. app/booklendings.test.js: aggiungere test
   - Test: DELETE su id esistente → 204
   - Test: DELETE su id inesistente → 404
   - Test: DELETE senza token → 401
   Dipende da: (1)

3. oas3.yaml: documentare il nuovo endpoint
   Dipende da: (1)

## Nota
Il tokenChecker è già applicato alle route /booklendings.
Non serve modificare il middleware per questa US.
Il concern sull'autorizzazione per ruolo è fuori scope: registrato
in spec.md, sezione Aree di concern.
```

Lo studente corregge il piano: il test senza token deve essere scritto per primo (TDD), non dopo. Modifica l'ordine e committa.

## Anticipazione: Workshop sull'automazione con agenti

Nelle due lezioni il lavoro passa sempre da te: scrivi o approvi ogni artefatto, lanci ogni comando, leggi ogni diff. Nel workshop il flusso viene orchestrato, e i gate umani restano esplicitamente nei punti in cui servono. Il workshop affronterà:

- **Agenti specialistici** con responsabilità separate (requisiti, design, sviluppo) e un coordinatore che mantiene la tracciabilità senza produrre artefatti di dominio direttamente.
- **Catene di dipendenza**: quando un requisito cambia, quali spec, piani e test vanno rivisti. La catena va documentata prima di configurare il sistema.
- **Git worktree**: più User Story in parallelo, ciascuna nel proprio worktree, senza che le modifiche si mescolino.
- **Pull request e review automatiche**: l'agente apre la PR, un secondo agente confronta il diff con `spec.md` e blocca il merge in caso di violazioni.
- **Gate umani**: nessuna approvazione, nessuna baseline e nessun merge senza un comando esplicito di chi è responsabile.

* **Pipeline CI.** Test e analisi statica su ogni PR, prima della review automatica.

Esempio di riferimento: il progetto D1 del corso di Ingegneria del Software 2026, prodotto da quattro agenti specialistici coordinati da un agente di progetto. Prerequisito consigliato: aver completato la lezione 2.

### Esempi del workshop

**Pipeline CI con review automatica.** EasyLib ha già `.github/workflows/node.js.yml` con `npm test` su ogni push. Il prompt per estenderlo con una review automatica:

```
Leggi .github/workflows/node.js.yml.
Aggiungi uno step che su ogni Pull Request:
1. Chiede a OpenCode una review del diff rispetto a main
2. Passa lo spec.md della feature come contesto
3. Posta il risultato come commento sulla PR

Se OpenCode trova violazioni dei criteri di accettazione
sullo spec.md, lo step deve fallire e bloccare il merge.
```

Step aggiunto allo workflow:

```
- name: OpenCode PR review
  if: github.event_name == 'pull_request'
  env:
    FEATURE: ${{ github.head_ref }}
  run: |
    npx opencode review \
      --diff "$(git diff origin/main...HEAD)" \
      --spec intent/${{ env.FEATURE }}/spec.md \
      --fail-on-violation
```

```
git add .github/workflows/node.js.yml
git commit -m "ci: add OpenCode PR review step"
```

Nella prima PR aperta dopo questa modifica (quella che implementa US-07), OpenCode blocca il merge segnalando che `DELETE /api/v1/booklendings/:id` non applica il middleware `tokenChecker`, violando il criterio Given una richiesta senza token → 401 Unauthorized. Il docente vede il commento automatico sulla PR. Lo studente aggiunge il middleware e rilancia i test.

**D1 IS 2026: sistema multi-agente in produzione.** Il corso di Ingegneria del Software usa un sistema multi-agente per produrre e mantenere il D1, il documento di Requirements Engineering del progetto. Il sistema è composto da quattro agenti specialistici (`requirements-engineer`, `use-case-designer`, `user-story-developer`, `frontend-designer`) coordinati da un `d1-coordinator` specifico del progetto.

La catena di dipendenza è esplicita e documentata:

```
Requirements
     ↓
Use Cases
     ↓
User Stories
     ↓
Acceptance Criteria
     ↓
Mockup
```

Gli agenti non inventano requisiti né risolvono silenziosamente ambiguità di dominio: segnalano GAP e CLAR, ma la decisione resta sempre allo studente o al Requirements Engineer umano. I gate umani sono espliciti: nessuna baseline viene approvata senza il comando `/d1-baseline "approve v1.0"` digitato esplicitamente dall'utente.

Il flusso operativo parte dal materiale degli stakeholder (`input/project-material/`), passa attraverso l'elicitazione (`/d1-requirements`), la generazione (`/d1-generate`), la review iterativa, e culmina nella pubblicazione del PDF finale. Ogni modifica significativa dopo la baseline diventa un elemento `CH-*` tracciato nel change log.

**Struttura di riferimento completa.** Questa è la struttura che emerge alla fine del percorso. Ogni lezione aggiunge uno strato.

```
.
├── AGENTS.md                          # entry point per OpenCode
├── docs/
│   ├── requirements.md                # backlog organizzato per feature
│   ├── architecture.md
│   └── data-model.md
├── intent/
│   ├── catalogo-libri/                # feature
│   │   ├── intent.md                  # intent della feature
│   │   ├── us-01-visualizza/
│   │   │   ├── spec.md
│   │   │   └── plan.md
│   │   └── us-02-filtra/
│   │       ├── spec.md
│   │       └── plan.md
│   ├── autenticazione/
│   │   ├── intent.md
│   │   └── us-03-login/
│   │       ├── spec.md
│   │       └── plan.md
│   └── gestione-prestiti/
│       ├── intent.md
│       ├── us-04-prestito/
│       │   ├── spec.md
│       │   └── plan.md
│       └── us-07-restituzione/
│           ├── spec.md
│           └── plan.md
├── src/
└── .github/
    └── workflows/
        └── ci.yml
```
