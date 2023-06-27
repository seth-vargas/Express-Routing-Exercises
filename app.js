const express = require("express")
const { mean, median, mode, stringsToInts } = require("./operations")

const app = express()

app.get("/mean", (req, res) => {
    const query = req.query.nums.split(",")
    const nums = stringsToInts(query)
    res.json({ response: { method: "mean", value: mean(nums) } })
})

app.get("/median", (req, res) => {
    const query = req.query.nums.split(",")
    const nums = stringsToInts(query)
    res.json({ response: { method: "median", value: median(nums) } })
})

app.get("/mode", (req, res) => {
    const query = req.query.nums.split(",")
    const nums = stringsToInts(query)
    res.json({ response: { method: "mode", value: mode(nums) } })
})

// TODO: handle NaN errors. For instance, /mean?nums=foo,2,3 should respond with a 400 Bad Request 
// status code and a response that saying something like: foo is not a number.

// TODO: handle empty input: /mean without passing any nums should respond with a 400 Bad Request 
// status code saying something like nums are required.

// TODO: make sure you have unit tests for mean, median and mode.

app.listen(3000, () => {
    console.log("Server is live at http://localhost:3000")
})
