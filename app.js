const scrapper = require('./nesspresoScrapper');


setInterval(() => {
    scrapper();
}, 600000);