const request = require('superagent')
const express = require('express')
const mongodb = require('mongodb');
const config = require('./config.js')

const app = express()
const client = mongodb.MongoClient;

client.connect(config.DB_URL, function(err, db) {
    if(err) {
        console.log('database is not connected')
    }
    else {
        console.log('connected!!')
    }
});

app.get('/', (req, res) => {
  request
    .get(`https://api.songkick.com/api/3.0/metro_areas/6404-us-denver/calendar.json?apikey=${config.SONGKICK_API_KEY}`)
    .then(superRes => {
      const events = superRes.body.resultsPage.results.event
      console.log('RESPONSE', events)
      res.send(events)
    })
})

app.listen(8080, () => {
  console.log('listening on port 8080, yo')
})
