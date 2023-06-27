/* File that exports each statistical function */

const ExpressError = require("./expressError")

/* returns the average of nums */

function mean(nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    return sum / nums.length
}


/* returns the midpoint of nums */

function median(nums) {
    const mid = Math.floor(nums.length / 2)
    const arr = [...nums].sort((a, b) => a - b)
    return nums.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2
}


/* returns the most frequent num in nums */

function mode(nums) {
    const counts = {};
    for (const value of nums) {
        counts[value] = (counts[value] || 0) + 1;
    }
    return parseInt(Object.keys(counts).find((key) => counts[key] === Math.max(...Object.values(counts))));
}

/* converts stringy query to an array of ints */

function stringsToInts(query) {
    const nums = []

    for (let str of query) {
        const newNum = parseInt(str)
        if (!newNum) {
            throw new ExpressError(`${str} is not a number`, 400)
        }
        nums.push(parseInt(str))
    }

    return nums
}

module.exports = { mean, median, mode, stringsToInts }