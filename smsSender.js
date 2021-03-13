const path = require('path');
require('dotenv').config({
  path: path.resolve('config.env'),
});
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sender = () => {
    client.messages
    .create({
        body: ' התווסף המלאי של המקציפי חלב לך תבדוק',
        from: process.env.TWILO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER
    })
    .then(message => console.log(message.sid));
}


  module.exports = sender