# Ingegneria del Software — Metodologie Agile

- **Fonte:** `7-Agile.pdf`
- **Numero di pagine:** 34
- **Autore:** Prof. Paolo Giorgini — A.A. 2026/2027
- **Footer:** Ingegneria del Software 2026 - Prof. Paolo Giorgini (con numero di pagina)

---

## Pagina 1 — Ingegneria del Software: Metodologie Agile

**Ingegneria del Software**

Metodologie Agile

Prof. Paolo Giorgini
A.A. 2026/2027

## Pagina 2 — Metodologie Agile

- In IS, per **metodologia agile** o **metodo agile** si intende un particolare metodo per lo sviluppo del software che coinvolge quanto più possibile il committente, ottenendo in tal modo una **elevata reattività alle sue richieste**
- Esistono un certo numero metodologie Agile
  - Agile alliance, organizzazione no-profit creata allo scopo di diffonderle
  - http://www.agilealliance.org

(Logo: Agile Alliance)

## Pagina 3 — Manifesto

Vengono privilegiati i seguenti elementi:
- Gli **individui e le loro interazioni** rispetto ai processi ed agli strumenti
- **Software funzionante** rispetto ad un’ampia documentazione
- La **collaborazione** col cliente rispetto alla negoziazione dei contratti
- La pronta **risposta ai cambiamenti** rispetto all’esecuzione di un piano

Anche se viene attribuito un valore agli elementi riportati a destra, sono più importanti quelli a sinistra

<u>Consegne incrementali</u> e frequenti di software

## Pagina 4 — Agile Manifesto: 12 principles

> Diagramma: immagine “12 Principles” con post-it colorati, ciascuno con un principio:
> - Customer Satisfaction
> - Embracing Changes
> - Speed delivery
> - Collaboration
> - Empowerment
> - Effective Communication
> - Good Metrics
> - Steadiness
> - Operational Excellence
> - Simplicity
> - Self-Organization
> - Continuous Improvements

## Pagina 5 — Top five reasons for adopting agile

Respondents were asked why their teams adopted Agile methodologies and techniques. These were the most responded benefits:

| Motivazione | % |
|---|---|
| Accelerate software delivery | 71% |
| Enhance ability to manage changing priorities | 63% |
| Increase productivity | 51% |
| Improve business / IT alignment | 47% |
| Enhance software quality | 42% |

## Pagina 6 — Agile vs Waterfall

| | Successful | Challenged | Failed |
|---|---|---|---|
| Agile | 42% | 49% | 9% |
| Traditional | 14% | 57% | 29% |

*Source: Standish (2020) CHAOS Report*

## Pagina 7 — Le cinque tecniche Agile più utilizzate

Queste sono le cinque tecniche più utilizzate per aiutare i team ad applicare i dodici principi dell’Agile.

| Tecnica | % |
|---|---|
| Daily Standup | 85% |
| Retrospectives | 81% |
| Sprint / Iteration Planning | 79% |
| Short Iterations | 64% |
| Kanban | 63% |

## Pagina 8 — Top Five Agile Methodologies

> Diagramma: grafico a torta.

| Metodologia | % |
|---|---|
| Scrum | 58% |
| ScrumBan | 10% |
| Other/hybrid/multiple methodologies | 9% |
| Scrum/XP hybrid | 8% |
| Kanban | 7% |
| Iterative development | 4% |
| Don’t know | 3% |
| Lean startup | 1% |
| Extreme programming (XP) | 1% |

## Pagina 9 — Agile vs IS

**L’agilità non è improvvisazione**
Non si deve pensare erroneamente che l’agilità dia la licenza di improvvisare le soluzioni.
È necessario un **processo** ed è fondamentale la **disciplina**.

**Non è una scelta tra Agile e Ingegneria del Software**
Non si tratta di scegliere tra agilità e ingegneria del software ma di definire un **approccio agile all’ingegneria del software**.

**L’agilità si basa sui concetti dell’Ingegneria del Software**
Molti concetti della metodologia agile non sono altro che **adattamenti** dei migliori concetti di ingegneria del software.

(Illustrazioni: divieto di improvvisazione; puzzle “Agile” + “IS”; libri “Principi”, “Metodi”, “Best practice”.)

## Pagina 10 — Processi agile (1)

**Iterativo e incrementale**
L’applicazione viene sviluppata in piccole iterazioni (es. 2 settimane).
Ogni iterazione rilascia un piccolo incremento funzionante che aggiunge nuove funzionalità.

**Esempio:** sviluppo di una app di food delivery

| Iterazione | Funzionalità | Risultato |
|---|---|---|
| 1ª iterazione | Login e registrazione | Gli utenti possono creare un profilo e accedere. |
| 2ª iterazione | Visualizzazione menu | Gli utenti possono vedere i ristoranti e i piatti disponibili. |
| 3ª iterazione | Carrello e ordine | Gli utenti possono selezionare i piatti e completare un ordine. |
| 4ª iterazione | Pagamento e tracciamento | Gli utenti possono pagare online e tracciare la consegna. |

> Diagramma: quattro mockup di smartphone collegati da frecce (schermata di registrazione; lista “Ristoranti” con Pizzeria Rossi, Burger House, Sushi Zen; “Carrello” con Pizza Margherita € 8,00, Insalata € 5,00, Totale € 13,00, “Completa ordine”; “Ordine in consegna” con stati Ordine confermato, In preparazione, In consegna, Consegnato e mappa).

## Pagina 11 — Processi agile (2)

**Coinvolgimento attivo del cliente**
Il **cliente** collabora attivamente con il team, testa il risultato di ogni iterazione e fornisce feedback.
Il riscontro viene inserito nelle iterazioni successive, riducendo i rischi e aumentando la soddisfazione.

**Esempio:** sviluppo di una app di food delivery

1. **1ª iterazione** — Login e registrazione: Il team sviluppa il login e la registrazione utenti.
2. **Review con il cliente** — Test e feedback. Team e Cliente (committente). Cliente: “Ottimo, ma vorrei che la registrazione richiedesse anche il numero di telefono, così possiamo usarlo per le consegne.”
3. **Feedback nella backlog** — Da implementare dopo. *Product Backlog:*
   - Login e registrazione
   - ☑ Aggiungere numero di telefono alla registrazione
   - Visualizzazione menu
   - …
4. **Iterazione successiva** — Implementazione del feedback: Il feedback viene implementato nelle iterazioni successive. (Mockup con campi Email, Password, Numero di telefono.)

## Pagina 12 — Processi agile (3)

**Guidato dalle funzionalità**
Ci si concentra sulle **funzionalità** più importanti per gli utenti.
Con il principio di Pareto (80/20) si seleziona il **20% di funzionalità** che copre l’**80% dell’uso.**

**Funzionalità prioritarie** (core dell’app) — ~20% delle funzionalità
1. Login e registrazione
2. Menu ristoranti
3. Carrello e ordine
4. Pagamento online

Coprono la maggior parte dell’esperienza utente: senza di esse l’app non ha senso.

**Funzionalità secondarie** (valore aggiunto, non indispensabili all’inizio) — ~80% delle funzionalità
- Recensioni e valutazioni dei piatti
- Programmi fedeltà e sconti personalizzati
- Tracciamento del rider in tempo reale
- Chat con il ristorante o il fattorino

**Utili, ma non fondamentali:** possono essere introdotte in iterazioni successive.

> Diagramma: torta “Principio di Pareto (80/20)”: 20% funzionalità / 80% dell’uso.

## Pagina 13 — Processi agile (4)

**Tempo fisso e consegna basata su priorità**
Ogni iterazione ha una **durata limitata** (es. 2 settimane) e rilascia un nuovo incremento.
Le funzionalità vengono sviluppate in base a una **priorità**, che viene rivista ad ogni iterazione.

**Product Backlog** (priorità iniziali)
1. Login e registrazione
2. Visualizzazione menu
3. Carrello e ordine
4. Pagamento online
5. Notifiche
6. Recensioni
…

| Iterazione | Durata | Contenuto | Nota |
|---|---|---|---|
| Iterazione 1 | 2 settimane | Funzionalità con priorità più alta: Login e registrazione; Visualizzazione menu | Al termine, il cliente prova le funzionalità rilasciate. |
| Iterazione 2 | 3 settimane | Funzionalità successiva in priorità: Carrello e invio ordine | Cliente: “Il pagamento online è più urgente delle notifiche: i clienti vogliono pagare subito.” — Il feedback del cliente aggiorna le priorità. |
| Iterazione 3 | 2 settimane | Nuova priorità: pagamento online | Al termine, l’app è già **utilizzabile** da utenti. |

## Pagina 14 — Processi agile (5)

**Adattiva**
La metodologia è flessibile e si adatta a nuove esigenze che emergono durante lo sviluppo.
L’obiettivo è **adattarsi a necessità mutevoli**, non evitare l’incertezza all’inizio.

**Esempio:** sviluppo di una app di food delivery

1. **Iterazione 1** (2 settimane) — Funzionalità iniziali: Login e registrazione; Visualizzazione menu
2. **Iterazione 2** (2 settimane) — Carrello e ordine
3. **Nuova esigenza dal cliente** — Durante l’uso, gli utenti chiedono di poter tracciare il rider in tempo reale. Utente: “Sarebbe utile poter vedere in tempo reale dove si trova il rider sulla mappa.”
4. **Iterazione 3** (2 settimane) — Tracciamento in tempo reale

**Roadmap aggiornata**
1. Login e registrazione ✓
2. Visualizzazione menu ✓
3. Carrello e ordine ✓
4. Tracciamento rider (inserito dopo)
5. Pagamento online
6. Notifiche
…

**Il team adatta la roadmap e inserisce la nuova funzionalità nelle iterazioni successive.**
L’app evolve in modo naturale, seguendo i bisogni emergenti del mercato.

## Pagina 15 — Processi agile (6)

**Responsabilizzare il team**
Team piccoli, con alta interazione e comunicazione, che prendono decisioni insieme.
L’intero team è attivamente coinvolto e ha responsabilità sul risultato.

**Esempio:** sviluppo della funzionalità di tracciamento

| Ruolo | Intervento |
|---|---|
| Sviluppatore | “Usiamo Google Maps API o una libreria open source?” |
| Designer | “Come impostiamo la UI del tracking? Vediamo un mockup e confrontiamoci con il cliente.” |
| Product Owner | “Quali sono i requisiti principali? Allineiamoci con il cliente.” |
| Tester | “Pensiamo anche a come testare il tracciamento.” |
| Cliente (stakeholder) | — |

**Risultati**
- **Decisioni rapide** — Senza lunghe approvazioni dall’alto.
- **Maggiore proprietà** — Il team si sente responsabile del risultato.
- **Comunicazione diretta** — Confronto continuo tra team e cliente.

## Pagina 16 — Processi agile (7)

**Centrato sulle persone**
Le **persone** più qualificate lavorano insieme, con autonomia, più che seguire processi rigidi.
La documentazione e le attività non essenziali sono ridotte al minimo.
(Illustrazione: team davanti a una lavagna IDEA → PROGETTA → SVILUPPA → TESTA → RILASCIA.)
*Team piccoli e collaborativi, con responsabilità e decisioni condivise.*

**Sviluppo rapido e rilasci frequenti**
Lo sviluppo procede velocemente con piccoli passi e tecnologie moderne.
Questo permette cicli di feedback ridotti e rilasci più frequenti.
> Diagramma: Sprint 1 (2 settimane) Login e registrazione → Sprint 2 (2 settimane) Menu ristoranti → Sprint 3 (2 settimane) Carrello e ordine; “Rilasci frequenti e feedback continuo”; ciclo “Feedback degli utenti”.
*Versioni del software rilasciate in tempi brevi e migliorate con il feedback.*

**Testing**
Si verifica il corretto funzionamento del sistema con test automatici (su codice, dati e altri prodotti).
Dove non è possibile un test automatico, si utilizza una verifica manuale.
- Test automatici del codice ✅
- Test automatici dei dati ✅
- Verifica di modelli e documentazione ✅
- Verifica manuale (dove necessario) ✅

*Qualità garantita con test automatici e, quando necessario, verifiche manuali.*

## Pagina 17 — Processi agile (8)

**Cosa testiamo**
Verifichiamo il corretto funzionamento del sistema su **codice, dati e altri artefatti.**

**Codice (app + backend)**
- **Unit test** — Esempio: prezzo totale carrello, calcolo tempi stimati, validazione indirizzo.
- **Integration test** — Esempio: ordine → pagamento → ricevuta → notifica.
- **API/contract test** — Esempio: lo schema POST /orders non cambia (tipi, campi obbligatori).
- **E2E/UI test** — Esempio: l’utente seleziona piatti, paga, vede la conferma.

**Dati**
- **Data validation** — Esempio: il menù importato ha categorie valide, prezzi > 0, valute corrette.
- **Data quality checks** — Esempio: piatti “orfani”, ristoranti senza orari, duplicati.

*Menu ristorante (dati)*

| Nome | Categoria | Prezzo | Valuta | Esito |
|---|---|---|---|---|
| Margherita | Pizza | 8.50 | EUR | ✅ |
| Carbonara | Pasta | 9.00 | EUR | ✅ |
| Sushi Mix | Sushi | 0.00 | EUR | ❗ |
| Piatto X | – | 12.00 | – | ❗ |

❗ Individuiamo e correggiamo dati non validi (es. prezzi = 0, categorie mancanti, duplicati).

**Altri artefatti**
- **Model checking** — Esempio: coerenza tra diagrammi (UML) e API (es. con lint).
- **Documentazione** — Esempio: link e snippet funzionanti (lint, spell-check, link-checker).

> Diagramma: Diagrammi (UML) ↔ API (OpenAPI) (snippet: `/orders: post: requestBody: content: application/json: schema: ...`); Documentazione: ✅ Link funzionanti, ✅ Snippet corretti, ✅ Nessun errore di spelling.

## Pagina 18 — Processi agile (9)

**Più disciplina**
Per essere veloci, le cose devono essere **fatte bene la prima volta**.
Richiede **gioco di squadra**, **autodisciplina** e buona **organizzazione** del team.
> Diagramma: team davanti a una board con colonne “Da fare”, “In corso”, “Fatto”.
- Gioco di squadra
- Autodisciplina
- Organizzazione

**Semplicità**
Mantenere ogni cosa **il più semplice possibile**, evitando complessità inutili e restando **aperti al cambiamento**.
> Diagramma: “Soluzione complessa” (schema intricato, ❌) → “Soluzione semplice” (tre blocchi in sequenza, ✅).
- Meno complessità
- Aperti al cambiamento
- Focus sul valore essenziale

## Pagina 19 — Release, iterations e user stories

- **Release** — Versione dell’app rilasciata al termine di più iterazioni.
- **Iteration** — Ciclo di sviluppo di durata fissa (es. 2 settimane) che produce un incremento funzionante.
- **User story** — Piccola funzionalità sviluppata all’interno di un’iterazione.

> Diagramma: gerarchia.
> - **Release 1.0** — App di food delivery
>   - **Iterazione 1** (2 settimane) — Login e registrazione: US-01 Registrazione utente; US-02 Login utente; US-03 Gestione profilo
>   - **Iterazione 2** (2 settimane) — Visualizzazione menu: US-04 Visualizzare menu ristoranti; US-05 Cercare piatti
>   - **Iterazione 3** (2 settimane) — Carrello e ordine: US-06 Gestire carrello; US-07 Inviare ordine
> - Freccia in basso: **Incrementi rilasciati ad ogni iterazione**

## Pagina 20 — Una user story è un obiettivo finale

- Una **user story** è un **obiettivo finale**, non una funzionalità, espresso dal punto di vista dell’utente.
- Lo scopo di una user story è descrivere **come un pezzo di lavoro rilascerà un valore** specifico **per il cliente**.

> Diagramma: iceberg/montagna di schede. Annotazioni: “Tutte sono user stories”; in cima “User stories piccole”; in basso “User stories di dimensioni maggiori (epic)”.

**Formato di una user story**
> Come [utente], voglio [obiettivo], in modo da [valore]

**Esempio (EasyLib)**
> Come **studente**, voglio poter **cercare un libro**, in modo da **trovare rapidamente i materiali** che mi interessano.

## Pagina 21 — Il modello Scrum

Scrum è un insieme di **pratiche e regole Agile** che organizza il lavoro in **cicli iterativi (sprint)**, con **rilasci frequenti** e incrementi del sistema.

> Diagramma: flusso Scrum.
> Obiettivo di prodotto → **Product Backlog** (Raccolta e priorità delle funzionalità (user stories)) → **Sprint Planning** (Selezione delle user stories dallo sprint) → **Sprint Backlog** (Dettaglio del lavoro da fare) → **Scrum Team** (Dev, Dev, SM, PO, PO) con ciclo **Daily Scrum** (Riunione giornaliera del team (cosa è stato fatto e cosa si farà)) → **Increment** (Versione funzionante del sistema) → **Sprint Review** (Valutazione dell’incremento con il cliente) → **Sprint Retrospective** (Analisi di cosa ha funzionato e cosa migliorare) → ritorno al Product Backlog.

**Sprint**
Ciclo di sviluppo di **durata fissa** (es. 2 settimane) che produce un **incremento funzionante** del sistema.

**Backlog**
Lista ordinata delle funzionalità (**user stories**) del prodotto. Da questa lista si selezionano le user stories da realizzare nello sprint.

**Scrum Meeting**
Insieme di riunioni che guidano il processo:
- **Sprint Planning**: definisce il lavoro dello sprint
- **Daily Scrum**: sincronizza il team ogni giorno
- **Sprint Review**: mostra l’incremento al cliente
- **Sprint Retrospective**: identifica i miglioramenti

## Pagina 22 — I ruoli nello Scrum

**Product Owner** — Massimizza il valore del prodotto
- Definisce e comunica il **Product Goal**
- Gestisce e ordina il **Product Backlog**
- Rappresenta le esigenze di stakeholder e utenti

**Scrum Master** — Aiuta il team ad applicare Scrum in modo efficace
- Facilita il processo (eventi, regole, pratiche)
- Aiuta a rimuovere impedimenti
- Supporta Product Owner, Developers e l’organizzazione
- Promuove autonomia e miglioramento continuo

**Developers** — Realizzano l’Increment
- Decidono come organizzare il lavoro
- Pianificano e adattano lo **Sprint Backlog**
- Sviluppano, integrano e verificano il prodotto
- Sono collettivamente responsabili della qualità

**Scrum Team** — Product Owner + Scrum Master + Developers
Un unico team, senza sottoteam o gerarchie interne, focalizzato sullo stesso **Product Goal.**

**Product Goal** — Obiettivo di valore per gli utenti e per il business → *Cicli iterativi (Sprint)* → **Increment** — Versione funzionante del prodotto con valore

## Pagina 23 — Il Product Backlog

**Product Backlog**
Lista ordinata delle funzionalità del prodotto, espressa tipicamente tramite **user story**, mantenuta e aggiornata dal **Product Owner.**

**Caratteristiche principali**
- Contiene tutto ciò che potrebbe essere realizzato nel prodotto
- È ordinato per valore (importanza)
- Viene raffinato e aggiornato continuamente
- Le voci sono espresse in termini di valore per l’utente (user story)
- Include criteri di accettazione (es. in formato “Given/When/Then”)

**Esempio di Product Backlog (EasyLib)**

| ID | Nome | User story | Criteri di accettazione (How to Demo) | Priorità |
|---|---|---|---|---|
| US-01 | Registrazione utente | Come **utente**, voglio registrarmi alla piattaforma in modo da **poter prendere in prestito libri**. | • **Dato** che sono nella pagina di registrazione,<br>• **quando** inserisco nome, email e password validi e confermo,<br>• **allora** il mio account viene creato e sono autenticato nel sistema. | 1 |
| US-02 | Login | Come **utente registrato**, voglio effettuare il login in modo da **accedere al mio account**. | • **Dato** che sono nella pagina di login,<br>• **quando** inserisco email e password validi e premo il pulsante di accesso,<br>• **allora** sono autenticato e vedo la mia area personale. | 2 |
| US-03 | Ricerca libri | Come **utente**, voglio cercare libri per titolo o autore in modo da **trovare rapidamente i libri che mi interessano**. | • **Dato** che sono nella pagina di ricerca,<br>• **quando** inserisco un titolo o un autore,<br>• **allora** il sistema mostra una lista di libri pertinenti con titolo, autore e disponibilità. | 3 |

**Requisiti (Requirements)** — Descrivono cosa il sistema deve fare a un livello più generale e stabile (es. RF1: “Il sistema deve permettere la gestione degli utenti”).
→
**Product Backlog** — Dettaglia i requisiti in **user story** ordinate per valore, pronte per essere implementate in modo iterativo (es. US-01, US-02, …).

## Pagina 24 — Non solo user story

Il Product Backlog contiene **diversi tipi di elementi**, **non solo nuove funzionalità** espresse come user story.

| Priorità | Elemento | Tipo | Dettagli (link) | Stima iniziale |
|---|---|---|---|---|
| 1 | Come acquirente, voglio aggiungere un libro al carrello | User story (nuova funzionalità) | … | 5 |
| 2 | Come acquirente, voglio rimuovere un libro dal carrello | User story (nuova funzionalità) | … | 2 |
| 3 | Migliorare le prestazioni dell’elaborazione delle transazioni | Miglioramento prestazioni | … | 13 |
| 4 | Analizzare soluzioni per velocizzare la validazione delle carte di credito | Ricerca / Analisi | … | 20 |
| 5 | Aggiornare tutti i server ad Apache 2.2.3 | Attività tecnica (infrastruttura) | … | 13 |
| 6 | Diagnostica e correzione degli errori nello script di elaborazione ordini (bugzilla ID 14823) | Difetto (bug) | … | 3 |
| 7 | Come acquirente, voglio creare e salvare una lista dei desideri | User story (nuova funzionalità) | … | 40 |
| 8 | Come acquirente, voglio aggiungere o eliminare elementi dalla mia lista dei desideri | User story (nuova funzionalità) | … | 20 |

Legenda dei tipi:
- **User story** — Nuove funzionalità di valore per l’utente
- **Miglioramento** — Obiettivi di qualità (es. prestazioni, scalabilità)
- **Ricerca / Analisi** — Attività di esplorazione e valutazione di soluzioni
- **Attività tecnica** — Lavori tecnici (es. infrastruttura, upgrade)
- **Difetto** — Problemi noti da risolvere (se pochi; altrimenti in un sistema separato)

ℹ Il Product Backlog include principalmente **nuove funzionalità** per i clienti (user story), ma anche **miglioramenti tecnici**, attività di **ricerca/analisi** e, se pochi, **difetti noti**.

## Pagina 25 — Lo Sprint

Uno sprint è un **periodo di tempo limitato** di lavoro con un **obiettivo definito.**
Ogni sprint produce un **incremento potenzialmente rilasciabile** del prodotto (software funzionante).

> Diagramma: **Product Backlog** (Funzionalità ordinate per valore) → **Sprint Backlog** (Elementi selezionati per lo sprint) → ciclo **Sprint** (2 settimane – 2 mesi) con **Daily Scrum** (15 minuti) — “Ogni giorno il team si confronta: cosa ho fatto; cosa farò; impedimenti” → **Incremento potenzialmente rilasciabile** (Software funzionante e di qualità).

**“Potenzialmente rilasciabile” significa:**
- ✅ Testato nelle funzionalità
- ⚙ Codice di qualità
- ❌ Non significa necessariamente rilasciato in produzione
- ❌ Non è un prototipo sperimentale, ma una parte del prodotto finale

Durata: tipicamente da **2 settimane a 2 mesi**

## Pagina 26 — Artefatti principali / Pratiche (cerimonie)

**Artefatti principali**
- **Product Backlog** — Lista ordinata di tutte le funzionalità richieste per l’intero progetto (con priorità basate sul valore di business).
- **Sprint Backlog** — Sottoinsieme del Product Backlog con gli elementi selezionati per lo Sprint e le informazioni su come realizzarli.
- **Burn-down Chart** — Grafico che mostra il lavoro rimanente nello Sprint Backlog. Aggiornato ogni giorno, fornisce una visione semplice e immediata dell’avanzamento dello Sprint.

**Pratiche (cerimonie)**
- **Sprint Planning** — Si definisce cosa realizzare nello Sprint e come farlo. Partecipano Product Owner, Scrum Master e Scrum Team.
- **Daily Scrum** — Breve riunione quotidiana (15 minuti) per sincronizzare il team: cosa ho fatto, cosa farò, impedimenti.
- **Sprint Review** — Il team presenta agli stakeholder il lavoro completato (demo).
- **Sprint Retrospective** — Il team riflette sullo Sprint e identifica azioni di miglioramento (inspect & adapt).
- **Post-scrum (integrazione)** — Discussione su integrazione e aree di sovrapposizione tra i lavori del team.

## Pagina 27 — Il Burndown Chart

Il **Burndown Chart** è un diagramma cartesiano il cui scopo è quello di monitorare il lavoro ultimato rispetto a quello da completare: sull’asse X sono indicati i giorni dello Sprint (date oppure giorni), mentre sull’asse Y sono indicati i giorni di Effort (lavoro rimanente).

> Diagramma: grafico a linee. Asse X “Giorni dello Sprint” (Day 1 … Day 10, Done); asse Y “Lavoro Rimanente in giorni” (0–100).
> - **Trend Desiderato** (blu, lineare): ~90, 81, 71, 62, 52, 43, 34, 25, 17, 9, 0
> - **Trend Realizzato** (rosso): ~90, 74, 62, 61, 60, 55, 46, 29, 14, 4, 0

## Pagina 28 — Lo Sprint Backlog

Lo **Sprint Backlog** contiene gli elementi selezionati dal Product Backlog per lo Sprint e le informazioni su come il team sta procedendo nell’implementarli.

> Diagramma: board con asse verticale Priorità + (in alto) / Priorità − (in basso).
>
> | Da Lavorare | In Lavorazione | Completate | Obiettivo dello Sprint: …… |
> |---|---|---|---|
> | Anagrafica Fornitori; Gestione Ordine Clienti | (post-it vuoti) | Anagrafica Clienti; (post-it vuoto) | Burndown (Lavoro Rimanente vs Date dello Sprint; Trend realizzato / Trend desiderato) |
>
> Sotto l’area Burndown: **Non Pianificate** (post-it vuoto) | **Prossime** (Gestione Ordine Fornitore)

## Pagina 29 — Sprint Retrospective

La **Sprint Retrospective** è una riunione in cui il team riflette sullo Sprint appena concluso, identifica cosa ha funzionato, cosa può essere migliorato e definisce azioni di miglioramento.

**Esempio:**

| Cose Fatte Bene — *Cosa ha funzionato nello Sprint?* | Cose da Migliorare — *Quali problemi o difficoltà abbiamo incontrato?* | Miglioramenti — *Quali azioni possiamo intraprendere nel prossimo Sprint?* |
|---|---|---|
| Buona collaborazione nel team | Stime iniziali troppo otimistiche | Migliorare le stime con più dati storici |
| Consegna della funzionalità principale | Troppi task in parallelo | Limitare il numero di task in parallelo |
| Test automatizzati efficaci | Problemi di integrazione nel finale | Automatizzare ulteriori test |
| Comunicazione chiara con lo stakeholder | Comunicazioni non sempre tempestive | Sincronizzazioni più frequenti nel team |
| Gestione dei task migliorata | Test manuali troppo lunghi | Verificare prima l’integrazione continua |

## Pagina 30 — Pianificare con Scrum

Uno dei primi **errori** che si fanno usando **Scrum** è pensare che **non serva pianificare**.

In realtà **usare Scrum significa pianificare continuamente** dandosi sia degli obiettivi a medio-lungo termine con **Visione e Roadmap di progetto**; sia degli obiettivi a breve e brevissimo termine con **Pianificazione dello Sprint** e della giornata.

❌ **Errore comune**
> “Con Scrum non serve pianificare.”

✅ **La realtà**
Scrum richiede **pianificazione continua** a diversi livelli.

> Diagramma: piramide a tre livelli.
> - **Visione e Roadmap di progetto** — Obiettivi a medio-lungo termine.
> - **Pianificazione dello Sprint** — Obiettivi a breve termine.
> - **Pianificazione della giornata** — Obiettivi a brevissimo termine.

## Pagina 31 — Kanban

**Kanban** è un **metodo visuale** per gestire e monitorare il lavoro, basato su una board suddivisa in colonne che rappresentano le diverse fasi di avanzamento delle attività.

- **Visualizza il lavoro** — Tutte le attività sono visibili su una board condivisa.
- **Monitora l’avanzamento** — Le attività si spostano tra le colonne in base allo stato.
- **Favorisce la collaborazione** — Il team ha una visione comune del lavoro.
- **Semplice ed efficace** — Aiuta a identificare colli di bottiglia e a migliorare il flusso di lavoro.

> Diagramma: foto di una lavagna Kanban reale con post-it. Intestazioni: “M1: Nov 9”, “SLA: 17!”; colonne BACKLOG (Analysis), ACTIVE: TODO (Spec, Dev), IN PROGRESS (Dev, Code), TEST (Review, Fixes), DONE (Sandbox, Accept, Deploy).

## Pagina 32 — Differenza SCRUM - KANBAN

| | **SCRUM** — metodologia **Push** (*Time-boxed*) | **KANBAN** — metodologia **Pull** (*Flusso continuo*) |
|---|---|---|
| Descrizione | **Spinge** all’interno in un determinato periodo di tempo (**Sprint**) una determinata quantità di task da svolgere. | **Estrae** dal proprio backlog i task in base al lavoro in corso (**WIP**), cioè in relazione a quello che il team è in grado di fare / realizzare. |
| Schema | Product Backlog → Sprint (time-box) → Increment. *Seleziona una quantità di task per lo Sprint* | Backlog → **Pull** → board To Do / In Progress / Review / Done. *Il team prende i prossimi task in base alla capacità (WIP)* |
| Caratteristiche | • Sprint con durata fissa (es. 2-4 settimane)<br>• Quantità di lavoro definita all’inizio dello Sprint<br>• Focus sul raggiungimento dell’obiettivo dello Sprint | • Flusso continuo (nessun time-box fisso)<br>• Si prendono nuovi task quando c’è capacità (limite WIP)<br>• Focus sul flusso e sul completamento continuo |

## Pagina 33 — Kanban Simulation

**Kanban Simulation**

*Dr. York Rössler*

(Logo: EGERIA CONSULTING)

## Pagina 34 — Dalla Kanban Simulation: alcuni insight

Questi aspetti emergeranno direttamente durante la simulazione della prossima settimana.

**1. Agilità ≠ andare più veloci**
L’agilità è una strategia per lavorare in contesti incerti e in rapida evoluzione.
> Diagramma: ciclo Ispeziona → Impara → Adatta → Ispeziona.

**L’essenza dell’agilità è l’ispezione e l’adattamento (empirismo).**

**2. Ridurre il Lead Time**
In un ambiente che cambia rapidamente è importante portare valore all’utente in tempi brevi.
> Diagramma: Piccoli incrementi → Feedback rapido → Adattamento.

Time-to-market · MVP · deployment incrementale

**3. Ottimizzare il flusso, non l’utilizzo delle persone**
Sistemi molto caricati sono lenti, instabili, imprevedibili e con tempi di risposta lunghi.
> Diagramma: board To Do / In Progress / Review / Done con molti task accumulati in “In Progress”.

**Non massimizzare quanto sono occupate le persone. Migliorare il flusso del lavoro attraverso il sistema.**

**La prossima settimana: Kanban Simulation**
Vedremo questi insight emergere direttamente durante la simulazione.
