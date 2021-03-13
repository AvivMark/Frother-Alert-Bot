const rp = require('request-promise');
const $ = require('cheerio');
const puppeteer = require('puppeteer');

const stockScrapper = (elementStock) => {
    const outOfStock = []
    $('.unavailable',elementStock).each(function(){
        outOfStock.push(this);
    })
   return outOfStock;
}

module.exports = stockScrapper