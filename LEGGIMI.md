# Alfonsina, corridora — prima replica statica

Caricare il contenuto di questa cartella nella document root del sito sul server Nginx gestito con SpinupWP. Non occorrono PHP, database, npm o compilazione. Configurare dominio e HTTPS nel pannello prima di spostare i DNS.

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

## SEO e dominio di produzione
Titolo, descrizione, canonical, Open Graph, Twitter Card e dati strutturati JSON-LD sono nel head di index.html. L’immagine di condivisione è una foto di scena già presente. robots.txt e sitemap.xml sono inclusi.
Gli URL assoluti puntano a https://alfonsinacorridora.it/: è il dominio di produzione previsto, non quello dell’anteprima privata. Attivare il certificato HTTPS sul server prima del passaggio definitivo e impostare il redirect permanente da HTTP a HTTPS e dalle eventuali varianti www all’URL canonico. Se il dominio definitivo cambia, aggiornare gli URL in index.html, robots.txt e sitemap.xml.
Le immagini social diventeranno disponibili al loro nuovo URL dopo il caricamento sul dominio definitivo. Il test dell’URL HTTPS attuale non è riuscito da questo ambiente; la configurazione sul nuovo server resta da verificare. Non sono stati creati dati Event per le date: mancano dettagli quali orari e indirizzi completi.

## Foto e testi alternativi
Le 17 immagini hanno nomi descrittivi; le 14 immagini nei tag img hanno testi alt specifici con i nomi approvati dei performer. Gli sfondi decorativi restano nel CSS. Le immagini originali non sono state ricomprese o alterate.
