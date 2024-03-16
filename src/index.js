const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    const expression = 'faker.person.firstName()'
    const value = eval(expression)
    res.send(`Hello ${value}!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
