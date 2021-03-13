
const stockScrapper = require('./stockScrapper');
const sender = require('./smsSender');
const cheerio = require('cheerio');


const notify = (html) => {
    const $ = cheerio.load(html);
    const products = [];
    var outOfStock = [];
    $('section').each((index, element) => {
      if( $('h3',element).text().includes('Frothers') || $('h3',element).text().includes('frothers'))
      {
        $('article',element).each((index, article) => {
          outOfStock.push(stockScrapper($('a',article).html()));
        })
      }
    })
    
    //console.log(outOfStock);
    if(outOfStock.length < 4){
      sender();
    }
}

module.exports = notify