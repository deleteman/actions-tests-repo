const {stringToCamelCase} = require("../sample1")
const assert = require("assert")

describe("Sample files", _ => {


    describe("Sample 1: stringToCamelCase ", _ => {
        
        it("turn any number of whitespace characters into the '_' character", done => {
            let input = "hello world, this is  double"
            let output = stringToCamelCase(input)

            assert.equal(output, "HelloWorld,ThisIsDouble")
            done()
        })
    })
})