const request = require('superagent')
const express = require('express')
const app = express()
const config = require('./config.js')

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
