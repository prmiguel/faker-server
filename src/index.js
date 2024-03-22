const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
app.use(express.json());
const port = process.env.PORT || 3000

const temp = {
    firstName: "faker.person.firstName()",
    lastName: "faker.person.firstName()",
    email: "faker.person.firstName()"
}

app.get('/', (req, res) => {

    const result = {}
    for (let prop in temp) {
        result[prop] = eval(temp[prop])
        console.log(prop)        
    }
    const expression = 'faker.person.firstName()'
    const value = eval(expression)
    res.send(result)
})

app.post("/", (req, res) => {
    iterateObject(req.body)
    res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

var iterateObject = function(object) {
    for(var key in object) {
        if(typeof object[key] === 'object' && object[key] !== null) {
            iterateObject(object[key])
        } else {
            object[key] = eval(object[key])
        }
    }
};