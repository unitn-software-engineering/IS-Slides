# Ingegneria del Software — User Story

- **Fonte:** `8-user-story-new.pdf`
- **Numero di pagine:** 27
- **Autore:** Prof. Paolo Giorgini — A.A. 2026/2027
- **Footer delle slide:** "Ingegneria del Software 2026- Prof. Paolo Giorgini" + numero di pagina

---

## Pagina 1 — Ingegneria del Software / User Story

**Ingegneria del Software**

**User Story**

Prof. Paolo Giorgini
A.A. 2026/2027

---

## Pagina 2 — Che cos'è una User Story?

Una User Story descrive una **funzionalità desiderata** dal punto di vista dell'utente, evidenziando l'**obiettivo** e il **valore atteso**.

### 1 Titolo e User Story

**Formato:**

> Come <ruolo>, voglio <obiettivo>, in modo da <beneficio>.

**Esempio (EasyLib):**

**US-01: Ricerca di un libro**
Come **utente della biblioteca**, voglio **cercare un libro per titolo o autore**, in modo da **trovare rapidamente i libri che mi interessano.**

### 2 Descrizione

Fornisce il contesto necessario per comprendere la User Story, chiarendo eventuali dettagli e condizioni rilevanti.

**Esempio (EasyLib):**

L'utente può cercare libri utilizzando il titolo o l'autore. La ricerca deve essere semplice e immediata, con risultati rilevanti che mostrano le informazioni principali del libro e la disponibilità.

### 3 Acceptance Criteria

Definiscono le condizioni verificabili che devono essere soddisfatte affinché la User Story sia considerata completata.

**Esempio (EasyLib):**

| ID | Criterio |
|---|---|
| AC-US01-01 | L'utente può cercare libri per titolo o autore. |
| AC-US01-02 | Il sistema mostra i libri corrispondenti alla ricerca. |
| AC-US01-03 | Per ogni libro vengono visualizzati titolo, autore e disponibilità. |

**User Story =** Chi? + Che cosa vuole? + Perché?

**Acceptance Criteria =** Come verifichiamo che l'obiettivo sia stato raggiunto?

---

## Pagina 3 — Quando si usano le User Stories?

Le User Story sono uno strumento flessibile e si adattano al contesto e al metodo di lavoro.

### SCRUM — User Stories all'interno dello Sprint

> Diagramma: board con tre colonne "To Do", "Doing", "Done" contenenti post-it colorati.

- Le User Story sono le unità di lavoro dello Sprint.
- Vengono stimate, prioritizzate e pianificate nel backlog.
- Il team le porta a termine in un time-box definito.

**Obiettivo:** Consegna incrementale di valore entro ogni Sprint.

### KANBAN — User Stories nel flusso continuo

> Diagramma: board con cinque colonne "Backlog", "To Do", "In Progress", "Review", "Done" contenenti post-it colorati.

- Le User Story entrano nel sistema e seguono il flusso di lavoro.
- Non esiste uno Sprint: il lavoro è continuo.
- Si limita il WIP (Work In Progress) per mantenere il flusso stabile.

**Obiettivo:** Massimizzare il flusso di lavoro e ridurre i tempi di lead time.

### In sintesi

Le User Story si usano in entrambi i metodi, ma si integrano in modo diverso:
**negli Sprint (SCRUM) sono il cuore della pianificazione, in Kanban seguono il flusso continuo.**

---

## Pagina 4 — Come scrivere una User Story?

**INVEST**

| Lettera | Criterio | Descrizione |
|---|---|---|
| I | **Independent** | Può essere sviluppata in **qualsiasi ordine**, **senza dipendere** da altre user stories. |
| N | **Negotiable** | Rappresenta un **punto di partenza per la conversazione**, non un contratto rigido. |
| V | **Valuable** | Deve apportare un **valore concreto** al prodotto o all'utente finale. |
| E | **Estimable** | Deve poter essere **stimata** in termini di dimensione o complessità relativa. |
| S | **Small** | Deve essere abbastanza **ridotta** da poter essere completata rapidamente. |
| T | **Testable** | Deve poter essere **validata** attraverso test o criteri di accettazione chiari. |

---

## Pagina 5 — Chi scrive le User Story?

Le User Story possono essere proposte e scritte da chiunque. La loro definizione è un'attività **collaborativa**.

### Product Owner — Responsabile del Product Backlog

- Assicura che il Product Backlog sia **gestito e ordinato**.
- Definisce le **priorità** in base al valore del prodotto.
- Chiarisce gli **obiettivi e le esigenze** da soddisfare.

### Stakeholder / Utenti — Esprimono bisogni e aspettative

- Descrivono **problemi, esigenze e obiettivi**.
- Propongono nuove User Story.
- Forniscono **feedback e chiarimenti**.

### Developers — Collaborano alla definizione

- Chiariscono **ambiguità** e dettagli tecnici.
- Valutano **fattibilità, dimensione e complessità**.
- Contribuiscono alla definizione degli **Acceptance Criteria**.

> Diagramma: frecce dai tre gruppi (Product Owner, Stakeholder/Utenti, Developers) convergono su un riquadro "**User Story** — Risultato della collaborazione tra Product Owner, stakeholder, utenti e developers.", da cui una freccia porta al **Product Backlog**, che contiene:
>
> | ID | Titolo |
> |---|---|
> | US-01 | Ricerca di un libro |
> | US-02 | Prenotazione di un libro |
> | US-03 | Gestione del profilo utente |

**Messaggio chiave:** **Le User Story sono il risultato di una conversazione,** non il lavoro isolato di una persona.

---

## Pagina 6 — Quando scrivere le User Story?

### 1 All'inizio del progetto — Story Writing Workshop

- Si raccolgono i bisogni degli stakeholder.
- Si identificano le User Story iniziali.
- Si costruisce una prima versione del **Product Backlog**.

### 2 Durante lo sviluppo — Backlog Refinement

- Le User Story vengono chiarite e aggiornate.
- Le storie più grandi vengono suddivise in storie più piccole.
- Le storie prioritarie vengono dettagliate per prepararle allo sviluppo.

### 3 In qualsiasi momento — Nuove esigenze

- Nuove User Story possono essere introdotte in qualsiasi momento.
- Il Product Backlog viene aggiornato e riordinato.
- Le nuove esigenze vengono considerate nella pianificazione successiva.

> Diagramma: iceberg con post-it. Sopra la superficie (punta): **Pronte per lo Sprint** — "User Story piccole, chiare e sufficientemente dettagliate per essere selezionate in uno Sprint." Sotto la superficie: **Da chiarire e suddividere** — "User Story più grandi, ancora da chiarire, suddividere e perfezionare."

**Non serve dettagliare tutto subito.**
Le User Story vengono approfondite progressivamente, concentrandosi prima sulle più importanti (**Just-in-Time Refinement**).

---

## Pagina 7 — User Stories (items in the product backlog)

> Diagramma: card di una User Story del product backlog:
>
> - **US-01 — Login** — Priority: **1**
> - **User Story:** *As a **customer** I **want** to log in to the internet bank **so that** I can do my banking stuff.*
> - **How to demo** (in grigio, barrato con una X rossa e l'etichetta "**Not a test case!**"): *Given that I am at the start page for the internet bank, **when** I fill in my user name, password and press the Log in button, **then** I should be logged in to my account at the bank.*
> - **Estimate:** 8

Annotazioni:

- **User Story** — Descrive l'obiettivo dal punto di vista dell'utente e il valore atteso.
- **Questo non è una User Story** — Descrive i passi di test ("Given-When-Then") e quindi rappresenta un **test case**, non una User Story.

**Le User Story sono elementi del Product Backlog.**
Descrivono l'obiettivo e il valore per l'utente, non i dettagli di implementazione né i passi di test.

---

## Pagina 8 — Dai requisiti alle User Story

*Come trasformare ciò che il sistema deve fare in obiettivi concreti per gli utenti?*

> Diagramma: quattro colonne collegate da frecce (1 → 2 → 3 → 4).

### 1 Requisiti funzionali — Cosa deve fare il sistema?

**RF4 – Gestione dei prestiti**

"Il sistema deve permettere di registrare il prestito di un libro a un utente registrato, verificando la disponibilità del libro e i vincoli applicabili."

Il requisito descrive le funzionalità che il sistema deve fornire.

### 2 Use Case — Chi e come interagisce con il sistema?

**UC-04 – Registrare un prestito**

- **Attore:** Operatore
- **Obiettivo:** Registrare il prestito di un libro.
- **Flusso principale:**
  1. Identificare utente e libro
  2. Verificare disponibilità e vincoli
  3. Registrare il prestito
- **Flussi alternativi:**
  - Libro non disponibile
  - Limite di prestiti raggiunto

Lo Use Case chiarisce chi interagisce con il sistema e come si svolge lo scenario.

### 3 Identificare obiettivo e valore per l'utente — Qual è il bisogno dell'utente?

- **CHI?** Operatore della biblioteca
- **CHE COSA VUOLE?** Registrare il prestito di un libro.
- **PERCHÉ?** Consentire all'utente di prendere in prestito il libro e mantenere aggiornati i prestiti della biblioteca.

### 4 User Story — Obiettivo dell'utente in linguaggio naturale

**US-04 – Registrazione di un prestito**

*Come operatore della biblioteca, voglio registrare il prestito di un libro a un utente, in modo da consentirgli di prendere in prestito il libro e mantenere aggiornati i prestiti della biblioteca.*

**Acceptance Criteria (esempi)**

| ID | Criterio |
|---|---|
| AC-US04-01 | Il prestito è consentito solo se il libro è disponibile. |
| AC-US04-02 | Il sistema verifica i vincoli di prestito dell'utente. |
| AC-US04-03 | Dopo la conferma, il prestito viene registrato e la disponibilità aggiornata. |

### Nota importante

- Requisiti, Use Case e User Story sono collegati, ma non esiste necessariamente una corrispondenza 1:1.
- Un requisito può originare più User Story e una User Story può contribuire a soddisfare più requisiti.
- Nel D1 mantenete i collegamenti tra RF, Use Case e User Story attraverso gli identificatori (traceability).

---

## Pagina 9 — User stories: esempi (I) (Funzionali)

- (Studente) Come **studente**, voglio cercare un libro nel catalogo di Easylib in modo da trovare rapidamente i libri disponibili che mi interessano
- (Studente) Come **studente**, voglio prenotare un libro tramite Easylib in modo da poterlo ritirare quando sarà disponibile in biblioteca
- (Studente) Come **studente**, voglio ricevere una notifica quando il libro che ho prenotato è disponibile in modo da andare a ritirarlo
- (Bibliotecario) Come **bibliotecario**, voglio registrare il prestito di un libro su Easylib in modo da aggiornare automaticamente la disponibilità e tenere traccia dei prestiti

*(Nella slide il ruolo è in rosso, l'obiettivo in azzurro, il beneficio in verde.)*

---

## Pagina 10 — User stories: esempi (II) (non funzionali)

- (Studente) Come **utente**, voglio che Easylib risponda rapidamente alle mie azioni in modo da non annoiarmi
- (Studente) Come **utente**, voglio che le pagine di errore di Easylib siano gradevoli e chiare quando qualcosa va storto, in modo da potermi fidare del sistema.
- (Studente) Come **utente**, voglio che Easylib sia facile da usare, in modo da poterla utilizzare facilmente anche se non sono un esperto informatico.

*(Nella slide il ruolo è in rosso, l'obiettivo in azzurro, il beneficio in verde.)*

---

## Pagina 11 — Granularità, sotto-storie e tecnicalities

*(Numero stampato nell'immagine della slide: 12)*

- Una user story può essere suddivisa in un insieme di user stories più concrete e specifiche
  - La granularità dipende dal livello di dettaglio: da una storia generale a sotto-storie più specifiche

### Granularità e sotto-storie

> Diagramma: albero. Nodo radice "**User story: Payment** (più generale, meno specifica)" con tre figli: "User story: Payment via credit card", "User story: Payment via PayPal", "User story: Payment via bank transfer". Una parentesi sotto i tre figli li etichetta come "Sotto-storie più concrete e specifiche".

### Evitare tecnicalities

- Troppo tecnica? Chiediti perché!
  - **User story (v1):** i prodotti sono selezionati da un menu a discesa (drop-down list)
    - Perché?
      - Per essere sicuri che vengano scelti da un insieme controllato di elementi
  - **User story (aggiornata):** i prodotti sono selezionati da un insieme di opzioni predefinite

---

## Pagina 12 — Testare una user story

*(Numero stampato nell'immagine della slide: 13)*

**User story:** "Un utente può pagare i prodotti nel proprio carrello utilizzando una carta di credito"

- **Esempi di test**

| Caso di test | Descrizione | Risultato atteso |
|---|---|---|
| TC1 | Test con carta A, carta B e carta C (carte valide) | ✔ Superato |
| TC2 | Test con carta D (carta non valida) | ✘ Fallito |
| TC3 | Test con carta A di debito | ✔ Superato |
| TC4 | Test con numeri di carta corretti/errati, codice di sicurezza, nome e data di scadenza | ✔/✘ Superato / Fallito |
| TC5 | Test con carte scadute | ✘ Fallito |

- **Cosa rappresentano questi test?**

Questi test rappresentano le aspettative degli utenti riguardo al sistema finale, forniscono scenari reali utili al team di sviluppo e coprono sia casi di successo che casi di errore.

---

## Pagina 13 — Acceptance criteria vs Test

*(Numero stampato nell'immagine della slide: 14)*

### Acceptance criteria (criteri di accettazione)

- Definiscono **quali condizioni** devono essere soddisfatte affinché una user story possa essere considerata completata e accettata.
- Descrivono il comportamento atteso del sistema.
- Non specificano i singoli test.

### Test

- Definiscono **come verificare** concretamente che le condizioni degli acceptance criteria siano soddisfatte.
- Specificano scenari, input e risultati attesi.
- Forniscono evidenze che il sistema si comporta come richiesto.

### Esempio

**User story:** "Un utente può pagare i prodotti nel proprio carrello utilizzando una carta di credito"

| ID | Acceptance criterion |
|---|---|
| AC1 | Il sistema deve consentire il pagamento con carte di credito appartenenti ai circuiti supportati. |
| AC2 | Il sistema deve rifiutare carte appartenenti a circuiti non supportati. |
| AC3 | Il sistema deve verificare la validità dei dati della carta (numero, CVV, nome, data di scadenza). |
| AC4 | Il sistema deve rifiutare carte scadute. |
| AC5 | Il sistema deve mostrare un messaggio di conferma quando il pagamento viene completato correttamente. |

| ID | Test (scenario) | Risultato atteso | AC verificato |
|---|---|---|---|
| T1 | Pagamento con carta Visa valida | Pagamento accettato | AC1 |
| T2 | Pagamento con Mastercard valida | Pagamento accettato | AC1 |
| T3 | Pagamento con carta non supportata | Pagamento rifiutato | AC2 |
| T4 | Numero di carta non valido | Pagamento rifiutato | AC3 |
| T5 | Codice CVV errato | Pagamento rifiutato | AC3 |
| T6 | Carta scaduta | Pagamento rifiutato | AC4 |
| T7 | Pagamento completato correttamente | Messaggio di conferma visualizzato | AC5 |

### Punti chiave

- Gli **acceptance criteria** definiscono **cosa** deve funzionare.
- I test definiscono **come** verificare che funzioni.
- Uno stesso acceptance criterion può essere verificato da più test.
- Superare un test non significa necessariamente che tutti gli acceptance criteria siano soddisfatti.

---

## Pagina 14 — Dimensione di una user story

*(Numero stampato nell'immagine della slide: 15)*

### Indicazioni generali

- Non esiste **una dimensione giusta** per una user story.
  - Tipicamente **1–3 giorni** per essere completata.
  - Può includere diversi task.
- Avere una sola user story molto grande (che occupa metà sprint) e le altre più piccole può essere **rischioso**.
- **Evita** di avere **un insieme** di user stories troppo grandi.
- Fai attenzione alle storie del tipo **"cosa & cosa"**: spesso in realtà sono due storie distinte.

### Esempi

| Tipo | Esempio | Commento |
|---|---|---|
| **Troppo grande** ✘ | "Come utente voglio cercare prodotti, filtrarli, aggiungerli al carrello e pagare con carta di credito" | → Include più funzionalità: da suddividere in storie separate. |
| **Dimensione equilibrata** ✔ | "Come utente voglio pagare i prodotti nel mio carrello utilizzando una carta di credito" | → Abbastanza piccola da essere completata rapidamente, ma con valore autonomo. |
| **"Cosa & cosa"** ! | "Come utente voglio registrarmi e accedere al sistema" | → In realtà sono due storie distinte: una per la registrazione e una per il login. |

### Regola generale

Una user story dovrebbe essere:

- **abbastanza piccola** da poter essere completata rapidamente;
- ma **abbastanza grande** da avere un valore autonomo e consegnabile.

---

## Pagina 15 — Epics & User stories

*(Numero stampato nell'immagine della slide: 16)*

### Epic

- È un insieme di lavoro di alto livello che raggruppa **un gruppo di user stories correlate**.
- Rappresenta una funzionalità o un obiettivo più ampio del prodotto.

### Perché usare gli epics?

- Organizzano le user stories in aree funzionali coerenti.
- Aiutano a pianificare e comunicare obiettivi di alto livello.
- Forniscono una visione d'insieme dello sviluppo del prodotto.

> Diagramma: gerarchia ad albero.
> - **Iniziativa / Obiettivo di prodotto** (es. Migliorare l'esperienza di acquisto)
>   - **Epic 1** — Gestione del catalogo
>     - User story 1 — Ricerca prodotti
>       - Sub-task 1 — Implementare API di ricerca
>     - User story 2 — Filtri di ricerca
>   - **Epic 2** — Carrello e checkout
>     - User story 3 — Aggiungere prodotti al carrello
>       - Sub-task 1 — Gestione carrello
>     - User story 4 — Pagamento con carta di credito
>       - Sub-task 2 — Integrazione con payment gateway
>   - **Epic 3** — Gestione account
>     - User story 5 — Registrazione utente
>       - Sub-task 1 — Validazione dati
>     - User story 6 — Login utente
>       - Sub-task 2 — Autenticazione

### Esempio

- **Epic:** "Carrello e checkout"
- **User stories correlate:**
  - Aggiungere prodotti al carrello
  - Pagamento con carta di credito
  - Applicare un codice sconto
  - …

---

## Pagina 16 — Una story e un epic: confronto ed esempio

*(Numero stampato nell'immagine della slide: 17)*

### User Story

- È la **più piccola** unità di lavoro.
- Di solito **non** può essere ulteriormente suddivisa.
- Rappresenta un **incremento di prodotto consegnabile** che deve essere completato in **uno sprint**.
- Rappresenta un **valore** che l'utente ottiene dopo l'implementazione.
- È **facile da stimare**.

### Epic

- È un insieme di lavoro di alto livello che raggruppa un **gruppo di user stories correlate**.
- Può essere suddiviso in elementi più specifici e più piccoli (user stories).
- Può essere implementato nel corso di più **sprint**.
- Indica un'**attività più generale** (ad esempio, l'implementazione di un intero flusso utente).
- È **più difficile da stimare**, poiché l'ambito è flessibile.

### Esempio: app di incontri

Buoni esempi di Epic e User Stories (senza prenderli troppo sul serio).

> Diagramma: dal riquadro Epic partono tre frecce verso tre User Story.

**Epic — Gestione dei profili**
Raggruppa tutte le funzionalità legate alla gestione delle informazioni del profilo utente.

- **User Story 1:** Come utente dell'app, voglio **aggiungere foto al mio profilo** in modo che **più persone mi scrivano** per dirmi quanto sono fantastico.
- **User Story 2:** Come amministratore, voglio **eliminare o bloccare le foto dai profili degli utenti** in modo che **non spaventino gli altri utenti** con foto inappropriate (o che non violino le regole della community).
- **User Story 3:** Come utente dell'app, voglio **avere un campo separato dove raccontare di più su di me**, in modo che le persone **si innamorino della mia personalità** e non del mio attico nel centro di Milano.

---

## Pagina 17 — Estimating effort: Planning Poker

*(Numero stampato nell'immagine della slide: 19)*

### Ruoli

- **Product Owner** — Descrive la user story in modo chiaro e risponde alle domande.
- **Team**
  - Fa domande per chiarire la story finché tutto è chiaro.
  - Ogni membro fornisce una stima in modo indipendente (con le carte).
- **Scrum Master** — Facilita la discussione e indica quando effettuare la stima.
- **Stime estreme** — Possono essere motivate (ad es. rischi, incertezze, complessità non evidenti).
- **Iterazione** — Il processo viene ripetuto finché si raggiunge un consenso.

### Processo

1. **Il Product Owner presenta la user story** — "Come utente, voglio poter aggiungere una foto al mio profilo per rendere il mio profilo più attraente."
2. **Il team stima** — Ogni membro sceglie una carta in modo indipendente. *(Illustrazione: carte 2, 5, 3)*
3. **Il team discute** — Si confrontano le stime diverse e si discutono le motivazioni.
4. **Si stima di nuovo** — Dopo la discussione, il team fornisce una nuova stima. Si ripete il processo finché si raggiunge un consenso. *(Illustrazione: carte 4, 4, 4)*

**Obiettivo:** Ottenere una stima condivisa dello sforzo necessario per la user story, tenendo conto delle diverse prospettive e conoscenze del team.

---

## Pagina 18 — Estimating effort — What are story points in Agile?

*(Numero stampato nell'immagine della slide: 19)*

### Story points

- Unità **relativa** di misura usata per stimare e pianificare il lavoro.
- **Non** rappresentano ore/giorni.
- Catturano **complessità**, **incertezza**, **rischio** e **sforzo** complessivo.

### Relative sizing

- Le story point servono a **confrontare** le dimensioni delle user stories tra loro.
- Una story point più alta indica una user story **relativamente più grande e complessa**.
- La scala è **relativa** al team e al progetto.

> Diagramma: "Relative Sizing" — sequenza di animali di dimensione crescente con i relativi punti: gallina (1) < cane (2) < leone (5) < orso (8) < elefante (13).

### Punti chiave

- Le story points sono una misura **relativa**, non assoluta.
- Servono a facilitare la discussione e il **confronto** tra user stories.
- La scala (es. 1, 2, 3, 5, 8, 13, …) è una **convenzione**, spesso basata sulla sequenza di Fibonacci.
- Sono stimate dal team (ad es. con Planning Poker) e includono **tutto il lavoro**, compresi test e integrazione.

---

## Pagina 19 — Story points are used for estimating the overall effort

*(Nessun numero di pagina visibile nell'immagine della slide)*

### Cosa rappresentano?

Gli story points stimano lo sforzo complessivo necessario per implementare una user story, tenendo conto di diversi fattori.

- Quantità di lavoro
- Complessità
- Rischio e incertezza

} Un'unica misura relativa

### Quantità di lavoro

Una user story può richiedere poco o molto lavoro.

> Diagramma: bilancia sbilanciata tra "bassa quantità di lavoro" e "alta quantità di lavoro"; sotto, icona di una finestra di applicazione.

### Complessità

Una user story può essere più o meno complessa.

> Diagramma: bilancia sbilanciata tra "bassa complessità" e "alta complessità"; sotto, una lavagna con un diagramma di flusso.

### Rischio e incertezza

Una user story può avere un livello di rischio o incertezza maggiore.

> Diagramma: icona di pericolo, persone con punto interrogativo, e due nuvole collegate da una freccia (migrazione/cambiamento).

---

## Pagina 20 — Stima con Planning Poker

Si usano numeri della sequenza di **Fibonacci** o **taglie T-shirt** per stimare le user stories

### Sequenza di Fibonacci

- Si usa una scala **non lineare** basata sui numeri di Fibonacci.
- Permette di esprimere **stime relative** con una maggiore capacità di distinguere tra story molto diverse.

> Diagramma: ventaglio di carte con i valori 1, 2, 3, 5, 8, 13, 21, 34, ?

### T-shirt sizing

- Alternativa più semplice, basata sulle taglie delle magliette.
- Utile per avere una stima **rapida e intuitiva**.

| Taglia | XXS | XS | S | M | L | XL | XXL |
|---|---|---|---|---|---|---|---|
| Punti | 1 | 2 | 3 | 5 | 8 | 13 | 21 |

### Esempio di sessione di stima

Durante un workshop di stima (es. Planning Poker), tutto il team partecipa e fornisce una stima per ogni user story.

> Diagramma: board con colonne per story points e post-it delle user story:
>
> | 1 SP | 3 SP | 5 SP | 8 SP | 13 SP |
> |---|---|---|---|---|
> | US3, US5 | US2, US4 | REFERENCE USER STORY 1, US7 | US1 | US6 |

### Tutto il team coinvolto

Durante la stima, tutti i membri del team partecipano, discutono le stime e condividono le proprie prospettive per raggiungere un consenso.

---

## Pagina 21 — Tasks

*(Nessun numero di pagina visibile nell'immagine della slide)*

Le attività concrete necessarie per implementare una User Story

### User Story

- Descrive una funzionalità che produce valore per l'utente
- Risponde alla domanda **COSA** vuole ottenere l'utente e **PERCHÉ?**
- Viene stimata in Story Points
- Può essere suddivisa in Task

### Task

- È una attività tecnica da svolgere per implementare la User Story
- Risponde alla domanda **COME** il team realizzerà la funzionalità
- Può essere suddiviso ulteriormente in sotto-task
- Di solito viene stimato in ore (tempo di lavoro), non in Story Points

### Obettivo

- I Task aiutano il team a pianificare e organizzare il lavoro nello sprint
- Permettono di assegnare le responsabilità
- Rendono la User Story più concreta e gestibile
- Non producono direttamente valore per l'utente, ma contribuiscono a realizzarlo

### Esempio: EasyLib – Prendere in prestito un libro

**User Story**

"Come studente, voglio prendere in prestito un libro disponibile in modo da poter accedere alle risorse della biblioteca."

| Campo | Valore |
|---|---|
| ID | US-01A |
| Priorità | Must Have |
| Story Points | 8 |
| Stato | To Do |

→ *Viene implementata tramite* →

**Task di implementazione**

| Task | Descrizione | Area |
|---|---|---|
| T1 | Implementare l'endpoint per richiedere un prestito | Backend |
| T2 | Verificare la disponibilità del libro | Backend |
| T3 | Registrare il prestito nel database | Backend |
| T4 | Aggiornare la disponibilità delle copie | Backend |
| T5 | Realizzare l'interfaccia per richiedere il prestito | Frontend |
| T6 | Implementare i test (unitari e di integrazione) | Testing |

---

## Pagina 22 — EasyLib – Requisiti funzionali del sistema

Elenco dei requisiti funzionali (D1)

| ID | Requisito | Descrizione |
|---|---|---|
| RF1 | **Accesso al sistema** | Il sistema deve consentire l'autenticazione degli utenti (studenti e operatori della biblioteca) e gestire i relativi permessi di accesso alle funzionalità, in base al ruolo. |
| RF2 | **Registrazione e gestione del profilo utente** | Il sistema deve consentire la registrazione di nuovi utenti (studenti), la modifica dei dati del profilo e la disattivazione dell'account. |
| RF3 | **Consultazione del catalogo bibliografico** | Il sistema deve consentire agli utenti di consultare il catalogo dei libri, visualizzando le informazioni bibliografiche e la disponibilità delle copie. |
| RF4 | **Gestione dei prestiti** | Il sistema deve consentire agli operatori della biblioteca di gestire i prestiti dei libri agli utenti registrati. Per ciascun prestito devono essere registrate le informazioni relative all'utente, al libro, alla data di inizio e alla data prevista per la restituzione. La registrazione di un prestito deve modificare la disponibilità del libro. Il sistema deve inoltre consentire la registrazione della restituzione, aggiornando la disponibilità del libro e mantenendo lo storico dei prestiti conclusi. |
| RF5 | **Consultazione dei prestiti** | Il sistema deve consentire agli utenti di consultare i propri prestiti attivi e lo storico dei prestiti conclusi, visualizzando le informazioni principali (libro, date, stato). |
| RF6 | **Gestione delle proroghe dei prestiti** | Il sistema deve consentire agli utenti di richiedere la proroga di un prestito attivo, verificando la disponibilità del libro e il rispetto delle eventuali limitazioni previste. |
| RF7 | **Consultazione delle biblioteche** | Il sistema deve consentire agli utenti di consultare l'elenco delle biblioteche aderenti, visualizzando le informazioni principali (nome, indirizzo, orari di apertura). |

*(Nella slide RF4 è evidenziato con un cerchio rosso.)*

---

## Pagina 23 — EasyLib – Use Case: Registrare un prestito (UC-04)

*(Nessun numero di pagina visibile nella slide)*

### Diagramma dei casi d'uso

> Diagramma: UML use case. Confine di sistema "EasyLib". Attore "Operatore biblioteca" (a sinistra) associato a due casi d'uso:
> - **UC-04 Registrare un prestito**, con tre relazioni «include» verso:
>   - "Verificare validità utente"
>   - "Verificare disponibilità libro"
>   - "Verificare limite prestiti attivi"
> - **UC-05 Registrare una restituzione**, con:
>   - «include» verso "Verificare dati prestito"
>   - «extend» da "Gestire penalità" verso UC-05, con condizione "[Restituzione in ritardo e penale applicabile]"

### Diagramma di attività (flusso principale e flussi alternativi)

> Diagramma: activity diagram con due swimlane, "Operatore biblioteca" e "Sistema EasyLib".
> 1. (Operatore) Nodo iniziale → "Inserisce i dati del prestito (utente, libro)"
> 2. (Sistema) "Verifica validità utente" → decisione "Utente valido?"
>    - No → (Operatore) "Visualizza messaggio di errore" → nodo finale
>    - Sì → (Sistema) "Verifica disponibilità libro" → decisione "Libro disponibile?"
>      - No → (Operatore) "Visualizza messaggio di errore" → nodo finale
>      - Sì → (Sistema) "Verifica limite prestiti attivi" → decisione "Limite rispettato?"
>        - No → (Operatore) "Visualizza messaggio di errore" → nodo finale
>        - Sì → (Sistema) "Registra il prestito" → "Conferma registrazione del prestito" → (Operatore) "Visualizza conferma del prestito" → nodo finale

### Descrizione testuale del caso d'uso

| Campo | Contenuto |
|---|---|
| ID | UC-04 |
| Nome | Registrare un prestito |
| Requisiti collegati | RF4 – Gestione dei prestiti |
| Attore principale | Operatore biblioteca |
| Attori secondari | Utente biblioteca |
| Obiettivo | Registrare il prestito di un libro a un utente. |
| Precondizioni | • L'operatore è autenticato nel sistema.<br>• L'utente è identificato nel sistema.<br>• Il libro è presente nel catalogo ed è disponibile. |
| Trigger | L'operatore inserisce i dati del prestito (identificativo utente e identificativo libro). |
| Flusso principale | 1. L'operatore inserisce i dati del prestito.<br>2. Il sistema verifica la validità dell'utente.<br>3. Il sistema verifica la disponibilità del libro.<br>4. Il sistema verifica il limite di prestiti attivi.<br>5. Il sistema registra il prestito.<br>6. Il sistema conferma la registrazione.<br>7. L'operatore visualizza la conferma del prestito. |
| Flussi alternativi | A1. Utente non valido → l'operatore visualizza un messaggio di errore e l'operazione termina.<br>A2. Libro non disponibile → l'operatore visualizza un messaggio di errore e l'operazione termina.<br>A3. Limite di prestiti raggiunto → l'operatore visualizza un messaggio di errore e l'operazione termina. |
| Postcondizioni | • Il prestito è registrato nel sistema.<br>• La disponibilità del libro è aggiornata. |

### Requisito funzionale di riferimento (estratto da D1)

**RF4 – Gestione dei prestiti**
Il sistema deve registrare le informazioni del prestito di un libro, aggiornare la disponibilità del libro e consentire successivamente la registrazione della restituzione.

---

## Pagina 24 — EasyLib – Dal Use Case alla User Story

*(Numero stampato nell'immagine della slide: 33)*

Derivazione di una User Story dal caso d'uso UC-04

### Caso d'uso di riferimento (dal diagramma dei casi d'uso)

> Diagramma: UML use case. Confine di sistema "EasyLib". Attore "Operatore biblioteca" associato a **UC-04 Registrare un prestito**, che ha tre relazioni «include» verso "Verificare validità utente", "Verificare disponibilità libro", "Verificare limite prestiti attivi".

### Descrizione sintetica del caso d'uso UC-04

| Campo | Contenuto |
|---|---|
| Nome | Registrare un prestito |
| Attore principale | Operatore biblioteca |
| Obiettivo | Registrare il prestito di un libro a un utente. |
| Precondizioni | • L'operatore è autenticato nel sistema.<br>• L'utente è identificato nel sistema.<br>• Il libro è presente nel catalogo ed è disponibile. |
| Flusso principale | 1. Verifica validità utente.<br>2. Verifica disponibilità libro.<br>3. Verifica limite prestiti attivi.<br>4. Registra il prestito.<br>5. Conferma registrazione del prestito. |
| Flussi alternativi | A1. Utente non valido.<br>A2. Libro non disponibile.<br>A3. Limite di prestiti raggiunto. |
| Postcondizioni | • Il prestito è registrato nel sistema.<br>• La disponibilità del libro è aggiornata. |

↓

### User Story derivata da UC-04

**User Story**

**Come** operatore della biblioteca,
**voglio** registrare il prestito di un libro a un utente,
**in modo da** gestire correttamente la concessione dei libri della biblioteca.

**Collegamento con il requisito funzionale**

**RF4 – Gestione dei prestiti**
Il sistema deve registrare le informazioni del prestito di un libro, aggiornare la disponibilità del libro e consentire successivamente la registrazione della restituzione.

---

## Pagina 25 — EasyLib – Scomposizione della User Story

La User Story iniziale è troppo ampia: viene suddivisa in due User Story più piccole

### Perché scomporla?

La User Story iniziale comprende attività diverse:

- identificare e verificare utente e libro
- registrare il prestito
- aggiornare la disponibilità del libro

Una sola User Story sarebbe troppo grande da sviluppare e verificare.

### Dalla User Story iniziale a due User Story

> Diagramma: "US (iniziale) — Registrare un prestito" si dirama con due frecce in "User Story 1 — Identificazione e verifica" e "User Story 2 — Registrazione del prestito".

### Le due User Story derivate

**User Story 1 – Identificazione e verifica**

Come **operatore della biblioteca, voglio** identificare l'utente e il libro e verificarne le condizioni di prestito, in modo da poter procedere alla registrazione del prestito.

Criteri di accettazione (esempi)

- Identificare l'utente e il libro tramite i rispettivi codici.
- Verificare che l'utente sia registrato e il libro sia disponibile.
- Gestire eventuali errori o casi non validi.

**User Story 2 – Registrazione del prestito**

Come **operatore della biblioteca, voglio** registrare il prestito di un libro a un utente, in modo da conservare le informazioni del prestito e aggiornare la disponibilità del libro.

Criteri di accettazione (esempi)

- Registrare il prestito con utente, libro, data di inizio e data prevista.
- Aggiornare la disponibilità del libro.
- Confermare l'operazione e gestire eventuali errori.

---

## Pagina 26 — EasyLib – Due User Story per il processo di prestito

La User Story iniziale viene scomposta in due User Story più piccole, ciascuna con obiettivi e criteri chiari.

### User Story 1 – Identificazione e verifica del prestito

Come operatore della biblioteca, **voglio** identificare l'utente e il libro e verificarne le condizioni di prestito, in modo da procedere alla registrazione del prestito corretto.

**Descrizione**

Questa user story riguarda la fase iniziale del processo di prestito. L'operatore della biblioteca identifica l'utente e il libro e verifica che siano soddisfatte tutte le condizioni necessarie (utente registrato, libro disponibile) per procedere con la registrazione del prestito.

**Criteri di accettazione**

| ID | Criterio |
|---|---|
| AC-US01-01 | L'operatore può identificare l'utente tramite il suo codice identificativo. |
| AC-US01-02 | L'operatore può identificare il libro tramite il suo ISBN. |
| AC-US01-03 | Il sistema verifica che l'utente sia registrato e che il libro sia disponibile. |

**Valore per l'utente**

Riduce il rischio di errori e garantisce che il prestito possa essere effettuato solo se l'utente è valido e il libro è disponibile.

**Principali task**

1. Identificare l'utente.
2. Identificare il libro.
3. Verificare condizioni e disponibilità.
4. Gestire errori e casi non validi.

**Stima:** 3 SP

### User Story 2 – Registrazione del prestito

Come operatore della biblioteca, **voglio** registrare il prestito di un libro a un utente, in modo da conservare le informazioni del prestito e aggiornare la disponibilità del libro.

**Descrizione**

Questa user story riguarda la fase di registrazione del prestito. L'operatore registra il prestito associando l'utente e il libro precedentemente identificati e verificati, inserendo la data di inizio e la data prevista di restituzione. Il sistema aggiorna la disponibilità del libro e conferma l'operazione.

**Criteri di accettazione**

| ID | Criterio |
|---|---|
| AC-US02-01 | Il sistema consente di registrare il prestito con utente, libro, data di inizio e data prevista di restituzione. |
| AC-US02-02 | Dopo la registrazione, il sistema aggiorna la disponibilità del libro. |
| AC-US02-03 | Il sistema conferma l'operazione e fornisce un messaggio di esito. |

**Valore per l'utente**

Permette di avere una registrazione del prestito completa e aggiornata, mantenendo coerenti le informazioni sui volumi disponibili.

**Principali task**

1. Registrare il prestito (utente, libro, date).
2. Aggiornare la disponibilità del libro.
3. Confermare l'operazione.
4. Gestire eventuali errori.

**Stima:** 5 SP

---

## Pagina 27 — EasyLib – Valutazione del valore delle User Story

Le due User Story per la gestione del prestito, con descrizione, valore e motivazione

| User Story | Descrizione sintetica | Valore | Motivazione |
|---|---|---|---|
| US1 – Identificazione e verifica del prestito | Identificare l'utente e il libro, verificando le condizioni necessarie per procedere al prestito. | ★★★★☆ (Alta) | È un passaggio necessario per registrare correttamente un prestito. Riduce il rischio di errori e impedisce prestiti a utenti non autorizzati o di libri non disponibili. |
| US2 – Registrazione del prestito | Registrare il prestito associando utente, libro e date, aggiornando automaticamente la disponibilità del libro. | ★★★★★ (Molto alta) | Realizza la funzionalità principale della gestione dei prestiti di EasyLib. Permette alla biblioteca di tracciare i prestiti e mantenere aggiornate le informazioni sulla disponibilità dei libri. |

**Totale di 8 SP :** rappresenta un **incremento di prodotto realistico per 1 sprint**
