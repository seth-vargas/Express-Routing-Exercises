/* Tests for the operations file */

const { describe } = require("node:test")
const { mean, median, mode } = require("./operations")

describe("mean", () => {
    test("mean should return the average of nums", () => {
        const nums = [1, 2, 3, 4]
        expect(mean(nums)).toEqual(2.5)
    })
})

describe("median", () => {
    test("median should return the midpoint of nums", () => {
        const nums = [1, 2, 3, 4, 5]
        expect(median(nums)).toEqual(3)
    })

    test("median should sort nums and then return the midpoint", () => {
        const nums = [3, 1, 4, 2, 5]
        expect(median(nums)).toEqual(3)
    })

    test("median should return a decimal if nums.length is even", () => {
        const nums = [1, 2]
        expect(median(nums)).toEqual(1.5)
    })
})

describe("mode", () => {
    test("mode should return the most frequent num in nums", () => {
        const nums = [1, 2, 3, 5, 2]
        expect(mode(nums)).toEqual(2)
    })

    test("mode should return 1 if frequency is the same", () => {
        const nums = [5, 4, 3, 2, 1]
        expect(mode(nums)).toEqual(1)
    })
})