

const fs  = require('fs')

const readData = fs.readFileSync('task.json')

const taskObj = JSON.parse(readData.toString())

taskObj.name = "Suman Bhattara"
taskObj.age = 20

const taskJSON = JSON.stringify(taskObj)
fs.writeFileSync('task.json' , taskJSON)