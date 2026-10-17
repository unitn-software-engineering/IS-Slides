# Requisiti e Use Case

- **Fonte:** `6-Use-Case-2.pdf`
- **Numero di pagine:** 63
- **Autore:** Prof. Paolo Giorgini — A.A. 2026/2027

---

## Pagina 1 — Requisiti e Use Case

**Requisiti e Use Case**

Prof. Paolo Giorgini
A.A. 2026/2027

## Pagina 2 — Requisiti funzionali in linguaggio naturale

*Come scrivere un requisito funzionale*

- Un requisito funzionale descrive **una capacità o un comportamento richiesto al sistema**.
- Scriverlo in linguaggio naturale in modo che sia:
  - chiaro e non ambiguo;
  - sufficientemente specifico;
  - focalizzato su **cosa deve fare il sistema**;
  - privo di dettagli tecnici di implementazione;
  - separato dalla sequenza di interazione, che verrà poi dettagliata negli Use Case.
- Formula consigliata: **“Il sistema deve …”**

## Pagina 3 — Come scrivere un requisito funzionale?

Un requisito funzionale deve descrivere un **comportamento ben identificabile** del sistema.

**❌ Da evitare: requisiti troppo ampi**

> **RF1 Gestione della biblioteca**
> Il sistema deve permettere di **cercare libri**, **prenotarli**, **registrare prestiti** e **inviare notifiche** agli utenti.

**Problema:** il requisito raggruppa funzionalità distinte, che potrebbero essere sviluppate e verificate separatamente.

**✅ Meglio: separare le funzionalità**

| ID | Titolo | Descrizione |
|---|---|---|
| RF1 | Ricerca dei libri | Il sistema deve consentire agli utenti di cercare libri nel catalogo. |
| RF2 | Prenotazione dei libri | Il sistema deve consentire agli utenti di prenotare libri non disponibili. |
| RF3 | Registrazione dei prestiti | Il sistema deve consentire agli operatori di registrare il prestito di un libro a un utente. |
| RF4 | Notifiche agli utenti | Il sistema deve notificare agli utenti gli eventi rilevanti relativi ai prestiti e alle prenotazioni. |

**ℹ Non frammentare eccessivamente**
Un requisito può includere operazioni strettamente correlate che concorrono a realizzare la stessa funzionalità.

> **RF3 Registrazione dei prestiti** (esempio)
> Il sistema deve consentire agli operatori di registrare il prestito di un libro a un utente, verificando la disponibilità del libro e i vincoli di prestito applicabili.

**Messaggio chiave**
- Un requisito funzionale descrive una funzionalità ben identificabile, non necessariamente una sola operazione.
- Se un requisito comprende funzionalità distinte, suddividetelo in più requisiti.
- Non confondete la granularità dei requisiti con quella delle User Story: un requisito può essere dettagliato da più User Story.

## Pagina 4 — Requirements Analysis

| Vago | Più chiaro, ma ancora incompleto | Requisito |
|---|---|---|
| *“Sarebbe utile poter cercare i libri.”* | “L’utente deve poter cercare i libri.” | **RF3** — Il sistema deve consentire agli utenti di ricercare i libri utilizzando titolo, autore, casa editrice e ISBN, anche combinando più criteri. |
| Un desiderio o un’idea generica, non è un requisito. | Indica cosa dovrebbe fare il sistema, ma non specifica i dettagli (come, quali criteri, ecc.). | Un requisito chiaro, specifico e verificabile. |

> Diagramma: tre illustrazioni in sequenza (frecce) — una baracca (Vago) → una casa (Più chiaro) → un edificio “BIBLIOTECA” (Requisito).

**Requirements Analysis**
*Trasformare bisogni, desideri e aspettative in requisiti chiari e condivisi.*

## Pagina 5 — Esempio EasyLib

**RF3 – Consultazione del catalogo bibliografico**

✅ Il sistema deve consentire agli utenti e agli operatori di consultare il catalogo bibliografico e individuare i libri di interesse mediante informazioni quali titolo, autore, casa editrice e ISBN.

❌ L’utente accede alla schermata di ricerca, inserisce il titolo e/o l’autore negli appositi campi e preme il pulsante RICERCA. Il sistema effettua la ricerca e visualizza la lista dei libri trovati. Se non viene trovato alcun libro, visualizza un messaggio. (-> use case)

## Pagina 6 — Requisiti non funzionali

*Come scrivere un requisito non funzionale*

- Un requisito non funzionale descrive **una proprietà dell’intero sistema**, non una singola funzione
- Deve essere espresso in modo:
  - concreto;
  - misurabile;
  - verificabile;
  - accompagnato da **criteri o soglie esplicite**.
- Non basta scrivere: “Il sistema deve essere veloce.”
- Ma: **“Il 95% delle richieste deve essere completato entro 2 secondi con almeno 100 utenti simultanei.”**

## Pagina 7 — Esempio EasyLib

**RNF2 – Performance**

✅ Ogni operazione deve essere completata entro **2 secondi per il 95% delle richieste**, anche con almeno **100 utenti connessi simultaneamente**.

❌ Il sistema deve essere veloce e garantire tempi di risposta rapidi anche quando molti utenti lo utilizzano contemporaneamente.

> ❌ **”veloce”, “rapido”, “molti utenti”**
> ↓
> ✅ **2 secondi · 95% delle richieste · 100 utenti simultanei**

## Pagina 8 — Esempi di requisiti non funzionali

I requisiti non funzionali descrivono **proprietà del sistema** e devono includere **criteri misurabili e verificabili**.

| Categoria | Cosa misura | Esempi di misure (criteri/soglie) | Esempio di requisito |
|---|---|---|---|
| Performance | Rapidità di risposta del sistema. | tempo di risposta (es. 2 secondi); percentile delle richieste (es. 95%); richieste al secondo (throughput) | Ogni operazione deve essere completata entro **2 secondi** per il **95%** delle richieste, anche con almeno **100 utenti** simultanei. |
| Scalabilità | Comportamento al crescere del carico di utenti e dati. | numero di utenti simultanei; volume di dati (es. 1 milione di libri); tempo di risposta sotto carico | Il sistema deve mantenere i tempi di risposta definiti anche con fino a **50.000 utenti** simultanei. |
| Affidabilità | Continuità e correttezza del servizio. | disponibilità (es. 99,9%); downtime massimo (es. 8 ore/anno); tempo medio tra i guasti (MTBF) | Il sistema deve garantire una disponibilità minima del **99,9%** su base annua, con un downtime massimo di **8 ore**. |
| Usabilità | Facilità di apprendimento e utilizzo. | tempo di apprendimento; tasso di errore dell’utente; task completion rate | Gli utenti devono poter utilizzare le principali funzionalità entro **30 minuti** di utilizzo, senza necessità di leggere documentazione. |
| Sicurezza | Protezione di dati e funzionalità. | numero di tentativi di accesso falliti; timeout di sessione; cifratura dei dati | L’account deve essere bloccato dopo **5 tentativi** di accesso falliti consecutivi. |
| Compatibilità | Funzionamento su diversi ambienti e piattaforme. | browser/versioni supportate; sistemi operativi; dispositivi (desktop, mobile, tablet) | Il sistema deve essere compatibile con gli ultimi due rilasci delle principali versioni di Chrome, Firefox, Safari ed Edge. |
| Accessibilità | Fruibilità da parte di utenti con esigenze diverse. | conformità a standard (es. WCAG 2.1); navigazione da tastiera; contrasto dei colori | L’interfaccia deve essere conforme alle linee guida **WCAG 2.1 livello AA**. |
| Localizzazione | Supporto linguistico e culturale. | lingue supportate; copertura delle stringhe tradotte; formato data/ora e valuta | Il sistema deve supportare almeno **Italiano, Inglese e Tedesco**. La selezione della lingua deve essere facilmente accessibile e applicabile in qualsiasi momento. |

**!** Un **requisito non funzionale** non dovrebbe limitarsi a una **qualità desiderata**. Deve specificare anche **come** tale qualità sarà **misurata** e quale **soglia** deve essere raggiunta.

- ❌ **Non corretto:** “Il sistema deve essere veloce.”
- ✅ **Corretto:** “Il 95% delle richieste deve completarsi entro 2 secondi con 100 utenti simultanei.”

## Pagina 9 — Da dove arrivano soglie e valori degli RNF?

Le misure **non vanno inventate dal team di sviluppo**. Devono derivare da un’analisi del contesto e dal confronto con gli stakeholder

**Easy Lib**
- **Performance**
  Stakeholder: “Durante le ore di punta il sistema deve restare reattivo.”
  → misura: tempo di risposta + utenti simultanei
  → soglia concordata: **95% delle richieste entro 2 s con 100 utenti simultanei**
- **Disponibilità**
  Stakeholder: “Il servizio deve essere quasi sempre accessibile.”
  → misura: disponibilità annuale
  → soglia concordata: **99,9%**
- **Usabilità**
  Stakeholder: “Gli utenti devono riuscire a usare il sistema senza formazione.”
  → misura: tempo necessario per apprendere le funzioni principali
  → soglia concordata: **entro 30 minuti**

## Pagina 10 — Motivare le scelte nel D1

**Esempio – Performance**
- **RNF2:** il 95% delle richieste deve essere completato entro 2 secondi con almeno 100 utenti simultanei.
- **Motivazione:** nei periodi di picco molti utenti possono effettuare contemporaneamente ricerche, login e consultazione dei prestiti.
  **2 s** = tempo massimo considerato accettabile per mantenere l’interazione fluida. **100 utenti simultanei** = carico di picco atteso sulla base dell’uso previsto del servizio.

**Questi valori devono essere giustificati da dati, osservazioni, stime o confronto con gli stakeholder**

## Pagina 11 — Ora tocca a voi! Descrizione dei requisiti nel D1

| # | Requisiti Funzionali (RF) — *Cosa deve fare il sistema?* | Requisiti Non Funzionali (RNF) — *Con quale livello di qualità o vincolo?* |
|---|---|---|
| 1 | **Assegnate un ID stabile.** RF1, RF2, … | **Assegnate un ID stabile.** RNF1, RNF2, … |
| 2 | **Definite un titolo breve.** Che descriva la funzionalità. | **Indicate la categoria.** Ad esempio: performance, sicurezza, usabilità, affidabilità, manutenibilità, … |
| 3 | **Scrivete una descrizione chiara.** Cosa deve fare il sistema e quali risultati deve garantire. | **Scrivete una descrizione verificabile.** Definite chiaramente la caratteristica di qualità. |
| 4 | **Indicate gli attori coinvolti.** Utenti, ruoli o altri sistemi rilevanti. | **Specificate misure, soglie o criteri.** Quando pertinente, indicate valori misurabili o criteri verificabili (es. tempi di risposta, disponibilità, …). |
| 5 | **Un requisito, una funzionalità ben identificabile.** Se un requisito comprende funzionalità distinte, suddividetelo in più RF. Mantenete insieme le operazioni strettamente correlate. | **Motivate i valori scelti.** Sulla base delle esigenze degli stakeholder e del contesto d’uso. |
| 6 | **Evitate dettagli di soluzione.** Non specificate come realizzare la funzionalità (architettura, tecnologie, classi, database, …). | **Evitate formulazioni vaghe.** Non usate termini generici come “veloce”, “sicuro”, “facile da usare”, senza criteri misurabili. |

**RF = comportamento atteso** — Cosa deve fare il sistema | **RNF = qualità e vincoli verificabili** — Con quale livello di qualità deve farlo

Un buon requisito deve essere **chiaro, motivato** e **verificabile** — senza anticipare la soluzione.

## Pagina 12 — Use Case

**Use Case** (slide di sezione)

## Pagina 13 — Dai requisiti funzionali agli Use Case

- I requisiti funzionali descrivono **cosa il sistema deve fare**
- Gli Use Case descrivono **come gli attori interagiscono con il sistema per raggiungere un obiettivo**
- **Finalità dello Use Case Diagram**
  - identificare **chi interagisce con il sistema**;
  - individuare **quali funzionalità sono rilevanti per ciascun attore**;
  - rappresentare in modo sintetico le **relazioni tra attori e Use Case**;
  - chiarire il **confine del sistema**.

## Pagina 14 — Non solo Use Case nel D1

- **Gli Use Case Diagram forniscono una vista sintetica delle interazioni tra attori e sistema.**
- Quando il comportamento richiede maggior dettaglio, possono essere utilizzati anche altri diagrammi UML, ad esempio **Sequence Diagram**, **Activity Diagram** e **State Machine**.
- **RF e Use Case non hanno una corrispondenza necessariamente 1:1**
  - Nel D1 infatti uno stesso requisito può essere dettagliato da più Use Case e uno Use Case può contribuire a più requisiti . Stessa cosa per Sequence Diagram, Activity Diagram e State Machine

## Pagina 15 — Perché UML ?

- **Perché usare UML nella modellazione dei requisiti?**
  - Semplice e intuitivo
  - Supporta diverse fasi del ciclo di sviluppo
  - Ampiamente utilizzato
  - Standardizzato da ISO
- **UML non è l’unico linguaggio di modellazione utilizzabile per descrivere un sistema**
  - DFD, BPMN, SysML, Statecharts, linguaggi formali…

## Pagina 16 — Draw.io

- buon supporto per **UML**;
- semplice da usare;
- utilizzabile via browser;
- integrazione con **Google Drive** e **GitHub**;
- disponibile gratuitamente per le attività del corso

- **draw.io non è l’unico strumento per modellare in UML.**
  - Lucidchart, yEd, Enterprise Architect, Visual Paradigm, PlantUML, Mermaid…

## Pagina 17 — Esempio: requisiti del Time Tracker

Siamo stati contattati da una piccola azienda. Vogliono che realizziamo un sistema che permetta ai dipendenti di tenere traccia di come impiegano il proprio tempo quando lavorano al computer.

L’idea è quella di un cronometro: gli utenti del sistema possono avviare e interrompere il conteggio del tempo trascorso su diverse attività; il sistema registra tali attività e può essere utilizzato per produrre report.

Il sistema può inoltre essere integrato con un sistema di fatturazione. Il sistema di fatturazione riceve tutte le informazioni relative al tempo impiegato dai programmatori sui diversi progetti e calcola il costo dei progetti. Queste informazioni vengono quindi utilizzate per calcolare il costo dei progetti.

> Diagramma: mockup di finestra “Activity Tracker” con campo “Attività in corso: nessuna”, menu a tendina “Attività: e-society”, campo “Commento:”, pulsanti “Avvia”, “Preferenze”, “Log manuale...”, “Esci”.

## Pagina 18 — Requisiti in linguaggio naturale

- **Requisiti funzionali:**
  - Gli utenti possono avviare e interrompere il conteggio del tempo dedicato alle attività.
  - Il sistema registra tali attività.
  - Le registrazioni possono essere utilizzate per produrre report.
  - …
- **Requisiti non funzionali:**
  - Il sistema deve rendere disponibile una nuova registrazione dell’attività entro 2 secondi dalla sua creazione.
  - Gli utenti devono poter imparare a utilizzare il software in **30 minuti**, senza leggere la documentazione.
  - …

## Pagina 19 — Processo: Use Case in UML

| Passo | Titolo | Descrizione |
|---|---|---|
| 1 | Identificare gli attori | Individuare i ruoli che gli utenti (o altri soggetti esterni) possono assumere nel sistema. |
| 2 | Identificare gli Use Case | Definire gli scenari che descrivono un’unità coerente di funzionalità dal punto di vista di un attore. |
| 3 | Costruire il diagramma | Rappresentare graficamente gli attori, gli use case e le relazioni tra use case e attori. |
| 4 | Realizzare il diagramma | Utilizzare uno strumento di modellazione, ad esempio draw.io, per creare il diagramma dei Use Case. |

> Diagramma: (1) attori Utente, Amministratore, Sistema esterno; (2) documento “Use Case”; (3) riquadro “Sistema” con Utente → Use Case 1, Use Case 2 e Amministratore → Use Case 3; (4) laptop con logo draw.io.

## Pagina 20 — Identificare gli attori

Un **attore** è una persona, un ruolo o un sistema esterno che deve interagire con il sistema in sviluppo.

- L’attore:
  - è **esterno al sistema**;
  - rappresenta un **ruolo**, non necessariamente una persona specifica;
  - può essere umano oppure un altro sistema;
  - interagisce con il sistema per raggiungere un obiettivo.
- **Chi deve interagire con il sistema?**

## Pagina 21 — Esempio: requisiti del Time Tracker

Siamo stati contattati da una piccola azienda. Vogliono che realizziamo un sistema che permetta ai dipendenti di tenere traccia di come impiegano il proprio tempo quando lavorano al computer.

L’idea è quella di un cronometro: gli utenti del sistema possono avviare e interrompere il conteggio del tempo trascorso su diverse attività; il sistema registra tali attività e può essere utilizzato per produrre report.

Il sistema può inoltre essere integrato con un sistema di fatturazione. Il sistema di fatturazione riceve tutte le informazioni relative al tempo impiegato dai programmatori sui diversi progetti e calcola il costo dei progetti. Queste informazioni vengono quindi utilizzate per calcolare il costo dei progetti.

> Diagramma: mockup della finestra “Activity Tracker” (come a pagina 17).

## Pagina 22 — Esempio: requisiti del Time Tracker

Stesso testo della pagina 21, con evidenziati in giallo i potenziali attori: **dipendenti**, **utenti del sistema**, **sistema di fatturazione**.

Siamo stati contattati da una piccola azienda. Vogliono che realizziamo un sistema che permetta ai ==dipendenti== di tenere traccia di come impiegano il proprio tempo quando lavorano al computer.

L’idea è quella di un cronometro: gli ==utenti del sistema== possono avviare e interrompere il conteggio del tempo trascorso su diverse attività; il sistema registra tali attività e può essere utilizzato per produrre report.

Il sistema può inoltre essere integrato con un ==sistema di fatturazione==. Il sistema di fatturazione riceve tutte le informazioni relative al tempo impiegato dai programmatori sui diversi progetti e calcola il costo dei progetti. Queste informazioni vengono quindi utilizzate per calcolare il costo dei progetti.

> Diagramma: mockup della finestra “Activity Tracker”.

## Pagina 23 — Step 1: identificare gli attori

Una persona, un ruolo o un sistema esterno che deve interagire con il sistema in sviluppo

> Diagramma: tre attori UML (stick figure): Dipendente, Utente del sistema, Sistema di fatturazione.

## Pagina 24 — Step 2: identificare gli scenari (use case)

- Uno **Use Case** descrive un comportamento del sistema che permette a un attore di raggiungere un obiettivo.
- Ogni Use Case rappresenta una **sequenza coerente di interazioni tra un attore e il sistema**.
- **Strategie per identificare gli Use Case**
  - Esaminare gli **attori** e chiedersi quali obiettivi vogliono raggiungere.
  - Individuare nella descrizione del progetto **verbi, azioni e comportamenti** rilevanti.
  - Raggruppare azioni strettamente collegate in un unico Use Case quando rappresentano un unico obiettivo dell’attore.
- **Che cosa vuole ottenere ciascun attore interagendo con il sistema?**

## Pagina 25 — Esempio: requisiti del Time Tracker

Identica alla pagina 22 (attori evidenziati in giallo: ==dipendenti==, ==utenti del sistema==, ==sistema di fatturazione==).

> Diagramma: mockup della finestra “Activity Tracker”.

## Pagina 26 — Esempio: requisiti del Time Tracker

Stesso testo, con attori evidenziati in giallo (**dipendenti**, **utenti del sistema**, **sistema di fatturazione**) e azioni evidenziate in azzurro (**avviare e interrompere il conteggio**, **produrre report**, **calcolare il costo dei progetti**).

Siamo stati contattati da una piccola azienda. Vogliono che realizziamo un sistema che permetta ai ==dipendenti== di tenere traccia di come impiegano il proprio tempo quando lavorano al computer.

L’idea è quella di un cronometro: gli ==utenti del sistema== possono **[avviare e interrompere il conteggio]** del tempo trascorso su diverse attività; il sistema registra tali attività e può essere utilizzato per **[produrre report]**.

Il sistema può inoltre essere integrato con un ==sistema di fatturazione==. Il sistema di fatturazione riceve tutte le informazioni relative al tempo impiegato dai programmatori sui diversi progetti e calcola il costo dei progetti. Queste informazioni vengono quindi utilizzate per **[calcolare il costo dei progetti]**.

> Diagramma: mockup della finestra “Activity Tracker”.

## Pagina 27 — Step 2: identificare gli scenari

Una sequenza di interazioni correlate tra un attore e il sistema, che avvengono sotto forma di dialogo

> Diagramma: tre use case (ellissi) senza attori: “Avviare e interrompere il conteggio del tempo”, “Calcolare il costo dei progetti”, “Produrre report”.

## Pagina 28 — Step 3: Creare il diagramma Use Case

Gli **Use Case Diagram** vengono creati per **visualizzare le relazioni tra gli attori e gli Use Case**

> Diagramma: Use Case Diagram.
> - Attori: Dipendente, Amministratore, Sistema di fatturazione.
> - Use case: Avviare e interrompere il conteggio del tempo; Produrre report; Calcolare il costo dei progetti.
> - Associazioni: Dipendente — Avviare e interrompere il conteggio del tempo; Amministratore — Produrre report; Amministratore — Calcolare il costo dei progetti; Sistema di fatturazione — Calcolare il costo dei progetti.

## Pagina 29 — Use Case Diagrams: Relazioni

- Relazioni tra Attori

**Associazione:**
La partecipazione di un attore a uno Use Case. È l’unica relazione tra **attori e Use Case**.

> Diagramma: attore A collegato con linea continua a uno use case (ellisse).

**Generalizzazione:**
Se **A generalizza B**, significa che **A può partecipare agli Use Case a cui partecipa B**.

> Diagramma: attore A → (freccia con punta triangolare vuota) → attore B.

## Pagina 30 — Use Case Diagrams: Relazioni - esempio

> Diagramma: Use Case Diagram.
> - Attori: Dipendente, Amministratore.
> - Generalizzazione: Amministratore → Dipendente (triangolo verso Dipendente).
> - Associazioni: Dipendente — “Avviare e interrompere il conteggio del tempo”; Amministratore — “Produrre report”.

## Pagina 31 — Relazioni tra Use Case

**«include»**
Lo Use Case **A include B** quando l’esecuzione di **B è una parte necessaria del comportamento di A**.
A → «include» → B
**B viene sempre eseguito come parte di A.**

> Diagramma: A - - «include» - -> B (freccia tratteggiata).

**«extend»**
Lo Use Case **C estende D** quando aggiunge a **D un comportamento opzionale o condizionale**.
C → «extend» → D
**D può essere eseguito anche senza C.**

> Diagramma: C - - «extend» - -> D (freccia tratteggiata).

**Generalizzazione**
Lo Use Case **E specializza F**: eredita il comportamento di **F** e lo rende più specifico.
E –▷ F
**E è una variante più specifica di F.**

> Diagramma: E —▷ F (linea continua con triangolo vuoto).

## Pagina 32 — Relazioni tra Use Case: esempio

> Diagramma: Use Case Diagram.
> - Attori: Dipendente, Amministratore (Amministratore generalizza verso Dipendente, triangolo su Dipendente).
> - Dipendente — “Registrare ore di lavoro”.
> - “Registrare ore di lavoro” «include» “Selezionare progetto”.
> - “Registrare ore di lavoro” «include» “Salvare registrazione”.
> - “Aggiungere nota (opzionale)” «extend» “Registrare ore di lavoro”.
> - “Validare orario (opzionale)” «extend» “Registrare ore di lavoro”.
> - Amministratore — “Generare report”.
> - “Generare report individuale” e “Generare report di progetto” specializzano (generalizzazione) “Generare report”.

## Pagina 33 — Un altro esempio

> Diagramma: Use Case Diagram di un sistema di ordini.
> - Attori: Cliente (specializzato da Cliente registrato e Cliente ospite); Sistema di magazzino; Sistema di pagamento (esterno); Addetto vendite (specializzato da Responsabile vendite).
> - Cliente — “Effettuare ordine”.
> - “Effettuare ordine” «include» “Fornire dati cliente”; «include» “Selezionare prodotto”; «include» “Gestire pagamento”.
> - “Selezionare prodotto” «include» “Verificare disponibilità”; Sistema di magazzino — “Verificare disponibilità”.
> - Sistema di pagamento (esterno) — “Gestire pagamento”.
> - “Richiedere catalogo” «extend» “Effettuare ordine”; “Applicare codice sconto” «extend» “Effettuare ordine”.
> - “Effettuare ordine online” e “Effettuare ordine in negozio” specializzano “Effettuare ordine”.
> - “Effettuare ordine online” «include» “Autenticarsi”.
> - “Effettuare ordine in negozio” «include» “Registrare ritiro in negozio”; Addetto vendite — “Effettuare ordine in negozio”.

## Pagina 34 — Domanda 1: Cliente registrato e cliente ospite

❓ **Il Cliente registrato può effettuare tutte le operazioni disponibili al Cliente ospite? E viceversa?**

Nel diagramma, sia *Cliente registrato* sia *Cliente ospite* sono specializzazioni dell’attore *Cliente*.
- Entrambi ereditano le associazioni dell’attore Cliente, quindi possono partecipare allo Use Case **Effettuare ordine**.
- Il diagramma non attribuisce funzionalità aggiuntive a nessuno dei due.
- Non possiamo quindi affermare che il Cliente registrato possa fare più cose del Cliente ospite.

**Concetto chiave:** la generalizzazione consente agli attori specializzati di ereditare le associazioni dell’attore generale, ma non implica che una specializzazione abbia automaticamente più funzionalità dell’altra.

## Pagina 35 — Domanda 2: Chi può effettuare un ordine online?

❓ **Il Cliente ospite può effettuare un ordine online oppure deve necessariamente registrarsi?**

- **Risposta:**
  - Nel diagramma, *Effettuare ordine online* è una specializzazione dello Use Case *Effettuare ordine*.
  - Inoltre, *Effettuare ordine online* include lo Use Case *Autenticarsi*.
  - Tuttavia, il diagramma **non chiarisce se l’autenticazione richieda necessariamente un account registrato**.
  - Non possiamo quindi concludere con certezza che il Cliente ospite sia escluso dagli ordini online.

**Concetto chiave:** uno Use Case Diagram non specifica tutte le condizioni di accesso. Queste devono essere chiarite nei requisiti o nella descrizione testuale dello Use Case.

## Pagina 36 — Domanda 3: Come migliorare il diagramma

❓ **Se il requisito fosse «Solo i clienti registrati possono effettuare ordini online, mentre i clienti ospiti possono effettuare ordini esclusivamente in negozio», come modifichereste il diagramma?**

- **Risposta:**
  - Dovremmo rappresentare esplicitamente le diverse possibilità dei due attori.
  - **Cliente registrato** → *Effettuare ordine online* ed *Effettuare ordine in negozio*.
  - **Cliente ospite** → *Effettuare ordine in negozio*.
  - Entrambi rimangono specializzazioni dell’attore *Cliente*.
- Occorre però prestare attenzione alla generalizzazione tra gli Use Case: mantenendo l’associazione dell’attore generale *Cliente* con *Effettuare ordine*, la distinzione dei permessi potrebbe risultare poco chiara.

## Pagina 37 — Un altro esempio

> Diagramma: stesso Use Case Diagram di pagina 33, con modifiche evidenziate in rosso:
> - l’associazione Cliente — “Effettuare ordine” è barrata con una X rossa (rimossa);
> - nuove associazioni in rosso: Cliente registrato — “Effettuare ordine online”; Cliente registrato — “Effettuare ordine in negozio”; Cliente ospite — “Effettuare ordine in negozio”.

## Pagina 38 — Suggerimento 1 – Attori

- **Gli attori sono esterni al sistema**
  - aiutano a definire il **confine del sistema**;
  - di conseguenza, **il sistema stesso non può essere un attore**
- **Gli attori non devono essere necessariamente persone**
  - possono essere anche **sistemi esterni**;
  - Esempi: **sistema di autenticazione, sistema di fatturazione, servizio di pagamento, sistema di magazzino**
  - Esempi da non includere: DB del sistema, modulo di autenticazione interno, Backend / server applicativo
- **Un attore rappresenta un ruolo esterno che interagisce con il sistema, non una sua componente interna**
- **Se è una componente interna del sistema che stiamo modellando, non è un attore**

## Pagina 39 — Suggerimento 2 – Funzionalità periodiche

**Esempio:** eseguire un backup ogni notte.

- **Chi è l’attore dello Use Case?**
  - **Possibilità 1 – Chi beneficia dell’operazione**
    Ad esempio: **Amministratore di sistema**.
  - **Possibilità 2 – Chi attiva effettivamente l’operazione**
    Se l’esecuzione è avviata da un componente esterno, questo può essere modellato come attore, ad esempio **Scheduler / Servizio di pianificazione**.
- **Non modellare automaticamente “Tempo” come attore:** chiedersi sempre quale entità esterna interagisce realmente con il sistema.

## Pagina 40 — Provate con draw.io

- Andate su **https://draw.io**
- Collegatevi al vostro **Google Drive** o **GitHub**
- Fate clic su **«Crea nuovo diagramma»**
- Utilizzate gli **elementi UML**

> Diagramma: screenshot della finestra di dialogo Google Drive (“Crea nuovo diagramma”, “Apri diagramma esistente”, “Cambia utente”, “Cambia archiviazione”) e dell’editor draw.io vuoto (“Untitled Diagram”) con palette di forme UML a sinistra e pannello Diagram/Style a destra.

## Pagina 41 — Esercizio: Scrivere uno Use Case Diagram

**Restaurant Management System**

Ci è stato chiesto di realizzare un sistema per automatizzare le attività di gestione degli ordini e della fatturazione di un ristorante. Il sistema è distribuito: i camerieri dispongono di dispositivi portatili per raccogliere gli ordini. I dispositivi comunicano gli ordini alla cucina e alla cassa e ricevono in tempo reale informazioni sulla disponibilità dei diversi prodotti presenti nel menu. Una volta effettuato, un ordine può essere modificato dai clienti entro 5 minuti dall’inserimento oppure, trascorso tale intervallo, se l’ordine corrispondente non è ancora stato elaborato dal cuoco. Il sistema calcola i conti e viene inoltre utilizzato per gestire le prenotazioni dei tavoli. Le prenotazioni possono essere effettuate telefonicamente oppure tramite Internet.

## Pagina 42 — Restaurant Management System

> Diagramma: Use Case Diagram suddiviso in quattro aree.
>
> **Gestione prenotazioni**
> - Attori: Cliente (remoto), specializzato da Cliente telefonico e Cliente via Internet.
> - Cliente telefonico — “Prenotare tavolo telefonicamente”; Cliente via Internet — “Prenotare tavolo via Internet”.
> - “Prenotare tavolo telefonicamente” e “Prenotare tavolo via Internet” specializzano “Prenotazione tavolo”.
> - “Prenotazione tavolo” «include» “Verifica disponibilità tavoli”; «include» “Aggiornare calendario prenotazioni”.
> - “Modificare prenotazione” «extend» “Prenotazione tavolo”; “Cancellare prenotazione” «extend» “Prenotazione tavolo”.
>
> **Gestione ordini (sala)**
> - Attore: Cameriere — “Inserire ordine”; Cameriere — “Modificare ordine”.
> - “Inserire ordine” «include» “Verifica disponibilità piatti”; «include» “Inviare ordine alla cucina”; «include» “Inviare ordine alla cassa”.
> - “Applicare codice sconto” «extend» “Inserire ordine”.
> - “Modificare ordine” specializza “Inserire ordine”.
>
> **Gestione cucina**
> - Attore: Cuoco — “Consultare ordini”; Cuoco — “Aggiornare stato ordine”.
> - “Consultare ordini” «include» “Selezionare ordine”; «include» “Visualizzare dettaglio ordine”.
>
> **Gestione conti**
> - Attore: Addetto alla cassa — “Calcolare conto”; Addetto alla cassa — “Effettuare pagamento”.
> - “Calcolare conto” «include» “Visualizzare dettaglio ordine”; «include» “Generare conto”.
> - “Pagamento con carta” e “Pagamento in contanti” specializzano “Effettuare pagamento”.
> - Sistema di pagamento (esterno) — “Pagamento con carta”.

## Pagina 43 — Descrivere gli Use Case

- Per ogni Use Case si descrive il **flusso delle interazioni tra attore e sistema**
  La descrizione deve:
  - essere scritta dal **punto di vista dell’attore**;
  - specificare **come lo Use Case inizia e termina**;
  - descrivere il **flusso principale**;
  - descrivere eventuali **flussi alternativi**;
  - descrivere eventuali **eccezioni**;
  - chiarire il comportamento che il sistema deve offrire all’attore.
- **Il diagramma mostra la struttura; la descrizione testuale specifica il comportamento.**

## Pagina 44 — Descrivere gli Use Case

- **Non esiste un formato specifico per la descrizione di uno Use Case**
- In pratica, è utile seguire una convenzione.
  - **Titolo**
  - **Sintesi**
  - **Descrizione**
  - **Eccezioni**
  - **Estensioni**

## Pagina 45 — Titolo: Effettuare ordine (esempio di descrizione)

**Titolo:** Effettuare ordine

**Sintesi**
Questo use case descrive come un cliente effettua un ordine.

**Descrizione**
- **Passo 1.** Fornire i dati del cliente richiedendo almeno il nome e un numero di telefono. **[eccezione 1]**
- **Passo 2.** Selezionare i prodotti da ordinare.
- **Passo 3.** Effettuare il pagamento dell’ordine. **[estensione 1]**

**Eccezioni**
- **[eccezione 1]** Se non vengono forniti il nome e/o il numero di telefono, il sistema mostra un messaggio di errore.

**Estensioni**
- **[estensione 1]** Se il cliente lo richiede, il sistema mostra il catalogo dei prodotti disponibili.

## Pagina 46 — Descrizioni nel D1

- Nel D1 aggiungete anche esplicitamente:
  - **ID dello Use Case**
  - **RF collegati**
  - **Attore primario**
  - **Precondizioni**
  - **Postcondizioni**

## Pagina 47 — UC-04 Registrare un prestito (esempio di descrizione completa)

| Campo | Valore |
|---|---|
| **ID** | UC-04 |
| **Titolo** | Registrare un prestito |
| **RF collegati** | RF4 – Gestione dei prestiti |
| **Attore primario** | Operatore |
| **Obiettivo** | Registrare il prestito di un libro a un utente registrato. |
| **Precondizioni** | • L’utente è registrato nel sistema.<br>• Il libro è disponibile per il prestito. |
| **Postcondizioni** | • Il prestito è registrato nel sistema (utente, libro, data di inizio, data di scadenza).<br>• La disponibilità del libro viene aggiornata. |

**Sintesi**
Questo use case descrive come un operatore registra nel sistema il prestito di un libro a un utente registrato.

**Flusso principale**
1. L’operatore identifica l’utente registrato (es. ricerca per ID, tessera o nome).
2. L’operatore identifica il libro da concedere in prestito (es. scansione codice o ricerca nel catalogo).
3. Il sistema verifica che il libro sia disponibile.
4. Il sistema verifica i vincoli applicabili al prestito (es. numero massimo di prestiti).
5. L’operatore conferma la registrazione del prestito.
6. Il sistema registra il prestito associando utente, libro, data di inizio e data prevista di restituzione.
7. Il sistema aggiorna la disponibilità del libro.
8. Il sistema mostra una conferma del prestito con la data di scadenza.

**Flusso alternativo**

*A1 – Libro non disponibile*
1. Il sistema verifica che il libro non sia disponibile.
2. Il sistema mostra un messaggio con l’indisponibilità e propone di:
   - prenotare il libro (UC-02), oppure
   - visualizzare libri simili.
3. L’operazione di prestito non viene completata.

*A2 – Limite di prestiti raggiunto*
1. Il sistema verifica che l’utente abbia già raggiunto il numero massimo di prestiti consentiti.
2. Il sistema mostra un messaggio di errore e non consente la registrazione del prestito.

**Eccezioni**

*E1 – Utente non valido / non registrato*
1. Il sistema verifica che l’utente sia registrato.
2. Se l’utente non è registrato, il sistema mostra un messaggio di errore e non consente la registrazione del prestito.
3. L’operatore può registrare l’utente (UC-03) e ripetere l’operazione.

*E2 – Errore del sistema*
1. Si verifica un errore durante la registrazione del prestito.
2. Il sistema mostra un messaggio di errore generico.
3. Nessuna modifica viene effettuata sui dati di prestito e sulla disponibilità del libro.

## Pagina 48 — Esercizio

**Descrizione del progetto**

Si vuole realizzare un sistema per la prenotazione elettronica dei posti di un gruppo di sale cinematografiche.

Gli utenti possono acquistare biglietti per una specifica proiezione oppure acquistare abbonamenti, anche telefonicamente.

I pagamenti possono essere effettuati in contanti o con carta di credito.

Un supervisore può stampare la lista dei posti disponibili per una specifica proiezione e vedere lo stato delle vendite effettuate fino a quel momento.

Una segreteria aggiorna la lista delle proiezioni (aggiungendo/eliminando/…).

**Attori principali**
- Utente (Cliente)
- Operatore telefonico
- Supervisore
- Segreteria
- Sistema di pagamento con carta di credito
- Sistema telefonico (esterno)

**Richieste**
1. Identificare gli **Use Case** principali del sistema e i relativi attori.
2. Disegnare uno **Use Case Diagram** per il Reservation System.
3. Descrivere in dettaglio **uno degli Use Case** a **scelta**, includendo:
   - Titolo e **ID**
   - Attore primario
   - Obiettivo
   - Precondizioni
   - Postcondizioni
   - Flusso principale
   - Flussi alternativi (estensioni)
   - Eccezioni
4. Eventualmente identificare **altri Use Case** secondari se ritenuti rilevanti.

## Pagina 49 — Sequence Diagram: perché usarli?

- **Use Case Diagram**
  - mostrano **chi interagisce con il sistema** e **quali obiettivi/funzionalità** sono coinvolti;
  - forniscono una vista generale del sistema.
- **Sequence Diagram**
  - mostrano **come si sviluppa un’interazione nel tempo**;
  - rappresentano la **sequenza dei messaggi/interazioni** tra attori e sistema;
  - permettono di dettagliare uno **scenario di uno Use Case**.

**Use Case Diagram → cosa offre il sistema e a chi**
**Sequence Diagram → come si svolge uno specifico scenario**

## Pagina 50 — Sequence Diagram: lifeline

> Diagramma: Sequence Diagram con tre partecipanti e relative lifeline (linee tratteggiate verticali): Operatore (attore), Sistema EasyLib, Catalogo bibliografico (esterno). Nessun messaggio.

- Ogni partecipante è rappresentato da una lifeline (linea tratteggiata verticale).
- In questo scenario sono coinvolti un attore umano, il sistema EasyLib e un sistema esterno (catalogo bibliografico).

## Pagina 51 — Sequence Diagram: tempo

> Diagramma: stessi tre partecipanti (Operatore, Sistema EasyLib, Catalogo bibliografico (esterno)) con una freccia rossa verticale “Tempo” rivolta verso il basso.

**Time: either unspecified or in fixed units.**
Nel Sequence Diagram il tempo procede dall'alto verso il basso: le interazioni più in alto avvengono prima di quelle più in basso.

## Pagina 52 — Sequence Diagram: messaggi

> Diagramma: Sequence Diagram.
> 1. Operatore → Sistema EasyLib: “1: inserisce criteri di ricerca”
> 2. Operatore → Sistema EasyLib: “2: avvia ricerca”
> 3. Sistema EasyLib → Catalogo bibliografico (esterno): “3: cerca libri”
> 4. Catalogo bibliografico ⇢ Sistema EasyLib (risposta, tratteggiata): “4: risultati libri”
> 5. Sistema EasyLib ⇢ Operatore (risposta, tratteggiata): “5: mostra risultati”

**Messages:** a communication between two objects that conveys information with expectation that action will ensue.
Le frecce rappresentano i messaggi (richieste, risposte, scambio di dati) tra i partecipanti.

## Pagina 53 — Sequence Diagram: focus of control

> Diagramma: stesso Sequence Diagram di pagina 52 con barre di attivazione evidenziate su Operatore (durante i messaggi 1–2 e alla ricezione di 5), Sistema EasyLib (da 1 a 5) e Catalogo bibliografico (tra 3 e 4).

**Focus of Control:** period during which an object is performing an action either directly or through a subordinate procedure.
La barra di attivazione (focus of control) indica quando un partecipante sta eseguendo un'azione.

## Pagina 54 — Sequence Diagram: frammento alt

> Diagramma: Sequence Diagram.
> 1. Operatore → Sistema EasyLib: “1: inserisce criteri di ricerca”
> 2. Operatore → Sistema EasyLib: “2: avvia ricerca”
> 3. Sistema EasyLib → Catalogo bibliografico (esterno): “3: cerca libri”
> 4. Catalogo bibliografico ⇢ Sistema EasyLib: “4: risultati libri”
> - Frammento **alt**:
>   - **[libri trovati]**: Sistema EasyLib ⇢ Operatore: “5a: mostra lista dei libri”
>   - **[nessun libro trovato]**: Sistema EasyLib ⇢ Operatore: “5b: mostra messaggio "nessun libro trovato"”

Annotazioni:
- **Riquadro (Combined Fragment)** — Il riquadro racchiude un frammento di interazione con comportamento specifico. In questo caso è un frammento “alt” (alternative).
- **Guard condition** — L’espressione tra parentesi quadre è la condizione (guard) che deve essere vera per eseguire questo ramo.
- **alt (alternative)** — Rappresenta scenari alternativi mutuamente esclusivi. Viene eseguito solo uno dei rami, in base alla guard condition associata a ciascun ramo.

## Pagina 55 — Use Case Diagram vs Sequence Diagram

| | Use Case Diagram | Sequence Diagram |
|---|---|---|
| **Scopo** | Vista generale del sistema | Vista di uno specifico scenario |
| **Elementi principali** | Attori e Use Case | Partecipanti e lifeline |
| **Cosa rappresenta** | **Chi** interagisce con il sistema e **per quale obiettivo** | **Come** avviene l’interazione tra i partecipanti |
| **Tempo** | Non rappresenta l’ordine temporale | Il tempo scorre **dall’alto verso il basso** |
| **Relazioni / Notazione** | Associazione, «include», «extend», generalizzazione | Messaggi, activation, frammenti «alt», «opt», guard condition |
| **Risponde a** | **“Cosa offre il sistema e a chi?”** | **“Come si svolge questo scenario?”** |

> Diagramma (sinistra): Use Case Diagram — attore Operatore associato a “Ricercare libri”, “Registrare prestito”, “Restituire libro”.
> Diagramma (destra): Sequence Diagram Operatore / Sistema EasyLib / Catalogo bibliografico con messaggi 1: inserisce criteri, 2: avvia ricerca, 3: cerca libri, 4: risultati libri, 5: mostra risultati.

**Requisito** (es. RF3) → **Use Case** (es. UC-03) → **Scenario** (es. ricerca libri) → **Sequence Diagram** (dettaglio interazioni)

**Sono viste complementari dello stesso comportamento, a livelli di dettaglio diversi.**

## Pagina 56 — Activity Diagram

- Un **Activity Diagram** rappresenta il **flusso di attività di un processo o di uno scenario**, evidenziando: la **sequenza delle attività**;
  - **decisioni e percorsi alternativi**;
  - attività che possono essere eseguite **in parallelo**;
  - eventuali responsabilità dei diversi partecipanti.
- **Elementi principali**
  - **Initial / Final Node** — inizio e fine del flusso
  - **Action / Activity** — attività eseguita
  - **Control Flow** — ordine di esecuzione
  - **Decision / Merge** — percorsi alternativi e ricongiungimento
  - **Fork / Join** — attività parallele e sincronizzazione
  - **Guard Condition** — condizione che determina un percorso
  - **Swimlane** — responsabilità dei diversi partecipanti

## Pagina 57 — Sequence Diagram vs Activity Diagram

**Sequence Diagram →** chi interagisce con chi e in quale ordine

**Activity Diagram →** come fluisce il processo tra attività, decisioni e parallelismi

- In un Activity Diagram può essere utile evidenziare **chi è responsabile dell’esecuzione delle diverse attività**.
  - Le **swimlane** suddividono il diagramma in aree, ciascuna associata a un **partecipante, ruolo o sistema**.
  - **La posizione di un’attività nella swimlane indica chi è responsabile della sua esecuzione.**

## Pagina 58 — Activity Diagram: esempio EasyLib

> Diagramma: Activity Diagram con tre swimlane.
> - **Operatore:** nodo iniziale → “Inserire criteri di ricerca” → “Avviare la ricerca” →
> - **Sistema EasyLib:** “Inviare richiesta di ricerca” →
> - **Catalogo bibliografico:** “Cercare libri nel catalogo” → “Restituire risultati” →
> - **Sistema EasyLib:** “Ricevere risultati” → decisione “Libri trovati?”
>   - [sì] → “Visualizzare lista risultati” → nodo finale
>   - [no] → “Visualizzare messaggio “Nessun libro trovato”” → nodo finale

## Pagina 59 — Activity Diagram: elementi annotati

> Diagramma: stesso Activity Diagram di pagina 58, con annotazioni sugli elementi.

Annotazioni:
- **Swimlane** — Suddivide il diagramma in aree, una per ciascun partecipante o ruolo. La posizione di un’attività indica chi ne è responsabile.
- **Action / Activity** — Rappresenta un’attività o un’operazione da eseguire.
- **Control Flow** — Indica l’ordine di esecuzione tra le attività.
- **Initial Node** — Indica l’inizio del flusso.
- **Decision** — Rappresenta un punto di scelta tra percorsi alternativi. Le guard condition (es. [sì]/[no]) indicano la condizione.
- **Final Node** — Indica la fine del flusso.

**Legenda degli elementi**

| Simbolo | Elemento | Significato |
|---|---|---|
| ● | **Initial Node** | Inizio del flusso |
| ◉ | **Final Node** | Fine del flusso |
| rettangolo arrotondato | **Action / Activity** | Attività o operazione |
| → | **Control Flow** | Ordine di esecuzione |
| ◇ | **Decision** | Scelta tra percorsi alternativi (una condizione in uscita) |
| [condizione] | **Guard Condition** | Condizione che determina il percorso |
| rettangolo | **Swimlane** | Responsabilità di un partecipante (o ruolo) |

## Pagina 60 — State Machine Diagram

*EasyLib: Ciclo di vita di un prestito*

> Diagramma: State Machine.
> - Stati:
>   - **Attivo** — Prestito in corso (libro disponibile per l’utente)
>   - **Scaduto** — Prestito oltre la data di scadenza
>   - **Restituito** — Prestito concluso (libro di nuovo disponibile)
> - Transizioni:
>   - Stato iniziale → Attivo: `registrazione prestito [libro disponibile] / crea prestito`
>   - Attivo → Attivo (self-loop): `proroga richiesta [proroghe < max] / aggiorna data scadenza`
>   - Attivo → Restituito: `restituzione / chiudi prestito`
>   - Attivo → Scaduto: `data scadenza superata`
>   - Scaduto → Restituito: `restituzione / chiudi prestito`
>   - Restituito → stato finale

## Pagina 61 — State Machine Diagram: elementi annotati

> Diagramma: stessa State Machine di pagina 60 (ciclo di vita di un prestito: Attivo, Scaduto, Restituito), con annotazioni sugli elementi.

Annotazioni:
- **Initial State** — Indica l’inizio del diagramma.
- **Transition** — Passaggio da uno stato a un altro.
- **Event** — Evento che scatena la transizione (es. registrazione prestito).
- **Guard Condition** — Condizione che deve essere vera per abilitare la transizione.
- **Action** — Azione eseguita come effetto della transizione.
- **Final State** — Indica la fine del diagramma.

**Legenda degli elementi**

| Simbolo | Elemento | Significato |
|---|---|---|
| ● | **Initial State** | Stato iniziale del diagramma |
| ◉ | **Final State** | Stato finale del diagramma |
| rettangolo arrotondato | **State** | Condizione in cui si trova l’entità (prestito) |
| → | **Transition** | Passaggio da uno stato a un altro |
| evento | **Event** | Evento che scatena la transizione |
| [condizione] | **Guard Condition** | Condizione che deve essere vera |
| / azione | **Action** | Azione eseguita come effetto della transizione |

**In sintesi:**
- Il diagramma mostra gli **stati possibili** di un **prestito** e come si passa da uno stato all’altro in risposta a **eventi**.
- Le **transizioni** possono avere **condizioni** (guard) e azioni.
- È **diverso dall’Activity Diagram**, che invece modella il flusso di attività di un processo.
- In questo esempio, gli stati rappresentano **condizioni stabili** del prestito (attivo, scaduto, restituito).

## Pagina 62 — Dal requisito ai diagrammi (vista d’insieme)

**1. Requisito funzionale** — *Cosa deve fare il sistema?*
Esempio (EasyLib)
**RF4 – Gestione dei prestiti**
Il sistema deve permettere di registrare il prestito di un libro a un utente registrato, verificando la disponibilità del libro e i vincoli applicabili.

**2. Use Case Diagram** — *Chi interagisce con il sistema e per quale obiettivo?*
> Diagramma: attore Operatore associato a “Ricercare libri”, “Registrare un prestito” (evidenziato), “Restituire un libro”.

**3. Descrizione testuale dello Use Case** — *Che cosa accade nello scenario?*

| Campo | Valore |
|---|---|
| ID | UC-04 |
| Titolo | Registrare un prestito |
| Attore primario | Operatore |
| Precondizioni | Utente registrato |
| Postcondizioni | Prestito registrato |

Flusso principale (estratto)
1. L’operatore identifica l’utente.
2. L’operatore identifica il libro.
3. Il sistema verifica la disponibilità.
4. Il sistema verifica i vincoli.
5. L’operatore conferma il prestito.
6. Il sistema registra il prestito.
…

Flussi alternativi (estratto)
- A1 – Libro non disponibile
- A2 – Limite di prestiti raggiunto
- …

**4. Sequence Diagram** — *Come avvengono le interazioni nel tempo?*
> Diagramma: partecipanti Operatore, Sistema EasyLib, Catalogo bibliografico.
> 1: inserisce dati utente (Operatore → EasyLib); 2: inserisce dati libro (Operatore → EasyLib); 3: verifica disponibilità (EasyLib → Catalogo); 4: disponibilità libro (Catalogo ⇢ EasyLib); 5: conferma prestito (Operatore → EasyLib); 6: conferma con scadenza (EasyLib ⇢ Operatore).
> Frammento **alt**: [libro disponibile] → “registra prestito e aggiorna disponibilità” (self-message EasyLib); [libro non disponibile] → “mostra messaggio di indisponibilità”.

**5. Activity Diagram** — *Come fluisce il processo?*
> Diagramma: inizio → “Identificare utente” → “Identificare libro” → “Verificare disponibilità” → decisione:
> - [non disponibile] → “Mostrare messaggio di indisponibilità” → fine
> - [disponibile] → “Verificare vincoli” → decisione: [vincoli ok] → “Registrare prestito” → fine; [vincoli non ok] → torna a “Mostrare messaggio di indisponibilità”.

**6. State Machine Diagram (entità: Prestito)** — *Come cambia lo stato di un’entità?*
> Diagramma: inizio → (registrazione prestito) → Attivo; Attivo self-loop “proroga richiesta [proroghe < max] / aggiorna scadenza”; Attivo → (restituzione / chiudi prestito) → Restituito; Attivo → (data scadenza superata) → Scaduto; Scaduto → (restituzione / chiudi prestito) → Restituito; Restituito → fine.

**In sintesi:**
- Un Use Case può essere descritto con diverse **rappresentazioni complementari**, ognuna con un livello di dettaglio diverso.
- **Non è necessario usare tutti i diagrammi** per ogni Use Case: si scelgono quelli utili a chiarire il **comportamento** richiesto.
- Insieme, queste rappresentazioni aiutano a capire cosa fa il sistema, chi lo usa, come si svolge il processo, come avvengono le interazioni e come cambia lo stato delle entità coinvolte.

## Pagina 63 — Adesso tocca a voi! Descrivete e modellate gli Use Case del vostro progetto

*Dal requisito alla rappresentazione del comportamento*

**1. Cosa dovete fare**
1. Partite dai **requisiti funzionali** del D1.
2. Individuate attori e Use Case.
3. **Disegnate** uno o più Use Case Diagram.
4. **Descrivete testualmente gli Use Case significativi:** pre/postcondizioni, flusso principale, alternative, eccezioni.
5. Quando utile, aggiungete diagrammi per chiarire il comportamento:
   - **Sequence** → interazioni nel tempo
   - **Activity** → flusso del processo
   - **State Machine** → ciclo di vita/stati di un’entità
6. **Verificate** la coerenza e la **traceability** con RF, User Story, Acceptance Criteria, mockup e User Flow.

**2. Quale diagramma usare?**

| Diagramma | Domanda a cui risponde |
|---|---|
| Use Case Diagram | Chi usa il sistema e per quale obiettivo? |
| Sequence Diagram | Come interagiscono i partecipanti in uno scenario? |
| Activity Diagram | Come fluisce il processo tra attività e decisioni? |
| State Machine Diagram | Come cambia nel tempo lo stato di un’entità? |

> Diagramma: quattro mini-schemi generici (Attore con tre Use Case; lifeline Attore/Sistema/Altro con frammento alt; Attività → Decisione → due Attività → fine; Stato A → Stato B, Stato C, stato finale).

**3. Esempio trasversale (EasyLib)**

**RF4 – Gestione prestiti**
Il sistema deve permettere di registrare il prestito di un libro a un utente registrato, verificando la disponibilità del libro e i vincoli applicabili.

| Diagramma | Contenuto |
|---|---|
| Use Case | UC-04 Registrare un prestito |
| Sequence | Operatore ↔ EasyLib |
| Activity | Processo di registrazione |
| State Machine | Attivo → Scaduto / Restituito |

⚠ **Non dovete usare tutti i diagrammi per ogni Use Case.**
Usate quelli che aggiungono informazione utile e aiutano a eliminare ambiguità.

**4. Regole importanti**
- ✅ **Partite sempre dai requisiti** — Non inventate funzionalità per rendere il diagramma più ricco.
- ✅ **Mantenete la traceability** — RF → UC → descrizione/scenario → diagrammi
- ✅ **Modellate il comportamento, non l’implementazione** — Nel D1 evitate database, classi, microservizi e dettagli architetturali non ancora definiti.

**Obiettivo** — Rendere i requisiti comprensibili, coerenti, verificabili e sufficientemente dettagliati per diventare la baseline del D1.
