const scrapper = require('./nesspresoScrapper');

console.log('Bot Started')

setInterval(() => {
    scrapper();
}, 600000);