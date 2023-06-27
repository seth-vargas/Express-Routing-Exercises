const express = require("express")
const ExpressError = require("./expressError")

const { mean, median, mode, stringsToInts } = require("./operations")

const app = express()

app.get("/mean", (req, res, next) => {
    const query = req.query.nums

    try {
        query.split(",")
    } catch (err) {
        return next(new ExpressError("nums are required"), 400)
    }

    try {
        const nums = stringsToInts(query.split(","))
        return res.json({ response: { method: "mean", value: mean(nums) } })
    } catch (err) {
        return next(err)
    }
})

app.get("/median", (req, res, next) => {
    const query = req.query.nums

    try {
        query.split(",")
    } catch (err) {
        return next(new ExpressError("nums are required"), 400)
    }

    try {
        const nums = stringsToInts(query.split(","))
        res.json({ response: { method: "median", value: median(nums) } })
    } catch (err) {
        return next(err)
    }
})

app.get("/mode", (req, res, next) => {
    const query = req.query.nums

    try {
        query.split(",")
    } catch (err) {
        return next(new ExpressError("nums are required"), 400)
    }

    try {
        const nums = stringsToInts(query.split(","))
        res.json({ response: { method: "mode", value: mode(nums) } })
    } catch (err) {
        return next(err)
    }
})

app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, () => {
    console.log("Server is live at http://localhost:3000")
})
