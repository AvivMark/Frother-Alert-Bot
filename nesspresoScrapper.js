const cheerio = require('cheerio');
const url = 'https://www.nespresso.com/il/en/orders/accessories/original';
const puppeteer = require('puppeteer');
const notify = require('./notify');

const nespressoScarpper = () =>{
  puppeteer
    .launch({
      args: ['--user-agent=008']
      })
    .then(function(browser) {
      return browser.newPage();
    })
    .then(function(page) {
      return page.goto(url).then(function() {
        return page.content();
      });
    })
    .then(function(html) {
      notify(html);
    })
    .catch(function(err) {
      //handle error
      console.log(err)
    });
}

module.exports = nespressoScarpper