const request = require('superagent')
const app = express()
const config = require('./config.js')
const args = process.argv.slice(2)

if (args.length !== 2) {
  console.log('please provide locationType and locationID arguments. locationType must either be venues or metro_areas')
  return
}

const locationType = args[0]
const locationID = args[1]

// 6404-us-denver // denver metro ID
// 10459-bluebird-theater // bluebird venue id

// https://api.songkick.com/api/3.0/metro_areas/{metro_area_id}/calendar.json?
// https://api.songkick.com/api/3.0/venues/{venue_id}/calendar.json?

request
  .get(`https://api.songkick.com/api/3.0/${locationType}/${locationID}/calendar.json?apikey=${config.SONGKICK_API_KEY}`)
  .then(res => {
    console.log('RESPONSE', res.body.resultsPage.results.event)
  })
