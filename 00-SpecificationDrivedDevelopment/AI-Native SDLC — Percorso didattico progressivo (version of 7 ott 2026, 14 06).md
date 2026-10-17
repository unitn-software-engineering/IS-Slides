# AI-Native SDLC — Percorso didattico progressivo

Oct 6, 2026 · @Marco

## Indice

- [Setup iniziale](#setup-iniziale)
- [Livello 1 — Sviluppo esplorativo](#livello-1--sviluppo-esplorativo)
- [Livello 2 — Elicitazione dei requisiti e Issues](#livello-2--elicitazione-dei-requisiti-e-issues)
- [Livello 3 — Specifica e design](#livello-3--specifica-e-design)
- [Livello 4 — Pianificazione dell'implementazione](#livello-4--pianificazione-dellimplementazione)
- [Livello 5 — Collaborazione e review](#livello-5--collaborazione-e-review)
- [Livello 6 — Qualità e integrazione continua](#livello-6--qualit-e-integrazione-continua)
- [Livello 7 — Ingegneria agentiva](#livello-7--ingegneria-agentiva)
- [Struttura del repo di riferimento](#struttura-del-repo-di-riferimento)

## Introduzione

Ogni livello è un'iterazione completa, il livello successivo è una scelta che risolve un problema concreto già vissuto.

Il progetto di riferimento è EasyLib, una piattaforma per la gestione dei prestiti bibliotecari universitari. Ogni livello considera una User Story nuova e introduce un passaggio aggiuntivo.

## Setup iniziale

Prima di iniziare qualsiasi US, il repository deve esistere con una base minima: una descrizione del progetto, i requisiti iniziali, il contesto per OpenCode, e la struttura delle cartelle. Questo si fa una volta sola all'inizio del progetto.

**Feature e User Story.** I requisiti sono organizzati in due livelli: le **feature** raggruppano comportamenti correlati (es. Gestione prestiti), le **User Story** descrivono i comportamenti singoli dal punto di vista dell'utente (es. US-07: restituzione libro). Il backlog in `requirements.md` è organizzato per feature.

**Due momenti dell'analisi.** L'analisi dei requisiti avviene in due momenti distinti: una fase *upfront* nel setup (backlog, feature, priorità → `requirements.md`), e una fase *just-in-time* nel ciclo, quando si prende in mano una US e si approfondiscono i dettagli → `intent.md`.

**Perché farlo.** Chi salta il setup parte con nomi di cartelle casuali, README vuoti, e nessun contesto per l'agente. Il costo del disordine iniziale si paga per tutto il progetto.

**Commit 1 — ****`docs: add README`** Crea `README.md` con un editor di testo. Scrivi: nome del progetto, una o due frasi di descrizione, lo stack tecnologico scelto.

`README.md`:

```markdown
# EasyLib

Piattaforma fullstack per la gestione dei prestiti bibliotecari universitari.
Gli studenti consultano il catalogo, verificano la disponibilità
delle copie e gestiscono i propri prestiti attivi.

## Stack
- **Backend**: Node.js, Express 5, MongoDB (Mongoose), JWT
- **Frontend**: Vue 3, Vite
- **Test**: Jest, Supertest
```

**Commit 2 — ****`docs: add requirements`** Crea `docs/requirements.md`. Identifica e documenta: gli attori del sistema, le entità principali con i loro attributi chiave, e il backlog iniziale in formato tabella (ID, User Story, Priorità Must/Should/Could Have, Stato). Scarta ciò che è fuori scope.

`docs/requirements.md`:

```markdown
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
| US-02 | Come studente, voglio filtrare i libri per titolo o autore | Should Have | Da fare |
| US-03 | Come studente, voglio registrarmi e fare login con credenziali o Google | Must Have | Da fare |
| US-04 | Come studente autenticato, voglio prendere in prestito un libro disponibile | Must Have | Da fare |
| US-05 | Come studente autenticato, voglio vedere i miei prestiti attivi | Must Have | Da fare |
| US-06 | Come studente, non devo poter prendere un libro già in prestito | Must Have | Da fare |
| US-07 | Come bibliotecario, voglio registrare la restituzione di un libro | Should Have | Da fare |
| US-08 | Come studente, voglio vedere la data di scadenza del mio prestito | Could Have | Da fare |

## Domande aperte
- I bibliotecari hanno credenziali separate dagli studenti?
- Esiste un limite al numero di libri che uno studente può tenere in prestito?
- Quanto dura un prestito standard?
```

**Commit 3 — ****`chore: scaffold project structure`** Crea manualmente la struttura di cartelle derivata dai requisiti: una cartella per ogni risorsa identificata, un file placeholder per ogni entità. Aggiungi `.gitignore`, `package.json` con le dipendenze, e `.env.example`.

**Deliverable.** Un repo con `README.md` che descrive il progetto, il backlog iniziale in Markdown, e la struttura di cartelle vuota ma coerente. Tutto committato prima di installare la prima dipendenza.

---

**Con OpenCode**

La procedura manuale ha tre commit. Con OpenCode si aggiunge un quarto: `AGENTS.md` viene generato automaticamente a partire da `README.md` e `docs/requirements.md`, senza che lo studente debba scriverlo a mano.

**Commit 1 — ****`docs: add README`**

Prompt:

```
EasyLib è una piattaforma per la gestione dei prestiti bibliotecari
universitari. Stack scelto: Node.js + Express 5 per il backend,
MongoDB con Mongoose per la persistenza, Vue 3 + Vite per il frontend,
Jest + Supertest per i test.

Genera README.md con nome del progetto, descrizione in due righe e stack.
```

**Commit 2 — ****`docs: add requirements`**

Prompt:

```
Leggi README.md. Comportati come un analista dei requisiti e fai
le domande necessarie per definire:
1. Gli attori del sistema
2. Le entità principali del dominio con i loro attributi chiave
3. Un backlog iniziale in formato tabella:
   ID | User Story | Priorità (Must/Should/Could Have) | Stato

Non inventare requisiti. Se hai dubbi su scope o regole di
business, segnalali come domande aperte.
Genera il documento docs/requirements.md
```

**Commit 3 — ****`docs: add AGENTS.md`**

Prompt:

```
Leggi README.md e docs/requirements.md.
Genera AGENTS.md come file di contesto per le future sessioni OpenCode.
Includi: convenzioni di stack, vincoli espliciti, dove trovare
requisiti e artefatti.
Non inventare dettagli architetturali — il codice non esiste ancora.
```

`AGENTS.md` generato:

```markdown
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

```bash
git add AGENTS.md
git commit -m "docs: add AGENTS.md"
```

**Commit 4 — ****`chore: scaffold project structure`**

Prompt:

```
Leggi README.md e docs/requirements.md.
Crea la struttura di cartelle e i file di configurazione base:
- .gitignore appropriato per Node.js
- package.json con le dipendenze del backend (express, mongoose,
  jsonwebtoken, dotenv) e di sviluppo (jest, supertest)
- index.js come entry point con un commento TODO
- app/ con un file placeholder per ogni risorsa (books, students,
  booklendings, authentications)
- app/models/ con un file placeholder per ogni entità
- test/ vuota
- .env.example con le variabili necessarie
```

Struttura creata:

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

```bash
git add .
git commit -m "chore: scaffold project structure"
```

## Livello 1 — Sviluppo esplorativo

&#91;embedded content: Livello 1 — processo completo\]

Scrivi codice direttamente dal requisito, senza documenti intermedi. Funziona bene per feature semplici e sessioni brevi, finché il progetto è piccolo e lo sviluppatore è l'unico che deve capirlo. Dopo poche sessioni il "perché" delle scelte si perde.

**Commit — ****`feat: GET /api/v1/books`**

US-01: *come studente, voglio consultare il catalogo dei libri con titolo, autore e ISBN.*

File creati:

- `app/models/book.js` — schema Mongoose: title, author, isbn, genre, year, available
- `app/books.js` — route `GET /api/v1/books`, risponde con array e campo `self`
- `app/books.test.js` — test: `GET /api/v1/books` → 200 con array

File modificati:

- `index.js` — registrazione della route

```bash
git add app/models/book.js app/books.js app/books.test.js index.js
git commit -m "feat: GET /api/v1/books"
```

**Con OpenCode**

Prompt per US-04 (nessun documento preparato, si apre OpenCode direttamente):

```
Implementa l'endpoint per il prestito di un libro.
Un utente autenticato può prendere in prestito un libro
se è disponibile. Se il libro è già in prestito, restituisci
un errore appropriato.
Usa Express e Mongoose. Il modello Student esiste già.
```

Il codice funziona e i test passano. Il giorno dopo, per aggiungere US-06 (controllo libro già in prestito), OpenCode non ricorda nulla della sessione precedente e deve rileggere il codice per ricostruire il contesto prima di poter andare avanti.

## Livello 2 — Elicitazione dei requisiti e Issues

&#91;embedded content: Livello 2 — processo completo\]

Quando si prende in mano una US, non si implementa subito. Si approfondisce prima: si chiariscono i dettagli, si risolvono le domande aperte, si definiscono i vincoli precisi. Questo approfondimento just-in-time — distinto dall'analisi upfront di `requirements.md` — produce `intent.md`. È il contratto tra chi conosce il dominio e chi implementa, scritto nel momento in cui serve, non mesi prima.

**Esercizio.** Per la US da implementare (es. US-07: restituzione libro):

1. Crea la cartella `intent/<feature-name>/`
2. Copia il template qui sotto e compila ogni sezione a mano
3. Apri una Issue su GitHub: scrivi titolo e description che rispecchino il problema e il risultato atteso dell'intent
4. Aggiungi in cima all'`intent.md` il numero della Issue (`Issue: #N`)
5. Commita prima di aprire qualsiasi editor di codice

**Template ****`intent.md`**

```markdown
# Intent: <titolo breve>
Autore: <nome>. Stato: bozza.

## Problema
<Cosa non funziona oggi? Chi è impattato?>

## Risultato atteso
<Come sarà diverso dopo?>

## Utenti e sistemi coinvolti
<Chi usa questa feature? Quali sistemi tocca?>

## Vincoli
<Cosa NON deve cambiare o NON è in scope?>

## Domande aperte
<Cosa non è ancora deciso?>
```

**Deliverable.** `intent/login/intent.md` committato nel repo prima di aprire OpenCode.

**Con OpenCode.**

*Generare **`intent.md`*: invece di compilare il template a mano, descrivi la US a voce con OpenCode. Lui fa le domande, tu rispondi, il documento emerge dal dialogo. Vedi la sezione Con OpenCode sotto per i prompt esatti.

*Generare il testo della Issue*: chiedi a OpenCode di produrre titolo e description della Issue a partire da `intent.md`. Tu incolla su GitHub, apri la Issue, e annota il numero nell'intent.

**Con OpenCode**

*Generare **`intent.md`*

Prompt:

```
Voglio implementare la restituzione di un libro. Oggi non esiste
un modo per segnare un libro come restituito — il bibliotecario
deve farlo manualmente nel database.

Aiutami a definire questa feature. Fai le domande necessarie
per chiarire scope, vincoli e comportamento atteso, poi genera
intent/return-book/intent.md usando il template standard.
```

OpenCode fa due domande: chi può registrare la restituzione? Va conservata la storia del prestito? Lo studente risponde e il file viene generato.

*Generare il testo della Issue*

Prompt:

```
Leggi intent/return-book/intent.md.
Genera il testo per una GitHub Issue:
- Titolo breve (max 60 caratteri)
- Description in Markdown con: problema, risultato atteso, criteri di accettazione
- Label suggerita
```

Output generato, incollato su GitHub come Issue #7. Poi:

```bash
# Aggiungi in cima a intent.md: Issue: #7
git add intent/return-book/intent.md
git commit -m "docs(intent): link issue #7 to return-book intent"
```

US-07 è in backlog: *Come bibliotecario, voglio registrare la restituzione di un libro*.

Prompt (prima di aprire OpenCode):

```
Voglio implementare la restituzione di un libro. Oggi non esiste
un modo per segnare un libro come restituito — il bibliotecario
deve farlo manualmente nel database.

Aiutami a definire questa feature. Fai le domande necessarie
per chiarire scope, vincoli e comportamento atteso, poi genera
intent/return-book/intent.md usando il template standard.
```

OpenCode fa due domande: (1) chi può registrare la restituzione — solo il bibliotecario o anche lo studente? (2) serve conservare la storia del prestito o basta eliminare il documento?

Lo studente risponde: solo il bibliotecario, e per ora basta eliminare il documento.

`intent/return-book/intent.md` generato:

```markdown
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

```bash
git add intent/return-book/intent.md
git commit -m "docs(intent): add return-book intent"
```

## Livello 3 — Specifica e design

&#91;embedded content: Livello 3 — processo completo\]

Dal documento dei requisiti si derivano le specifiche tecniche: API coinvolte, modello dei dati, e criteri di accettazione in formato Given-When-Then. Il codice generato è verificabile rispetto a una specifica scritta prima che esista. Senza piano esplicito, possono comunque emergere dipendenze non anticipate a metà implementazione.

**Esercizio.** Con `intent.md` approvato, crea `spec.md` a mano:

1. Elenca gli endpoint coinvolti: metodo HTTP, path, autenticazione richiesta, codici di risposta
2. Descrivi le modifiche al modello dati (se presenti)
3. Scrivi i criteri di accettazione in formato Given-When-Then per ogni scenario (successo, not found, non autorizzato)
4. Aggiungi una sezione **Aree di concern**: qualsiasi vincolo in conflitto o ambiguità che richiede una decisione prima di scrivere codice
5. Commita prima di iniziare l'implementazione

**Deliverable.** `intent/login/spec.md` committato accanto a `intent.md`.

**API design.** La specifica degli endpoint in `spec.md` viene tradotta in una definizione formale OpenAPI (OAS 3). Il file `oas3.yaml` diventa il contratto dell'API: verificabile automaticamente, leggibile da strumenti di test, e aggiornato a ogni US. EasyLib ha già un `oas3.yaml` — lo studente lo estende a ogni nuovo endpoint.

**Con OpenCode**

Prompt:

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

`intent/return-book/spec.md` generato:

```markdown
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
1. **Autorizzazione**: il tokenChecker verifica che l'utente sia
   autenticato, ma non verifica che sia un bibliotecario. Chiunque
   abbia un token valido (inclusi gli studenti) può chiamare questo
   endpoint. Decisione richiesta prima dell'implementazione.
2. **Storia dei prestiti**: eliminare il documento non consente
   di sapere quanti libri uno studente ha avuto in passato.
   L'intent esclude questo scope per ora, ma potrebbe impattare
   future US (es. statistiche, penali per ritardi).
```

```bash
git add intent/return-book/spec.md
git commit -m "docs(spec): add return-book spec"
```

Il concern #1 viene portato al docente prima di procedere. La decisione presa (per ora si usa il tokenChecker senza ruoli) viene annotata come domanda aperta risolta nell't.md.

## Livello 4 — Pianificazione dell'implementazione

&#91;embedded content: Livello 4 — processo completo\]

Prima di scrivere codice, OpenCode produce un piano esplicito: file da creare o modificare, ordine delle operazioni, dipendenze tra le parti. Si rivede e corregge il piano prima di eseguirlo. Funziona, ma manca ancora una strategia per quando più persone lavorano insieme.

**Esercizio.** Con `spec.md` approvato, crea `plan.md` a mano prima di scrivere codice:

1. Elenca i file da creare o modificare
2. Per ogni file, descrivi cosa cambia e perché
3. Ordina i passi in base alle dipendenze: cosa deve esistere prima che altro possa funzionare?
4. Identifica i test da scrivere e in quale ordine
5. Commita `plan.md` — se il piano cambia durante l'implementazione, aggiorna il file e committa di nuovo

**Deliverable.** `intent/profile/plan.md` committato prima dell'implementazione, con almeno una correzione manuale documentata nei commit.

**Con OpenCode**

Prompt (avviando OpenCode in plan mode):

```
opencode --plan

Leggi intent/return-book/spec.md e produci un piano di
implementazione dettagliato come intent/return-book/plan.md.

Il piano deve indicare:
- File da creare o modificare, in ordine
- Dipendenze tra i passi
- Test da scrivere prima dell'implementazione
```

`intent/return-book/plan.md` generato:

```markdown
# Piano: restituzione libro (US-07)

## Ordine di implementazione

1. **`app/booklendings.js`** — aggiungere handler DELETE
   - Trovare il documento per id
   - Restituire 404 se non esiste
   - Eliminare il documento
   - Restituire 204
   Dipende da: BooklendingModel (già esistente)

2. **`app/booklendings.test.js`** — aggiungere test
   - Test: DELETE su id esistente → 204
   - Test: DELETE su id inesistente → 404
   - Test: DELETE senza token → 401
   Dipende da: (1)

3. **`oas3.yaml`** — documentare il nuovo endpoint
   Dipende da: (1)

## Nota
Il tokenChecker è già applicato alle route /booklendings.
Non serve modificare il middleware per questa US.
Il concern sull'autorizzazione per ruolo è fuori scope: registrato
in spec.md §Aree di concern.
```

Lo studente corregge il piano: il test senza token deve essere scritto per primo (TDD), non dopo. Modifica l'ordine e committa.

```bash
git add intent/return-book/plan.md
git commit -m "docs(plan): add return-book plan"
```

## Livello 5 — Collaborazione e review

&#91;embedded content: Livello 5 — processo completo\]

Quando più persone lavorano sullo stesso progetto, il codice non si integra da solo. Ogni US vive su una branch dedicata e rientra in main attraverso una Pull Request, dove un altro membro del team — o il docente — fa review prima del merge.

**Esercizio.** Per ogni US, seguire questo flusso:

1. Aprire una **Issue** nel repository con titolo e descrizione della US.
2. Creare una **branch** con nome `feature/<us-name>` a partire da main.
3. Implementare seguendo `intent.md`, `spec.md` e `plan.md`.
4. Aprire una **PR** verso main con description che referenzia la Issue (`Closes #N`).
5. Fare **review** della PR di un compagno: leggere il diff, verificare che rispetti lo `spec.md`, lasciare almeno un commento costruttivo.
6. Correggere i commenti ricevuti e fare merge solo dopo l'approvazione.

**Deliverable.** Una PR mergiata per ogni US, con almeno un commento di review, la Issue chiusa e il link tra i due visibile nella history di GitHub.

**Con OpenCode**

US-07 (restituzione libro) è implementata su `feature/return-book`. Prima di aprire la PR, lo studente chiede a OpenCode di generare la description:

```
Leggi intent/return-book/intent.md e spec.md.
Genera la description per la PR di questa US in formato Markdown.
Includi: cosa fa, come testarlo, e i criteri di accettazione.
Aggiungi in fondo: Closes #7
```

Description generata e incollata nella PR. Il compagno assegnato alla review legge il diff e commenta:

> `app/booklendings.js`: il middleware `tokenChecker` non è applicato a questa route. Lo spec dice che senza token la risposta deve essere 401.

Lo studente corregge, aggiorna la PR, riceve l'approvazione e fa merge. La Issue #7 si chiude automaticamente.

## Livello 6 — Qualità e integrazione continua

&#91;embedded content: Livello 6 — processo completo\]

Ogni commit attiva una pipeline automatica: test, analisi statica, e review del codice generato. I problemi vengono trovati prima della review umana — e prima che arrivino al docente.

✅ Funziona da solo; ma coordinare manualmente ogni artefatto (intent → spec → plan → code) diventa il collo di bottiglia.

**Esercizio.** Configura una pipeline CI su GitHub Actions che si attiva su ogni PR:

1. Crea `.github/workflows/ci.yml`
2. Aggiungi uno step per installare le dipendenze (`npm ci`)
3. Aggiungi uno step per eseguire i test (`npm test`)
4. Aggiungi uno step per la review del codice: il reviewer legge il diff e lascia commenti sulla PR verificando che rispetti lo `spec.md` della feature
5. Configura la PR in modo che il merge sia bloccato finché la CI non è verde e almeno un reviewer ha approvato

**Con OpenCode.** Aggiungi alla pipeline uno step di review automatica: OpenCode legge il diff della PR, lo confronta con lo `spec.md` della feature, e posta i risultati come commento. Se trova violazioni dei criteri di accettazione, lo step fallisce e blocca il merge.

**Deliverable.** Una PR bloccata automaticamente per un problema reale, con il commento di OpenCode che spiega perché.

**Con OpenCode**

EasyLib ha già `.github/workflows/node.js.yml` con `npm test` su ogni push. Lo studente lo estende con uno step di review.

Prompt:

```
Leggi .github/workflows/node.js.yml.
Aggiungi uno step che su ogni Pull Request:
1. Chiede a OpenCode una review del diff rispetto a main
2. Passa lo spec.md della feature come contesto
3. Posta il risultato come commento sulla PR

Se OpenCode trova violazioni dei criteri di accettazione
sullo spec.md, lo step deve fallire e bloccare il merge.
```

`.github/workflows/node.js.yml` aggiornato (step aggiunto):

```yaml
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

```bash
git add .github/workflows/node.js.yml
git commit -m "ci: add OpenCode PR review step"
```

Nella prima PR aperta dopo questa modifica — quella che implementa US-07 — OpenCode blocca il merge segnalando che `DELETE /api/v1/booklendings/:id` non applica il middleware `tokenChecker`, violando il criterio di accettazione *Given una richiesta senza token → 401 Unauthorized*. Il docente vede il commento automatico sulla PR. Lo studente aggiunge il middleware e rilancia i test.

## Livello 7 — Ingegneria agentiva

&#91;embedded content: Livello 7 — processo completo\]

Nei livelli precedenti OpenCode era uno strumento: lo studente chiedeva, riceveva, decideva. In questo livello si progetta un sistema di agenti specialistici con responsabilità separate, flussi di coordinamento, e governance esplicita. Il processo viene configurato una volta e poi orchestrato.

È il passaggio da usare AI a orchestrare AI.

✅ **Funziona da solo.** Una volta configurato, il sistema produce bozze degli artefatti, individua ambiguità e inconsistenze, e propaga le modifiche lungo la catena di dipendenze senza che lo studente debba coordinare manualmente ogni passaggio.

**Problema vissuto.** Con la crescita del progetto, il coordinamento manuale tra artefatti diventa il collo di bottiglia. Aggiornare un requisito significa ricordarsi di aggiornare lo Use Case, le User Story, gli Acceptance Criteria, e i mockup collegati. È un lavoro ripetitivo, error-prone, e difficile da tracciare. Lo studente ha già sperimentato questo nei livelli precedenti ogni volta che uno `spec.md` cambiava dopo l'inizio dell'implementazione.

**Esercizio.** Progettare un sistema multi-agente per un dominio applicativo del corso. Prima di scrivere qualsiasi agente, definire per iscritto:

1. *Quali sono gli agenti specialistici?* — Ogni agente ha un dominio preciso e responsabilità non sovrapposte.
2. *Chi coordina?* — Un agente coordinatore gestisce il flusso e mantiene la tracciabilità; non produce artefatti di dominio direttamente.
3. *Quali sono le catene di dipendenza?* — Quando un artefatto cambia, quali altri devono essere rivisti? Questa catena va documentata prima che il sistema venga configurato.
4. *Dove sono i gate umani?* — Il sistema non approva nulla autonomamente. Definire esplicitamente i punti in cui l'approvazione umana è obbligatoria prima di procedere.

**Deliverable.** Un repository con agenti configurati, una catena di dipendenza documentata, e una sessione di lavoro registrata che mostra il sistema in funzione su un caso reale.

---

**Con OpenCode — Progetto D1 IS 2026.** Il corso di Ingegneria del Software utilizza un sistema multi-agente per produrre e mantenere il D1 — il documento di Requirements Engineering del progetto. Il sistema è composto da quattro agenti specialistici (`requirements-engineer`, `use-case-designer`, `user-story-developer`, `frontend-designer`) coordinati da un `d1-coordinator` specifico del progetto.

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

Gli agenti non inventano requisiti né risolvono silenziosamente ambiguità di dominio — segnalano GAP e CLAR, ma la decisione resta sempre allo studente o al Requirements Engineer umano. I gate umani sono espliciti: nessuna baseline viene approvata senza il comando `/d1-baseline "approve v1.0"` digitato esplicitamente dall'utente.

Il flusso operativo parte dal materiale degli stakeholder (`input/project-material/`), passa attraverso l'elicitazione (`/d1-requirements`), la generazione (`/d1-generate`), la review iterativa, e culmina nella pubblicazione del PDF finale. Ogni modifica significativa dopo la baseline diventa un elemento `CH-*` tracciato nel change log.

Quello che nei livelli precedenti lo studente faceva manualmente — scrivere `intent.md`, generare `spec.md`, aggiornare `docs/` — qui diventa un processo orchestrato, versionato e governato.

## Struttura del repo di riferimento

Questa è la struttura che emerge naturalmente alla fine del percorso. Ogni livello aggiunge uno strato — lo studente non la vede tutta subito, la costruisce pezzo per pezzo.

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
