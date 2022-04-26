const csv = require('csv-parse')
const fs = require('fs')
const file = './users.csv'

const reader = fs.createReadStream(file)
const emails: string[] = []

reader.on('data', (data) => {
  // Verificar emails duplicados.
  data.forEach(row => {
    const email: string | undefined = row[0]
    if(!emailExists(email)){
      emails.push(email)
    }
  });
})

reader.on('end', () => {
    console.log(emails);
  })

const emailExists = (newEmail: string) => {
  let exists: boolean = false

  emails.forEach(email => {
    if(email == newEmail){
      exists = true
    }
  });

  return exists
}