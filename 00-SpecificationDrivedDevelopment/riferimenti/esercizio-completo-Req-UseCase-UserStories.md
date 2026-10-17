# Esercizio completo — Requisito, use case, user stories

**Fonti (PDF):**
- `esercizio-completo-Req-UseCase-UserStories-1-3.pdf` (pagine 1-3)
- `esercizio-completo-Req-UseCase-UserStories-4-10.pdf` (pagine 4-10)
- `esercizio-completo-Req-UseCase-UserStories-11-16.pdf` (pagine 11-16)

**Footer / autore:** Ingegneria del Software 2026- Prof. Paolo Giorgini

---

## Pagina 1 — Esercizio completo

# Esercizio completo

Requisito, use case, user stories

---

## Pagina 2 — RF6 – Gestione delle proroghe dei prestiti

**RF6 – Gestione delle proroghe dei prestiti** *(logo EasyLib)*

> Il sistema deve consentire la **gestione delle proroghe dei prestiti** in corso.
>
> Un utente deve poter **richiedere l'estensione della scadenza** di un proprio prestito.
>
> La possibilità di concedere la proroga deve essere determinata sulla base delle **regole di prestito** stabilite dalla biblioteca, considerando le **condizioni** associate al prestito e al libro interessato, compresa l'eventuale presenza di **prenotazioni incompatibili** con la proroga.
>
> In caso di concessione, il sistema deve **aggiornare la data di scadenza** del prestito e rendere disponibile all'utente la **nuova scadenza**.

*EasyLib – Analisi dei requisiti — 1*

---

## Pagina 3 — EasyLib – Dagli RF agli Use Case

**EasyLib – Dagli RF agli Use Case** *(logo EasyLib)*

**Requisito di riferimento:**
RF6 – Gestione delle proroghe dei prestiti

### Esercizio

A partire dal requisito RF6, svolgete le seguenti attività:

1. Identificate gli **attori** che interagiscono con EasyLib.
2. Individuate gli **obiettivi** che ciascun attore vuole raggiungere.
3. Identificate i principali **Use Case**.
4. Disegnate il **Use Case Diagram UML**, rappresentando gli attori, gli Use Case e il confine del sistema.

**? Domanda guida**
Chi interagisce con il sistema e per raggiungere quale obiettivo?

*EasyLib – Analisi dei requisiti — 2*

---

## Pagina 4 — EasyLib – Soluzione: Attori e Use Case

**EasyLib – Soluzione: Attori e Use Case** *(logo EasyLib)*

### 1. Attori identificati

| Attore | Ruolo | Obiettivo |
|---|---|---|
| Utente biblioteca | Utente registrato che ha un prestito in corso | Richiedere l'estensione della scadenza di un proprio prestito. |
| Operatore biblioteca | Personale autorizzato a gestire i prestiti | Valutare e gestire le richieste di proroga presentate dagli utenti. |

### 2. Use Case individuati

| ID | Use Case | Attore principale | Obiettivo |
|---|---|---|---|
| UC-09 | Richiedere una proroga | Utente biblioteca | Inviare una richiesta di proroga per un prestito attivo. |
| UC-06 | Gestire una proroga | Operatore biblioteca | Valutare la richiesta e concedere o rifiutare la proroga. |

### 3. Use Case Diagram

> Diagramma: Use Case Diagram con confine di sistema "EasyLib". All'esterno, a sinistra, l'attore **Utente biblioteca** è associato allo use case **UC-09 Richiedere una proroga**; a destra, l'attore **Operatore biblioteca** è associato allo use case **UC-06 Gestire una proroga**. Nessuna relazione tra i due use case.

*EasyLib – Analisi dei requisiti — 3*

---

## Pagina 5 — UC-09 – Richiedere una proroga (Use Case Diagram)

**UC-09 – Richiedere una proroga**
Use Case Diagram

> Diagramma: confine di sistema "EasyLib". L'attore **Utente biblioteca** (esterno, a sinistra) è associato a **UC-09 Richiedere una proroga**. Relazioni:
> - UC-09 —«include»→ **Identificare il prestito**
> - **Visualizzare dettagli prestito** —«extend»→ **Identificare il prestito**
> - UC-09 —«include»→ **Verificare concedibilità proroga**
>   - Verificare concedibilità proroga —«include»→ **Verificare assenza di prenotazioni incompatibili**
>   - Verificare concedibilità proroga —«include»→ **Verificare regole di prestito**
> - UC-09 —«include»→ **Registrare la richiesta di proroga**
> - UC-09 —«include»→ **Visualizzare esito richiesta**

---

## Pagina 6 — UC-06 – Gestire una proroga (Use Case Diagram)

**UC-06 – Gestire una proroga**
Use Case Diagram

> Diagramma: confine di sistema "EasyLib". L'attore **Operatore biblioteca** (esterno, a destra) è associato a **UC-06 Gestire una proroga**. Relazioni:
> - UC-06 —«include»→ **Visualizzare dettagli richiesta e prestito**
> - UC-06 —«include»→ **Valutare la richiesta**
>   - **Concedere la proroga** —«extend»→ Valutare la richiesta
>   - **Rifiutare la proroga** —«extend»→ Valutare la richiesta
> - UC-06 —«include»→ **Registrare l'esito della proroga**
>   - Registrare l'esito della proroga —«include»→ **Aggiornare data di scadenza del prestito**
>   - Registrare l'esito della proroga —«include»→ **Notificare l'utente**

---

## Pagina 7 — EasyLib – Descrizione testuale degli Use Case (RF6)

**EasyLib – Descrizione testuale degli Use Case (RF6)** *(logo EasyLib)*

### UC-09 – Richiedere una proroga

**Attore principale:** Utente biblioteca

| Campo | Valore |
|---|---|
| Obiettivo | Richiedere l'estensione della scadenza di un proprio prestito. |
| Precondizioni | Utente autenticato e almeno un prestito attivo. |
| Postcondizioni | La richiesta di proroga è registrata ed è disponibile per la valutazione dell'operatore. |
| Use Case inclusi | Identificare il prestito, Registrare la richiesta di proroga. |
| Use Case estesi | Visualizzare dettagli prestito, Visualizzare esito richiesta. |

**Flusso principale**

| # | Attore | Azione |
|---|---|---|
| 1 | Utente | Accede alla sezione dei propri prestiti. |
| 2 | Sistema | Visualizza l'elenco dei prestiti dell'utente. |
| 3 | Utente | Seleziona un prestito attivo. |
| 4 | Sistema | Visualizza i dettagli del prestito, inclusa la scadenza corrente. |
| 5 | Utente | Richiede la proroga del prestito selezionato. |
| 6 | Sistema | Registra la richiesta di proroga associandola al prestito. |
| 7 | Sistema | Conferma l'avvenuta registrazione della richiesta e ne rende consultabile lo stato. |

**Flussi alternativi**
- **A1 – Nessun prestito attivo**: Il sistema non individua prestiti attivi e informa l'utente. Lo Use Case termina.
- **A2 – Richiesta già presente**: Esiste già una richiesta di proroga in attesa di valutazione. Il sistema informa l'utente e non registra una nuova richiesta.

**Eccezioni**
- **E1 – Errore durante la registrazione**: Il sistema non riesce a registrare la richiesta. Viene mostrato un messaggio di errore. L'utente può riprovare successivamente.

### UC-06 – Gestire una proroga

**Attore principale:** Operatore biblioteca

| Campo | Valore |
|---|---|
| Obiettivo | Valutare una richiesta di proroga e concederla o rifiutarla. |
| Precondizioni | Operatore autenticato ed esiste una richiesta di proroga da valutare. |
| Postcondizioni | La richiesta è stata valutata, l'esito è registrato e l'utente può conoscerlo. Se concessa, la scadenza del prestito è aggiornata. |
| Use Case inclusi | Visualizzare dettagli richiesta e prestito, Valutare la richiesta, Registrare l'esito della proroga, Aggiornare data di scadenza (se concessa), Notificare l'utente. |
| Use Case estesi | — |

**Flusso principale** (concessione della proroga)

| # | Attore | Azione |
|---|---|---|
| 1 | Operatore | Accede alla sezione delle richieste di proroga. |
| 2 | Sistema | Visualizza le richieste in attesa di valutazione. |
| 3 | Operatore | Seleziona una richiesta di proroga. |
| 4 | Sistema | Visualizza i dettagli della richiesta e del prestito associato. |
| 5 | Sistema | Verifica le condizioni applicabili al prestito. |
| 6 | Sistema | Comunica che la proroga può essere concessa. |
| 7 | Operatore | Conferma la concessione della proroga. |
| 8 | Sistema | Calcola la nuova scadenza secondo le regole della biblioteca. |
| 9 | Sistema | Aggiorna la scadenza del prestito e registra l'esito della richiesta. |
| 10 | Sistema | Conferma l'operazione all'operatore e rende disponibile all'utente la nuova scadenza. |

**Flussi alternativi**
- **A1 – Proroga non concedibile**: Il sistema informa l'operatore delle condizioni non soddisfatte e registra il rifiuto della richiesta.
- **A2 – Nessuna richiesta da valutare**: Il sistema non individua richieste in attesa e informa l'operatore. Lo Use Case termina.

**Eccezioni**
- **E1 – Prestito non più attivo**: Il sistema segnala l'impossibilità di concedere la proroga.
- **E2 – Errore durante l'aggiornamento**: Il sistema non riesce a completare l'aggiornamento. Viene mostrato un messaggio di errore.

*EasyLib – Analisi dei requisiti — 5*

---

## Pagina 8 — UC-09 – Richiedere una proroga (Sequence Diagram)

**UC-09 – Richiedere una proroga** *(logo EasyLib)*

> Diagramma: Sequence Diagram con due lifeline: **Utente biblioteca** (attore) e **Sistema EasyLib**. Messaggi (frecce piene = richieste, tratteggiate = risposte):
> 1. Utente → Sistema: "1. Richiede l'elenco dei propri prestiti"
> 2. Sistema ⇢ Utente: "2. Elenco dei prestiti dell'utente"
>
> **Frammento `alt`**:
> - `[Prestiti presenti]`: (nessun messaggio, si prosegue)
> - `[Nessun prestito attivo]`: Sistema ⇢ Utente: "2b. Messaggio: "Nessun prestito attivo""
>
> 3. Utente → Sistema: "3. Seleziona un prestito"
> 4. Sistema ⇢ Utente: "4. Dettagli del prestito (inclusa la scadenza corrente)"
> 5. Utente → Sistema: "5. Richiede la proroga del prestito selezionato"
>
> **Frammento `alt`**:
> - `[Richiesta registrata]`: Utente → Sistema: "6. Registra la richiesta di proroga"; Sistema ⇢ Utente: "7. Conferma registrazione e stato della richiesta"
> - `[Richiesta già presente]`: Sistema ⇢ Utente: "6b. Messaggio: "Esiste già una richiesta di proroga in attesa di valutazione""
> - `[Errore]`: Sistema ⇢ Utente: "6c. Messaggio di errore"

---

## Pagina 9 — UC-09 – Richiedere una proroga (Activity Diagram)

**UC-09 – Richiedere una proroga**
Activity Diagram

> Diagramma: Activity Diagram con due swimlane: **Utente biblioteca** (sinistra) e **Sistema EasyLib** (destra).
> - [Utente] Nodo iniziale → **Accede alla sezione dei propri prestiti** → [Sistema] **Recupera elenco prestiti dell'utente**
> - [Sistema] Decisione **Prestiti attivi presenti?**
>   - [No] → **Visualizza messaggio "Nessun prestito attivo"** → nodo finale
>   - [Sì] → **Visualizza elenco prestiti attivi**
> - [Utente] **Seleziona un prestito attivo** → [Sistema] **Recupera dettagli del prestito** → **Visualizza dettagli del prestito (inclusa la scadenza corrente)**
> - [Utente] **Richiede la proroga del prestito selezionato** → [Sistema] **Verifica presenza di richieste di proroga in attesa**
> - [Sistema] Decisione **Esiste già una richiesta in attesa?**
>   - [Sì] → **Visualizza messaggio "Esiste già una richiesta di proroga in attesa"** → nodo finale
>   - [No] → **Registra la richiesta di proroga**
> - [Sistema] Decisione **Registrazione riuscita?**
>   - [No] → **Visualizza messaggio di errore** → nodo finale
>   - [Sì] → **Conferma registrazione e mostra lo stato della richiesta** → nodo finale

---

## Pagina 10 — EasyLib – Dagli Use Case alle User Story

**EasyLib – Dagli Use Case alle User Story** *(logo EasyLib)*

**Requisito di riferimento**
RF6 – Gestione delle proroghe dei prestiti

**Use Case analizzati**
- **UC-09** – Richiedere una proroga (Utente biblioteca)
- **UC-06** – Gestire una proroga (Operatore biblioteca)

### Esercizio

A partire dal requisito RF6 e dagli Use Case analizzati, completate le seguenti attività.

1. **Identificare le User Story** — Individuate due User Story, specificando per ciascuna l'attore, l'obiettivo e il valore atteso.
2. **Scrivere le User Story** — Scrivete le User Story utilizzando il formato: **Come [ruolo], voglio [obiettivo], in modo da [valore].**
3. **Definire gli Acceptance Criteria** — Per ciascuna User Story definite gli Acceptance Criteria, specificando le condizioni verificabili per considerarla completata.
4. **Stimare gli Story Points** — Stimate gli Story Points (SP) di ciascuna User Story, considerando quantità di lavoro, complessità, rischi e incertezza.
5. **Assegnare un valore** — Assegnate un valore (da 1 a 5 stelle) a ciascuna User Story, motivando il beneficio per l'utente o per la biblioteca.

**? Domanda guida**
Come possiamo trasformare gli obiettivi descritti negli Use Case in incrementi di prodotto che producano valore per gli utenti?

---

## Pagina 11 — EasyLib – Dagli Use Case alle User Story (soluzione)

**EasyLib – Dagli Use Case alle User Story** *(logo EasyLib)*

**Requisito di riferimento**
RF6 – Gestione delle proroghe dei prestiti

**Obiettivo generale (RF6)**
Consentire agli utenti di richiedere proroghe dei prestiti e agli operatori di gestire le richieste, rendendo disponibile la nuova scadenza all'utente.

### Use Case

- **UC-09 – Richiedere una proroga**
  Attore: Utente biblioteca
  L'utente richiede la proroga di un proprio prestito attivo.
- **UC-06 – Gestire una proroga**
  Attore: Operatore biblioteca
  L'operatore valuta e gestisce le richieste di proroga.

### Obiettivi e valore

- (UC-09) **Obiettivo dell'utente**: Richiedere l'estensione di un prestito attivo.
  **Valore atteso**: Poter utilizzare il libro più a lungo senza doverlo restituire e prendere nuovamente in prestito.
- (UC-06) **Obiettivo dell'operatore**: Valutare e gestire le richieste di proroga.
  **Valore atteso**: Applicare correttamente le regole della biblioteca e mantenere aggiornate le scadenze.

### User Story individuate

| ID | User Story | Attore | Testo |
|---|---|---|---|
| US-01 | Richiedere una proroga | Utente | Come utente della biblioteca, voglio richiedere la proroga di un mio prestito attivo, in modo da poter continuare a utilizzare il libro oltre la scadenza prevista, se la richiesta viene approvata. |
| US-02 | Valutare una richiesta di proroga | Operatore | Come operatore della biblioteca, voglio valutare le richieste di proroga verificando le condizioni applicabili, in modo da concedere le proroghe consentite dalle regole della biblioteca. |
| US-03 | Consultare l'esito della proroga | Utente | Come utente della biblioteca, voglio consultare lo stato e l'esito delle mie richieste di proroga, in modo da sapere se posso trattenere il libro più a lungo e conoscere la nuova scadenza. |

> Diagramma: frecce di tracciamento da sinistra a destra (Use Case → Obiettivi e valore → User Story). UC-09 → blocco obiettivi dell'utente; UC-06 → blocco obiettivi dell'operatore. Dal blocco dell'utente una freccia va a US-01; un connettore che unisce il blocco dell'utente e quello dell'operatore porta a US-02; dal blocco dell'operatore una freccia va a US-03.

**ℹ**
- Uno Use Case può dare origine a più User Story.
- Le User Story rappresentano incrementi di prodotto con un valore identificabile per gli attori.

---

## Pagina 12 — EasyLib – US-01: Richiedere una proroga

**EasyLib – US-01: Richiedere una proroga**

| Campo | Valore |
|---|---|
| **ID** | US-01 |
| **User Story** | Come utente della biblioteca, voglio richiedere la proroga di un mio prestito attivo, in modo da poter continuare a utilizzare il libro oltre la scadenza prevista, se la richiesta viene approvata. |
| **Attore** | Utente biblioteca |
| **Use Case di riferimento** | UC-09 – Richiedere una proroga |

**Descrizione**
L'utente seleziona uno dei propri prestiti attivi e presenta una richiesta di proroga. Il sistema verifica che il prestito sia idoneo alla proroga, registra la richiesta e ne conferma la ricezione. L'utente può successivamente consultare lo stato della richiesta (l'esito finale è gestito dalla US-03).

**Flusso principale**
1. L'utente visualizza i propri prestiti attivi
2. L'utente seleziona un prestito e richiede la proroga
3. Il sistema verifica la possibilità di proroga
4. Il sistema registra la richiesta e conferma la ricezione
5. L'utente visualizza la conferma e può consultare lo stato della richiesta (US-03)

**Acceptance Criteria**

| ID | Criterio di accettazione |
|---|---|
| AC-US01-01 | L'utente può visualizzare l'elenco dei propri prestiti attivi. |
| AC-US01-02 | L'utente può selezionare un prestito idoneo alla proroga. |
| AC-US01-03 | Il sistema consente di presentare una richiesta di proroga per il prestito selezionato. |
| AC-US01-04 | Il sistema verifica che il prestito sia idoneo alla proroga (es. non scaduto, non già in proroga, eventuali vincoli). |
| AC-US01-05 | Il sistema registra la richiesta di proroga associandola al prestito e alla data di richiesta. |
| AC-US01-06 | Il sistema conferma all'utente l'avvenuta registrazione della richiesta. |
| AC-US01-07 | In caso di errore (es. prestito non idoneo), il sistema segnala il motivo e non registra la richiesta. |

**Stima e priorità** — Story Points: **3 SP**

**Valore** — ★★★★★ Molto alto

**⚠ Note e aspetti da chiarire**
- Le condizioni di idoneità alla proroga (es. numero massimo, durata, presenza di prenotazioni) devono essere definite nel D1.
- La modalità e i tempi di notifica all'utente (es. email) possono essere specificati nei requisiti.

---

## Pagina 13 — EasyLib – US-02: Valutare una richiesta di proroga

**EasyLib – US-02: Valutare una richiesta di proroga**

| Campo | Valore |
|---|---|
| **ID** | US-02 |
| **User Story** | Come operatore della biblioteca, voglio valutare le richieste di proroga verificando le condizioni applicabili, in modo da concedere le proroghe consentite dalle regole della biblioteca. |
| **Attore** | Operatore biblioteca |
| **Use Case di riferimento** | UC-06 – Gestire una proroga |

**Descrizione**
L'operatore consulta le richieste di proroga in attesa, verifica le condizioni applicabili (es. regole della biblioteca, eventuali prenotazioni sul libro) e registra la decisione. Se la proroga viene concessa, il sistema aggiorna la scadenza del prestito e rende l'esito disponibile all'utente.

**Flusso principale**
1. L'operatore visualizza le richieste di proroga in attesa
2. Il sistema mostra i dettagli della richiesta
3. L'operatore verifica le condizioni applicabili
4. L'operatore registra la decisione (concedi o rifiuta)
5. Il sistema aggiorna la scadenza (se concessa) e registra l'esito

**Acceptance Criteria**

| ID | Criterio di accettazione |
|---|---|
| AC-US02-01 | L'operatore può consultare l'elenco delle richieste di proroga in attesa di valutazione. |
| AC-US02-02 | Il sistema rende disponibili le informazioni necessarie per valutare la richiesta (prestito, utente, scadenza, eventuali prenotazioni). |
| AC-US02-03 | Il sistema verifica le condizioni applicabili per la concessione della proroga. |
| AC-US02-04 | L'operatore può registrare la concessione o il rifiuto della proroga. |
| AC-US02-05 | Se la proroga viene concessa, il sistema aggiorna la scadenza del prestito secondo le regole della biblioteca. |
| AC-US02-06 | Il sistema registra l'esito della valutazione e lo rende disponibile all'utente. |

**Stima e priorità** — Story Points: **5 SP**

**Valore** — ★★★★★ Molto alto

**⚠ Note e aspetti da chiarire**
- Le regole per la concedibilità della proroga (es. numero massimo, durata, presenza di prenotazioni) devono essere definite nel D1.
- La modalità di calcolo della nuova scadenza (es. +30 giorni) deve essere specificata nei requisiti.

---

## Pagina 14 — EasyLib – US-03: Consultare l'esito della proroga

**EasyLib – US-03: Consultare l'esito della proroga**

| Campo | Valore |
|---|---|
| **ID** | US-03 |
| **User Story** | Come utente della biblioteca, voglio consultare lo stato e l'esito delle mie richieste di proroga, in modo da sapere se posso trattenere il libro più a lungo e conoscere la nuova scadenza del prestito. |
| **Attore** | Utente biblioteca |
| **Use Case di riferimento** | UC-09 – Richiedere una proroga<br>UC-06 – Gestire una proroga |

**Descrizione**
L'utente può visualizzare l'elenco delle proprie richieste di proroga e consultarne lo stato. Per ogni richiesta il sistema mostra l'esito (in attesa, concessa, rifiutata) e, se concessa, la nuova data di scadenza del prestito.

**Flusso principale**
1. L'utente accede alla sezione delle proprie richieste di proroga
2. Il sistema mostra l'elenco delle richieste con lo stato
3. L'utente seleziona una richiesta per visualizzarne i dettagli
4. Il sistema mostra le informazioni della richiesta (inclusa la nuova scadenza se concessa)

**Acceptance Criteria**

| ID | Criterio di accettazione |
|---|---|
| AC-US03-01 | L'utente può visualizzare l'elenco delle proprie richieste di proroga. |
| AC-US03-02 | Il sistema mostra per ogni richiesta lo stato (in attesa, concessa, rifiutata). |
| AC-US03-03 | Per una richiesta concessa, il sistema mostra la nuova data di scadenza del prestito. |
| AC-US03-04 | Per una richiesta rifiutata, il sistema mostra il motivo del rifiuto (se disponibile). |
| AC-US03-05 | L'utente può selezionare una richiesta per visualizzarne i dettagli (prestito, date, eventuali note). |
| AC-US03-06 | L'elenco è ordinato per data di richiesta (più recenti per prime). |

**Stima e priorità** — Story Points: **2 SP**

**Valore** — ★★★★☆ Alto

**⚠ Note e aspetti da chiarire**
- Il livello di dettaglio delle informazioni mostrate (es. motivo del rifiuto, storico modifiche) deve essere definito nel D1.
- È necessario definire il periodo di mantenimento delle richieste consultabili dall'utente (es. solo richieste degli ultimi 12 mesi).

---

## Pagina 15 — EasyLib – Le tre User Story: stima e valore

**EasyLib – Le tre User Story: stima e valore**

| ID | User Story | Attore | Use Case di riferimento | Story Points (SP) | Valore | Motivazione |
|---|---|---|---|---|---|---|
| US-01 | **Richiedere una proroga** — Come utente della biblioteca, voglio richiedere la proroga di un mio prestito attivo, in modo da poter continuare a utilizzare il libro oltre la scadenza prevista, se la richiesta viene approvata. | Utente biblioteca | UC-09 Richiedere una proroga | 3 SP | ★★★★★ Molto alto | Permette agli utenti di presentare autonomamente una richiesta di proroga, senza recarsi in biblioteca. |
| US-02 | **Valutare una richiesta di proroga** — Come operatore della biblioteca, voglio valutare le richieste di proroga verificando le condizioni applicabili, in modo da concedere le proroghe consentite dalle regole della biblioteca. | Operatore biblioteca | UC-06 Gestire una proroga | 5 SP | ★★★★★ Molto alto | Consente di applicare le regole della biblioteca, gestire correttamente le richieste e mantenere aggiornate le scadenze. |
| US-03 | **Consultare l'esito della proroga** — Come utente della biblioteca, voglio consultare lo stato e l'esito delle mie richieste di proroga, in modo da sapere se posso trattenere il libro più a lungo e conoscere la nuova scadenza. | Utente biblioteca | UC-09 Richiedere una proroga (consultazione esito) | 2 SP | ★★★★☆ Alto | Permette agli utenti di conoscere l'esito della richiesta e l'eventuale nuova scadenza del prestito. |

**Σ Totale stimato: 10 SP**
Le stime sono indicative e devono essere discusse dal team (es. Planning Poker o Relative Sizing).

**? Domanda**
Le tre User Story possono far parte dello stesso Sprint?
- Quali criteri considerate nella scelta?
- Come influenzano le dipendenze tra le User Story?
- Qual è la capacità stimata del team per lo Sprint?

---

## Pagina 16 — EasyLib – Sprint Planning: quali User Story nello Sprint?

**EasyLib – Sprint Planning: quali User Story nello Sprint?**

**Contesto**
- Sprint duration: 2 settimane
- Capacità stimata del team: **8 SP**
- User Story disponibili (da RF6): **10 SP**

**Obiettivo dello Sprint**
Realizzare un incremento di prodotto che fornisca valore agli utenti e sia utilizzabile e verificabile al termine dello Sprint.

### User Story disponibili

| ID | User Story (breve) | SP | Valore |
|---|---|---|---|
| US-01 | **Richiedere una proroga** — L'utente può presentare una richiesta di proroga per un proprio prestito. | 3 | ★★★★★ Molto alto |
| US-02 | **Valutare una richiesta di proroga** — L'operatore può valutare le richieste e concedere o rifiutare la proroga. | 5 | ★★★★★ Molto alto |
| US-03 | **Consultare l'esito della proroga** — L'utente può consultare lo stato e l'esito delle proprie richieste di proroga. | 2 | ★★★★☆ Alto |

### Possibili combinazioni

| Alternativa | User Story selezionate | Totale SP | Valutazione |
|---|---|---|---|
| A | US-01 + US-02 | 8 | • Consente di richiedere e valutare una proroga<br>• Incremento utilizzabile e verificabile |
| B | US-01 + US-03 | 5 | • Funzionalità parziale<br>• La consultazione dell'esito è poco utile senza la valutazione |
| C | US-02 + US-03 | 7 | • Consente di valutare e consultare<br>• Richiede richieste già disponibili (US-01) |
| D | US-01 + US-02 + US-03 | 10 | • Supera la capacità stimata del team (8 SP) |

**? Domanda**
Quali User Story inserireste nello Sprint Backlog?
- Quali criteri utilizzate per la scelta?
- Come considerate valore, dipendenze e capacità del team?
- Quale sarà l'incremento ottenuto al termine dello Sprint?
- RF6 sarà completamente soddisfatto?

**✓ Soluzione proposta**
**US-01 + US-02 (8 SP)**
- Rispetta la capacità del team.
- Fornisce un incremento utilizzabile: richiesta e valutazione delle proroghe.
- US-03 può essere pianificata nello Sprint successivo.

**ℹ Nota importante**
Con questa selezione RF6 non è ancora completamente soddisfatto, poiché manca la consultazione dell'esito (US-03), ma viene comunque realizzato un incremento di valore, coerente con l'obiettivo dello Sprint.
