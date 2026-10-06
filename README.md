# Alfonsina, corridora
I sorgenti del sito web dello spettacolo Alfonsina, Corridora.

## Modificare le date
Aprire index.html e cercare il commento DATE. Ogni anno ha un blocco tour__year e ogni data una voce li. Il contenuto è visibile anche senza JavaScript.

## Formspree
Nel tag form inserire il proprio endpoint nell'attributo data-formspree-endpoint, ad esempio https://formspree.io/f/abcdefgh. Il modulo invia nome, email, telefono e messaggio, gestisce conferma ed errore. Se cambi endpoint, aggiorna sia action sia data-formspree-endpoint. Endpoint configurato: https://formspree.io/f/xeaeoajz. Verificare il servizio con un invio reale dopo la configurazione.

## File
- index.html: contenuti, date e configurazione Formspree
- css/style.css: layout e stili per sezioni, mobile e accessibilità
- css/fonts.css: font locali recuperati dall'originale
- css/icons.css: icone originali della navigazione, con font locale
- js/main.js: menu, galleria e invio Formspree
- assets/: immagini e font locali

## Limiti della prima versione
Replica strutturale dell'originale, con HTML ricostruito: il confronto visivo desktop/mobile resta da effettuare. Lo sfondo della navigazione originale non era scaricabile (HTTP 403) ed è sostituito da un colore chiaro. YouTube, Facebook, il PDF su Dropbox e Formspree restano servizi esterni. Il link PDF è conservato ma non verificato. Nessun messaggio di prova è stato inviato. Non è stata modificata la configurazione del dominio originale.
