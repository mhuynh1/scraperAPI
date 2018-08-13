const express = require('express');
const app = express();
const cheerio = require('cheerio')
const request = require('request')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.listen(port, () => {
    console.log(`scraping by on ${port}`)
});


request('https://www.google.com/search?q=orijen+dog+food&source=lnms&tbm=shop&sa=X&ved=0ahUKEwjWmL6UpencAhVB71QKHVtyBREQ_AUICigB&biw=1330&bih=895', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    console.log(html);
  }
});


