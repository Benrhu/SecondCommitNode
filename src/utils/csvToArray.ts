const csv = require('csv-parse')
const fs = require('fs')
const users = new Array
const sinDuplicates = []
const file = './users.csv'

const reader = fs.createReadStream(file)

reader.on('data', function(chunk) {
    console.log(chunk)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  })