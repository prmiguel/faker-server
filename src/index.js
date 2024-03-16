const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`Hello ${faker.person.firstName()}!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
