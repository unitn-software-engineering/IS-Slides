---
theme: default
_class: lead
style: |
  section.small {
    font-size: 22px;
  }
  section.small pre, section.small pre > code {
    font-size: 17px !important;
    line-height: 1.3 !important;
  }
  section.code {
    font-size: 22px;
  }
  section.code pre, section.code pre > code {
    font-size: 15px !important;
    line-height: 1.25 !important;
  }
  section.section {
    justify-content: center;
    text-align: center;
  }
paginate: true
backgroundColor: #fff
marp: true
backgroundImage: url('https://marp.app/assets/hero-background.svg')
header: 'AI-Native SDLC - Specification Driven Development'
footer: 'Software Engineering - 2026/2027, Trento - Marco Robol'
---

# **AI-Native SDLC**

Dai requisiti all'implementazione, con e senza agenti

Software Engineering - Lab

#### Marco Robol - marco.robol@unitn.it

---

# 🗺️ Contenuti

- **Da dove partiamo** – RF, Use Case e User Story di EasyLib (lezioni 6–8)
- **Lezione 1** – Dalla User Story al codice (tutto a mano)
- **Lezione 2** – Ciclo strutturato con OpenCode (tu validi, l'agente scrive)
- **Anticipazione** – Workshop sull'automazione con agenti

### Progetto di riferimento: **EasyLib**

Lo stesso EasyLib delle lezioni su Use Case e User Story.
Lavoriamo su **US-03 – Registrare una restituzione**, due volte:

- Lezione 1 → a mano
- Lezione 2 → con OpenCode: stessa User Story, processo diverso

---

<!-- _class: small -->

# 🧭 Da test-driven ad AI-native

| Approccio | Idea chiave | Fonte di verità | Artefatto tipico |
|---|---|---|---|
| 🧱 **Code-first** | Si scrive il codice, poi (forse) i test | Il codice | – |
| 🔴 **Test-Driven (TDD)** | Prima il test che fallisce, poi il codice minimo: *red → green → refactor* | I test | Unit Test |
| 💬 **Behavior-Driven (BDD)** | Gli scenari descrivono il comportamento atteso, in linguaggio condiviso con il cliente | Gli scenari | *Given-When-Then* (Sintassi Gherkin) |
| 📐 **Spec-Driven (SDD)** | Si scrive e si approva la specifica prima del codice; il codice si deriva dalla spec | La specifica | `spec.md`, OpenAPI (*contract-first*) |
| 🤖 **AI-Native** | Agenti generano spec, piani e codice; l'umano decide ai **gate** | Spec + gate umani | `AGENTS.md`, `intent/`, review automatiche |

Non si sostituiscono: **si sommano**. Ogni approccio aggiunge un livello sopra il precedente.

---

<!-- _class: small -->

# 📍 Dove li ritroviamo nel percorso

| Approccio | Nel percorso |
|---|---|
| **TDD** | Lezione 1, passo 7: i test di accettazione si scrivono **prima** e devono fallire |
| **BDD** | Lezione 1, passo 7: ogni AC diventa uno scenario **Given-When-Then** |
| **Spec-Driven** | Lezione 2: `intent.md` → `spec.md` → `oas3.yaml` → `plan.md`, approvati prima del codice |
| **AI-Native** | Lezione 2 e Workshop: OpenCode produce gli artefatti, tu validi; agenti specialistici, CI e review automatiche |

Perché la specifica torna centrale con gli agenti?
- un agente **non ricorda** le sessioni precedenti: il contesto deve stare nei file
- un agente **esegue** ciò che legge: una spec ambigua produce codice sbagliato, velocemente

---

# 👀 Il percorso in un colpo d'occhio

Gli **stessi passi** in tutte e tre le fasi: cambia chi li esegue.

| | Chi scrive gli artefatti | Ruolo di OpenCode | Gate |
|---|---|---|---|
| ✍️ **Lezione1** | Il team; nel repo solo test e codice | Solo generatore di codice, prompt unico | Review della PR |
| 🤖 **Lezione2** | OpenCode, in dialogo | Produce intent, spec, plan | Tu approvi ogni artefatto |
| 🚀 **Workshop** | Agenti specialistici | Orchestrazione completa | Gate umani espliciti |

**Gate**: punto di controllo tra due passi; si prosegue solo dopo un'approvazione esplicita o un controllo superato.

---

# 🔄 Il ciclo

```
 D1                 RF ──► Use Case ──► User Story ──► Backlog
                    ┌─────────────────────────────────────┘
                    ▼
 Sprint             Refinement ──► Criteri (AC) ──► Task e stima
                    ┌─────────────────────────────────────┘
                    ▼
                    Test (rossi) ──► Implementazione ──► Verifica
                    ┌─────────────────────────────────────┘
                    ▼
                    Review ──► Merge ──► Retrospective
```

- Ogni freccia è una **decisione** presa in un ordine preciso
- Gli **identificatori** (RFxx, UCxx, USxx, ACxx) mantengono il collegamento tra i vari passi

---

<!-- _class: section -->

# 📚 Da dove partiamo

## Dal D1 di EasyLib alla User Story

Requisiti, Use Case e User Story
(da lezioni precedenti 6, 7 e 8)

---

<!-- _class: small -->

# 📋 RF4 – Gestione dei prestiti

> Il sistema deve consentire agli operatori della biblioteca di gestire i prestiti dei libri agli utenti registrati. Per ciascun prestito devono essere registrate le informazioni relative all'utente, al libro, alla data di inizio e alla data prevista per la restituzione. La registrazione di un prestito deve modificare la disponibilità del libro. Il sistema deve inoltre consentire la registrazione della restituzione, aggiornando la disponibilità del libro e **mantenendo lo storico dei prestiti conclusi**.

Gli altri requisiti funzionali di EasyLib:
**RF1** Accesso al sistema · **RF2** Registrazione e profilo utente · **RF3** Consultazione del catalogo · **RF5** Consultazione dei prestiti · **RF6** Proroghe dei prestiti · **RF7** Consultazione delle biblioteche

---

<!-- _class: small -->

# 🎭 Dagli Use Case alle User Story

**UC-04 Registrare un prestito** e **UC-05 Registrare una restituzione** – attore principale: *Operatore biblioteca*

```
UC-05 Registrare una restituzione ──«include»──► Verificare dati prestito
                  ▲
                  └──«extend»── Gestire penalità  [restituzione in ritardo e penale applicabile]
```

| ID | User Story | UC | RF | SP |
|---|---|---|---|---|
| US-01 | Identificazione e verifica del prestito | UC-04 | RF4 | 3 |
| US-02 | Registrazione del prestito | UC-04 | RF4 | 5 |
| US-03 | **Registrazione della restituzione** | UC-05 | RF4 | 3 |

US-01 e US-02 sono quelle della lezione sulle User Story (8 SP = uno sprint). **US-03** prosegue la stessa epic nello sprint successivo.

---

<!-- _class: code -->

# 🌳 EasyLib: da RF a Use Case a User Story

```
EasyLib/
├── RF1-accesso-al-sistema/
├── RF2-registrazione-profilo/
│   └── UC-03-registrare-utente/
├── RF3-consultazione-catalogo/
│   └── UC-xx-ricercare-libri/
├── RF4-gestione-prestiti/                    ← epic delle Lezioni 1 e 2
│   ├── UC-04-registrare-prestito/
│   │   ├── US-01-identificazione-verifica    3 SP
│   │   └── US-02-registrazione-prestito      5 SP
│   └── UC-05-registrare-restituzione/
│       └── US-03-registrazione-restituzione  3 SP
├── RF5-consultazione-prestiti/
├── RF6-proroghe/                             ← esercizio completo
│   ├── UC-09-richiedere-proroga/
│   │   ├── US-04-richiedere-proroga          3 SP
│   │   └── US-05-consultare-esito            2 SP
│   └── UC-06-gestire-proroga/
│       └── US-06-valutare-richiesta          5 SP
└── RF7-consultazione-biblioteche/
```

Ogni RF è un'**epic**. I legami reali sono molti-a-molti: si tengono con gli **ID**.

---

<!-- _class: code -->

# 📖 US-03 – Registrare una restituzione

**Come** operatore della biblioteca,
**voglio** registrare la restituzione di un libro,
**in modo da** rendere il libro di nuovo disponibile e conservare lo storico del prestito.

| Campo | Valore |
|---|---|
| Epic | Gestione prestiti |
| Riferimenti | RF4, UC-05 |
| Stima | 3 SP |
| Criteri di accettazione | da definire nel **refinement** (Lezione 1, passo 5) |

> Da qui in poi le lezioni di laboratorio: dalla User Story al codice.

---

<!-- _class: section -->

# ✍️ Lezione 1

## Dalla User Story al codice

Tutti i passi a mano: decisioni nel team, test e codice nel repo

---

# 🎯 Lezione 1 – Obiettivo

Percorrere **una volta** l'intero ciclo, dalla User Story al codice, toccando con mano ogni decisione e l'ordine in cui va presa.

- **Nessun passo viene delegato**
- OpenCode è ammesso **solo come generatore di codice**:
prompt diretto, senza generazione di artefatti/documenti intermedi di contesto

---

# 🧪 Passo zero: *"sviluppo esplorativo"*

Su un repository di prova, **senza alcun documento**:

1. Un solo prompt a OpenCode: *implementa `GET /api/v1/books`*
2. Funziona, i test passano ✅
3. Il giorno dopo: *aggiungi la restituzione dei libri*
4. OpenCode **non ricorda nulla** della sessione precedente: deve rileggere il codice per ricostruire il contesto ❌

> Questo è il problema che il resto del percorso risolve.

---

<!-- _class: small -->

# 📦 Passo zero: cosa produce il prompt unico

Il prompt per `GET /api/v1/books` produce:

- `app/models/book.js` – schema Mongoose: `title`, `author`, `isbn`, `genre`, `year`, `available`
- `app/books.js` – route che risponde con un array e campo `self`
- `app/books.test.js` – test: 200 con array
- registrazione della route in `index.js`

```
git commit -m "feat: GET /api/v1/books"
```

Codice corretto, ma **nessuna traccia** del perché: nessun RF, nessuna User Story, nessun criterio.
Ora si riparte, con metodo, su EasyLib.

---

<!-- _class: small -->

# 🛠️ Setup del progetto

| # | Artefatto | Contenuto | Commit |
|---|---|---|---|
| 1 | `README.md` | Nome, 1-2 frasi di descrizione, stack | `docs: add README` |
| 2 | `docs/requirements.md` | Estratto dal D1: attori, RF, RNF, UC, backlog per epic | `docs: add requirements` |
| 3 | Scaffold | Cartelle, placeholder, `.gitignore`, `package.json`, `.env.example` | `chore: scaffold project structure` |

> Commit dello scaffold **prima** di installare la prima dipendenza.

---

<!-- _class: small -->

### 📝 1. README.md

```markdown
# EasyLib

Piattaforma fullstack per la gestione dei prestiti bibliotecari universitari.
Gli utenti consultano il catalogo e i propri prestiti; gli operatori
della biblioteca registrano prestiti e restituzioni.

## Stack
- **Backend**: Node.js, Express 5, MongoDB (Mongoose), JWT
- **Frontend**: Vue 3, Vite
- **Test**: Jest, Supertest
```

Scritto **a mano**: è la prima decisione di progetto (cosa e con quale stack).

---

<!-- _class: code -->

### 📋 2. docs/requirements.md – attori, requisiti, Use Case

```markdown
# Requisiti — EasyLib  (estratto dal D1)

## Attori
- Utente biblioteca (studente registrato): consulta il catalogo e i propri prestiti
- Operatore biblioteca (personale): registra prestiti e restituzioni

## Requisiti funzionali
- RF1 Accesso al sistema
- RF3 Consultazione del catalogo bibliografico
- RF4 Gestione dei prestiti: registrazione di prestiti e restituzioni,
      aggiornando la disponibilità e mantenendo lo storico dei prestiti conclusi

## Requisiti non funzionali
- RNF1 Sicurezza: le API sono accessibili solo con token JWT valido;
       le operazioni sui prestiti sono riservate agli operatori.

## Use Case
| ID    | Use Case                       | Attore principale    | RF  |
|-------|--------------------------------|----------------------|-----|
| UC-04 | Registrare un prestito         | Operatore biblioteca | RF4 |
| UC-05 | Registrare una restituzione    | Operatore biblioteca | RF4 |
```

Il **sistema non è un attore**; niente classi o tecnologie: arrivano dopo.

---

<!-- _class: code -->

### 🗃️ 2. docs/requirements.md – backlog

```markdown
## Product Backlog — Epic: Gestione prestiti (RF4)
| Priorità | ID    | User Story                                               | UC    | SP | Stato   |
|----------|-------|----------------------------------------------------------|-------|----|---------|
| 1        | US-01 | Come operatore della biblioteca, voglio identificare     | UC-04 | 3  | Fatto   |
|          |       | l'utente e il libro e verificarne le condizioni di       |       |    |         |
|          |       | prestito, in modo da procedere alla registrazione        |       |    |         |
| 2        | US-02 | Come operatore della biblioteca, voglio registrare il    | UC-04 | 5  | Fatto   |
|          |       | prestito di un libro a un utente, in modo da conservare  |       |    |         |
|          |       | le informazioni e aggiornare la disponibilità            |       |    |         |
| 3        | US-03 | Come operatore della biblioteca, voglio registrare la    | UC-05 | 3  | Da fare |
|          |       | restituzione di un libro, in modo da rendere il libro    |       |    |         |
|          |       | di nuovo disponibile e conservare lo storico del prestito|       |    |         |

## Domande aperte
- Gli operatori hanno credenziali e ruolo distinti dagli utenti?
- Esiste un limite al numero di prestiti attivi per utente?
- Le penalità per restituzione in ritardo (UC-05 «extend») sono in scope?
```

Priorità **ordinata per valore** (Product Owner); i criteri si definiscono **just-in-time**, nel refinement.

---

<!-- _class: small -->

### 🏗️ 3. Scaffold

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
│   ├── users.js           # TODO
│   ├── booklendings.js    # TODO
│   └── models/
│       ├── book.js        # TODO
│       ├── user.js        # TODO
│       └── booklending.js # TODO
└── test/
```

Le cartelle e i file **derivano da RF e UC**: un placeholder per ogni concetto che compare (utente, libro, prestito).

---

<!-- _class: small -->

# 🔁 Ciclo per US-03

> *Come operatore della biblioteca, voglio registrare la restituzione di un libro, in modo da rendere il libro di nuovo disponibile e conservare lo storico del prestito*

| # | Passo | Dove | Commit |
|---|---|---|---|
| 4 | Refinement della US | Nel team, con il Product Owner | – |
| 5 | Criteri di accettazione | Nel team: AC-US03-xx | – |
| 6 | Task e stima | Nel team: task in ore, conferma degli SP | – |
| 7 | Test per primi | Repo: un test per AC, **devono fallire** | `test: US-03 acceptance tests` |
| 8 | Implementazione | Repo, task per task | per task / gruppo logico |
| 9 | Verifica | Repo: ogni AC ↔ un test verde | correzioni |
| 10 | Retrospective | Nel team | – |

Le **decisioni** restano nel team; nel repo entrano solo **test e codice**.

---

<!-- _class: small -->

### 🔍 4. Refinement della US

Il team, con il **Product Owner**, chiarisce la US prima di implementarla:

- **Domande aperte**: chi può registrare la restituzione? Le penalità (UC-05 «extend») sono in scope?
- **INVEST**: la US è abbastanza *Small*? Va scomposta?
- **Valore**: perché serve? → la parte *in modo da* della US

**Dove?** Chat, lavagna, un foglio condiviso: il mezzo è libero. Il ciclo si gestisce **all'interno del team**.

> Una US non è pronta per lo sprint finché le sue ambiguità non sono state risolte.

---

<!-- _class: small -->

### ✅ 5. Criteri di accettazione

Dichiarativi, a livello **utente**, con un identificatore ciascuno:

| ID | Criterio |
|---|---|
| AC-US03-01 | L'operatore può registrare la restituzione di un prestito attivo. |
| AC-US03-02 | Dopo la restituzione il prestito risulta concluso e resta nello storico. |
| AC-US03-03 | Dopo la restituzione il libro torna disponibile. |
| AC-US03-04 | Se il prestito non esiste o è già concluso, il sistema segnala l'errore. |
| AC-US03-05 | Solo un operatore autenticato può registrare una restituzione. |

Le **penalità** per ritardo (UC-05 «extend») sono fuori scope: diventeranno una nuova US.

> Un criterio **non è un test**: dice *cosa* deve essere vero, il test dice *come* verificarlo.

---

<!-- _class: small -->

### ⏱️ 6. Task e stima

Il team scompone la US in task, stimati in **ore**:
- aggiornare il modello del prestito (stato, data di restituzione)
- nuova route di restituzione, con autenticazione
- test di accettazione, uno per AC

e conferma la stima della US (**3 SP**) rispetto alla capacità dello sprint.

### 🧪 7.Test

Un test per ogni AC, **prima del codice**. È il primo passo che entra nel repo.
- I test **devono fallire** (rosso): il comportamento non esiste ancora
- Il nome del test cita l'AC: `AC-US03-03 il libro torna disponibile`

---

<!-- _class: small -->

### 🧪 7. Dal criterio al test (Given-When-Then)

Il test traduce l'AC in uno scenario **eseguibile**, a livello HTTP:

```gherkin
# AC-US03-01, AC-US03-02, AC-US03-03
Given un prestito attivo con id=123
When  PATCH /api/v1/booklendings/123 { "status": "returned" } (token valido)
Then  la risposta è 200 e il prestito ha status "returned"
And   il libro del prestito risulta disponibile

# AC-US03-04
Given un prestito già restituito con id=124
When  PATCH /api/v1/booklendings/124 { "status": "returned" } (token valido)
Then  la risposta è 409 Conflict

# AC-US03-05
Given una richiesta senza token
When  PATCH /api/v1/booklendings/123
Then  la risposta è 401 Unauthorized
```

Il prestito **non viene eliminato**: RF4 chiede di mantenere lo storico.

---

### 💻 8. Implementazione

Un task alla volta. Se usi OpenCode, **un solo prompt**:

> *Implementa la restituzione di un libro facendo passare i test esistenti*

poi **leggi ogni file generato** e correggi ciò che non torna.

### 🔎 9. Verifica
Esegui i test; per ogni AC controlla che ci sia almeno un test verde.

### 🔙 10. Retrospective del team

| Cose fatte bene | Cose da migliorare | Miglioramenti |
|---|---|---|
| … | … | … |

---

<!-- _class: small -->

# 🤝 Collaborazione su GitHub

Solo GitHub e review tra compagni, **nessuna automazione**.
La **Issue** diventa il primo posto **condiviso e collegato al codice** dove scrivere ciò che il team ha deciso.

```
Issue #3 ──► feature/us-03 ──► Pull Request ──► Review ──► Merge
 US-03 + AC                      Closes #3                  Issue chiusa
```

| # | Passo | Dettagli |
|---|---|---|
| 11 | Issue | Testo della US, riferimenti (RF4, UC-05), AC-US03-xx, stima |
| 12 | Branch | `feature/us-03` da `main`, si lavora solo lì |
| 13 | Pull request | Descrizione a mano: cosa cambia, AC ↔ test, `Closes #3` |
| 14 | Review | Un compagno legge il diff contro gli AC della Issue, almeno un commento |
| 15 | Correzioni e merge | Merge solo dopo l'approvazione; la retrospective va come commento finale |

---

<!-- _class: small -->

# 💬 Esempio di commento in review

> **`app/booklendings.js`**: il middleware `tokenChecker` non è applicato alla route `PATCH`. **AC-US03-05** dice che solo un operatore autenticato può registrare una restituzione: senza token la risposta deve essere **401**.

1. Lo viluppatore corregge
2. Aggiorna la PR
3. Fa merge **solo dopo l'approvazione**

La review è efficace perché c'è un **riferimento scritto e identificato** (gli AC nella Issue) contro cui confrontare il diff.

---

# 🏆 Lezione 1 – Hands-on

Un repository con:

- US-03 implementata, **test verdi**, ciascuno riferito a un AC
- una **PR mergiata** con almeno un commento di review
- la **Issue chiusa**, con US, AC e retrospective
- il link *"Issue ↔ PR"* visibile nella cronologia GitHub

---

# 🚧 Il limite che emerge

Il giorno dopo, le decisioni sono **nel team e nella Issue**, ma **non nel repo**:

- non sono versionate insieme al codice: nulla dice quale criterio ha guidato quale riga
- quando un requisito cambia a metà implementazione devi **ricordarti a mano** quali file toccare
- un agente che riparte da zero **non vede** né la chat né la Issue: deve ricostruire tutto dal codice

> La Lezione 2 porta le decisioni **dentro il repo**, accanto al codice.

---

<!-- _class: section -->

# 🤖 Lezione 2

## Ciclo strutturato con OpenCode

Gli stessi passi, artefatti generati in dialogo, approvati da te

---

# 🎯 Lezione 2 – Obiettivo

Ripetere i passi della Lezione 1 sulla stessa **US-03**, ma con gli artefatti intermedi generati da OpenCode.

**Il tuo ruolo cambia**: non scrivi più i documenti, li **validi**.

Le decisioni che in Lezione 1 restavano nel team e nella Issue ora vivono **nel repo**, versionate accanto al codice.

```
intent.md ──gate──► spec.md ──gate──► oas3.yaml ──gate──► plan.md ──gate──► codice
 (epic)              (US)              (contratto)          (task)
```

Ogni artefatto ha un **gate**: lo approvi, lo committi, poi passi al successivo.

---

# 🧠 Contesto persistente: AGENTS.md

Prima di aprire OpenCode sulla User Story, fagli generare `AGENTS.md` a partire da `README.md` e `docs/requirements.md` (e, se esistono, `docs/architecture.md` e `oas3.yaml`).

- È il **contesto che l'agente rilegge a ogni sessione**
- Il giorno dopo non deve ricostruire tutto dal codice
- Va **rivisto** da te prima del commit

```
git commit -m "docs: add AGENTS.md"
```

---

<!-- _class: small -->

# AGENTS.md – prompt

```
Leggi README.md e docs/requirements.md.
Genera AGENTS.md come file di contesto per le future sessioni OpenCode.
Includi: convenzioni di stack, vincoli espliciti, dove trovare
requisiti e artefatti, come citare gli identificatori (RF, UC, US, AC).
Non inventare dettagli architetturali — il codice non esiste ancora.
```

Nota l'ultima riga: il prompt **vincola** l'agente a non inventare.

---

<!-- _class: code -->

# AGENTS.md – output generato

```markdown
# EasyLib — contesto per OpenCode

## Stack
Node.js + Express 5 (backend), MongoDB + Mongoose (persistenza),
Vue 3 + Vite (frontend), Jest + Supertest (test).

## Convenzioni
- ES Modules ovunque (import/export, mai require)
- Messaggi di commit: Conventional Commits (feat/fix/docs/test/chore)
- Tracciabilità: cita sempre gli ID (RF, UC, US, AC) in spec, piani e nomi dei test

## Vincoli
- Non aggiungere dipendenze npm senza indicarlo esplicitamente
- Non risolvere silenziosamente ambiguità di dominio: segnalarle
- RF, RNF, UC e backlog sono in docs/requirements.md — non inventarne di nuovi

## Dove trovare le cose
- Requisiti, Use Case e backlog: docs/requirements.md
- Intent per epic: intent/<epic>/intent.md
- Spec e piano per User Story: intent/<epic>/<us-id>-<nome>/
- Architettura (quando disponibile): docs/architecture.md
- API reference (quando disponibile): oas3.yaml
```

---

<!-- _class: small -->

# 🔁 Ciclo per US-03 con OpenCode

| # | Artefatto | Chi lo produce | Il tuo gate | Commit |
|---|---|---|---|---|
| 1 | `intent.md` (epic) | OpenCode, dopo averti fatto domande | Correggi, stato → approvato | `docs: intent gestione-prestiti` |
| 2 | `spec.md` (US) | OpenCode, da intent, US e AC | Risolvi ogni **concern** | `docs: spec US-03` |
| 3 | `oas3.yaml` | OpenCode, dalla spec | Rileggi il contratto | `docs: openapi US-03` |
| 4 | `plan.md` | OpenCode in **plan mode** | Test prima, ordine per dipendenze | `docs: plan US-03` |
| 5 | Codice | OpenCode, un task alla volta | Test + diff + commit a ogni passo | per task |
| 6 | Verifica | Tu | Ogni AC ↔ scenario ↔ test | |
| 7 | Confronto | Tu | Retrospective vs. Lezione 1 | |

---

<!-- _class: small -->

# 💡 1. intent.md (just-in-time, per epic)

`intent/gestione-prestiti/intent.md` con le sezioni:

**Problema** · **Risultato atteso** · **Attori** · **Riferimenti** (RF, UC, US) · **Vincoli** · **Domande aperte**

- **Non lo compili a mano**: descrivi l'epic a OpenCode a voce
- OpenCode **legge `docs/requirements.md`** e fa domande solo su ciò che RF e UC non dicono
- Rileggilo, correggi ciò che non è vero, imposta lo stato su **approvato**

---

<!-- _class: small -->

# intent.md – prompt e dialogo

```
Voglio completare l'epic Gestione prestiti con la restituzione dei libri
(US-03). Leggi docs/requirements.md: RF4, UC-04, UC-05 e il backlog.

Aiutami a definire l'intent dell'epic. Fai le domande necessarie
per chiarire scope, vincoli e comportamento atteso, poi genera
intent/gestione-prestiti/intent.md usando il template standard.
```

OpenCode chiede:
1. Le penalità per restituzione in ritardo (UC-05 «extend» *Gestire penalità*) rientrano in US-03?
2. Gli operatori hanno già un ruolo distinto nel sistema, come chiede RNF1?

Risposta: **penalità fuori scope** (nuova US); **ruoli: non ancora** → resta domanda aperta.

---

<!-- _class: code -->

# intent/gestione-prestiti/intent.md – output

```markdown
# Intent: Gestione prestiti
Autore: studente. Stato: bozza.

## Problema
Gli operatori registrano i prestiti (US-01, US-02), ma non possono registrarne
la restituzione: il libro resta non disponibile e il prestito non si chiude.

## Risultato atteso
L'operatore registra la restituzione di un prestito attivo. Il prestito risulta
concluso e resta nello storico; il libro torna disponibile per nuovi prestiti.

## Attori
Operatore biblioteca (principale), Utente biblioteca (secondario).

## Riferimenti
RF4, RNF1, UC-04, UC-05, US-01, US-02, US-03.

## Vincoli
Lo storico dei prestiti conclusi va mantenuto (RF4): nessuna eliminazione.
L'autenticazione JWT esistente deve essere usata (RNF1).
Penalità per ritardo fuori scope (UC-05 «extend»): nuova US.

## Domande aperte
- Gli operatori hanno un ruolo distinto dagli utenti nel sistema?
```

---

<!-- _class: small -->

# 📐 2. spec.md – prompt

Chiedi a OpenCode di derivare la spec della US **dall'intent approvato e dagli AC**:

```
Leggi intent/gestione-prestiti/intent.md e la US-03 con i suoi AC.
Produci la specifica tecnica come
intent/gestione-prestiti/us-03-restituzione/spec.md.

La specifica deve includere:
- Endpoint coinvolti con metodo, path, auth richiesta, codici di risposta
- Modifiche al modello dati
- Scenari Given-When-Then, ciascuno collegato a uno o più AC-US03-xx
- Aree di concern: segnala esplicitamente qualsiasi vincolo
  in conflitto o punto ambiguo che richiede una decisione
  prima dell'implementazione.
```

---

<!-- _class: code -->

# spec.md – endpoint, modello, scenari

```markdown
# Spec: US-03 Registrare una restituzione  (RF4, UC-05, RNF1)

## Endpoint
PATCH /api/v1/booklendings/:id   body: { "status": "returned" }
- Auth: richiesta (tokenChecker middleware)
- 200 OK con il prestito aggiornato
- 404 Not Found se il prestito non esiste
- 409 Conflict se il prestito è già restituito
- 401 Unauthorized senza token

## Modifiche al modello dati
Booklending: status "active" | "returned"; nuovo campo `return_date`.
Il documento non viene eliminato (storico, RF4).

## Scenari
[AC-US03-01, 02, 03] Given un prestito attivo id=123
  When PATCH /api/v1/booklendings/123 {status: "returned"} con token valido
  Then 200, status = "returned", `return_date` valorizzata
  And il libro del prestito ha available = true
[AC-US03-04] Given un prestito inesistente → 404 Not Found
[AC-US03-04] Given un prestito già restituito → 409 Conflict
[AC-US03-05] Given una richiesta senza token → 401 Unauthorized
```

---

<!-- _class: small -->

# spec.md – ⚠ Aree di concern

```markdown
1. Autorizzazione: AC-US03-05 richiede un *operatore* autenticato, ma
   tokenChecker verifica solo l'autenticazione. Chiunque abbia un token
   valido (anche un utente biblioteca) può registrare una restituzione.
   Decisione richiesta prima dell'implementazione.
2. Penalità: UC-05 prevede «extend» Gestire penalità per restituzioni
   in ritardo. L'intent lo esclude, ma `return_date` sarà il dato di partenza.
```

- Il concern #1 **contraddice un AC e RNF1**
- Viene portato al Product Owner (il docente) **prima** di procedere
- Decisione: per ora solo autenticazione (401); il ruolo operatore diventa una nuova US su RF1 → annotato nell'intent, AC-US03-05 **verificato solo in parte**

> L'agente **segnala**, la decisione resta **umana**.

---

<!-- _class: small -->

# 📜 3. Contratto API

Se il progetto ha un `oas3.yaml`, chiedi a OpenCode di **estenderlo** con l'endpoint definito in `spec.md`.

```
git commit -m "docs: openapi US-03"
```

Il contratto viene aggiornato **prima** del codice: è parte della specifica, non documentazione a posteriori.

---

<!-- _class: small -->

# 🗺️ 4. plan.md – prompt (plan mode)

```
opencode --plan

Leggi intent/gestione-prestiti/us-03-restituzione/spec.md e produci
un piano di implementazione come
intent/gestione-prestiti/us-03-restituzione/plan.md.

Il piano deve indicare:
- Task: file da creare o modificare, in ordine
- Dipendenze tra i task
- Test da scrivere prima dell'implementazione, con l'AC che verificano
```

In **plan mode** l'agente ragiona e propone, ma **non modifica** il codice.

---

<!-- _class: code -->

# plan.md – output generato

```markdown
# Piano: US-03 Registrare una restituzione

## Task
1. app/models/booklending.js: status "active" | "returned", campo `return_date`
   Dipende da: —

2. app/booklendings.js: handler PATCH /api/v1/booklendings/:id
   - applicare tokenChecker alla route
   - 404 se il prestito non esiste, 409 se già restituito
   - impostare status e `return_date`, rendere disponibile il libro
   - 200 con il prestito aggiornato
   Dipende da: (1)

3. app/booklendings.test.js: test di accettazione
   - AC-US03-01/02/03: prestito attivo → 200, returned, libro disponibile
   - AC-US03-04: inesistente → 404; già restituito → 409
   - AC-US03-05: senza token → 401
   Dipende da: (2)

## Nota
Il controllo del ruolo operatore è fuori scope: vedi spec.md, concern #1.
```

---

<!-- _class: small -->

# ✋ plan.md – la correzione umana

Il piano generato mette i **test dopo** il codice. ❌

Lo studente corregge:
- i test vengono **per primi** (TDD), subito dopo il modello
- l'ordine deve rispettare le dipendenze reali

```
git commit -m "docs: plan US-03"
```

> L'errore è stato intercettato **nel piano**, non nel codice.

---

<!-- _class: small -->

# ✅ 5–6. Implementazione a passi e verifica

**Implementazione**: esegui il piano **un task alla volta**. Dopo ogni task:

1. esegui i test
2. leggi il diff
3. commit

Se un task non torna, **correggi `plan.md`** prima di continuare – non il codice in silenzio.

**Verifica contro la spec**: per ogni AC-US03-xx, segui la catena **AC → scenario in `spec.md` → test verde**.

> Un criterio senza test è un criterio **non verificato**.

---

<!-- _class: small -->

# ⚖️ 7. Confronto con processo manuale della lezione precedente

Riprendi la retrospective della Lezione 1:

- Quali passi hai **delegato**?
- Quali errori hai intercettato in **`spec.md`** o **`plan.md`** invece che nel codice?
- Il giorno dopo, quanto contesto hai dovuto **ricostruire**?

---

<!-- _class: small -->

# 🏆 Lezione 2 – Hands-on

- `intent.md`, `spec.md`, `plan.md` committati **prima** dell'implementazione
- almeno **una correzione manuale** documentata nei commit
- test verdi, ogni AC-US03-xx collegato a uno scenario e a un test

```
EasyLib/
├── AGENTS.md
├── README.md
├── docs/
│   └── requirements.md
├── intent/
│   └── gestione-prestiti/
│       ├── intent.md
│       └── us-03-restituzione/
│           ├── spec.md
│           └── plan.md
├── oas3.yaml
├── app/
└── .github/
```

---

<!-- _class: section -->

# 🚀 Prossimi passi: AI-native SDLC

Il flusso viene orchestrato, i gate umani restano dove servono

---

# 🏭 Da *AI-supported* a *AI-native*

Fino ad ora il lavoro **passa sempre da te**: scrivi o approvi ogni artefatto, lanci ogni comando, leggi ogni diff.

Nel workshop:

- **Agenti specialistici** con responsabilità separate (requisiti, design, sviluppo) e un **coordinatore** che mantiene la tracciabilità
- **Catene di dipendenza**: quando un RF cambia, quali UC, US, spec, piani e test vanno rivisti
- **Git worktree**: più User Story dello sprint in parallelo, ciascuna nel proprio worktree
- **Pipeline CI**: test e analisi statica su ogni PR
- **Review automatiche**: un agente confronta il diff con `spec.md` e blocca il merge
- **Gate umani**: nessuna approvazione, baseline o merge senza un comando esplicito

---

<!-- _class: small -->

# ⚙️ CI con review automatica – prompt

EasyLib ha già `.github/workflows/node.js.yml` con `npm test` su ogni push.

```
Leggi .github/workflows/node.js.yml.
Aggiungi uno step che su ogni Pull Request:
1. Chiede a OpenCode una review del diff rispetto a main
2. Passa lo spec.md della User Story come contesto
3. Posta il risultato come commento sulla PR

Se OpenCode trova violazioni dei criteri di accettazione
sullo spec.md, lo step deve fallire e bloccare il merge.
```

---

<!-- _class: small -->

# ⚙️ CI con review automatica – step generato

```yaml
- name: OpenCode PR review
  if: github.event_name == 'pull_request'
  env:
    SPEC: ${{ vars.SPEC_PATH }}   # es. intent/gestione-prestiti/us-03-restituzione/spec.md
  run: |
    npx opencode review \
      --diff "$(git diff origin/main...HEAD)" \
      --spec "$SPEC" \
      --fail-on-violation
```

```
git commit -m "ci: add OpenCode PR review step"
```

Nella prima PR successiva, OpenCode **blocca il merge**: `PATCH /api/v1/booklendings/:id` non applica `tokenChecker` → viola lo scenario di **AC-US03-05** (*senza token → 401*). Lo studente aggiunge il middleware e rilancia i test.

---

<!-- _class: small -->

# 🏛️ Caso reale: D1 IS 2026

Sistema multi-agente che produce e mantiene il **D1** (Requirements Engineering).

**Agenti specialistici**: `requirements-engineer`, `use-case-designer`, `user-story-developer`, `frontend-designer`
**Coordinatore**: `d1-coordinator`

```
Requirements ──► Use Cases ──► User Stories ──► Acceptance Criteria ──► Mockup
```

È la stessa catena RF → UC → US → AC delle lezioni 6–8, da cui partono le Lezioni 1 e 2.

- Gli agenti **non inventano** requisiti né risolvono ambiguità: segnalano **GAP** e **CLAR**
- Flusso: `input/project-material/` → `/d1-requirements` → `/d1-generate` → review iterativa → PDF
- Gate umano esplicito: `/d1-baseline "approve v1.0"`
- Ogni modifica dopo la baseline diventa un **`CH-*`** nel change log

---

<!-- _class: code -->

# 🗂️ Struttura di riferimento completa

```
.
├── AGENTS.md                          # entry point per OpenCode
├── docs/
│   ├── requirements.md                # RF, RNF, UC, backlog per epic
│   ├── architecture.md
│   └── data-model.md
├── intent/
│   ├── catalogo/                      # epic (RF3)
│   │   ├── intent.md                  # intent dell'epic
│   │   └── us-xx-.../ ...
│   ├── accesso/                       # epic (RF1)
│   │   ├── intent.md
│   │   └── us-xx-ruolo-operatore/ ... # nata dal concern di US-03
│   └── gestione-prestiti/             # epic (RF4)
│       ├── intent.md
│       ├── us-01-identificazione/ ...
│       ├── us-02-registrazione/ ...
│       └── us-03-restituzione/
│           ├── spec.md
│           └── plan.md
├── src/
└── .github/workflows/ci.yml
```

Ogni lezione aggiunge uno strato.

---

<!-- _class: small -->

# 🏁 Riepilogo

| | ✍️ Lezione 1 | 🤖 Lezione 2 | 🚀 Prossimi passi |
|---|---|---|---|
| **Punto di partenza** | RF, UC, US dal D1 | RF, UC, US dal D1 | RF, UC, US dal D1 |
| **Artefatti** | Decisi nel team, poi nella Issue | Generati, validati da te | Generati da agenti specialistici |
| **Contesto** | Fuori dal repo (team, Issue) | `AGENTS.md` + `intent/` | Catene di dipendenza esplicite |
| **Errori intercettati** | Nel codice, in review | Nella spec e nel piano | In CI, prima del merge |
| **Il tuo ruolo** | Autore | Validatore | Responsabile dei gate |

> L'automazione cresce, **la responsabilità delle decisioni resta umana**.
