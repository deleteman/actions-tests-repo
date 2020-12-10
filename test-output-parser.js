const { fail } = require("assert")
const fs = require("fs")
const promisify = require("util").promisify
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

let input = process.argv.slice(2)
console.log(input)

const jsonInput = JSON.parse(input.join(""))

const EXAMPLE_FOLDER = 'examples/'
const WARNING_MSG = "/** ::DeprecationWarning:: The tests for this sample are now failing **/\n" 

if(jsonInput.failures.length > 0) {
    console.log("There were errors")

    jsonInput.failures.forEach( async f => { //iterate over the failed messages
        let failingSampleFN = f.fullTitle.split(":")[1]
        let failingFilePath = EXAMPLE_FOLDER + failingSampleFN
        console.log("Looking into: " + failingFilePath)
        try {
            let fileContent = await readFile(failingFilePath)
            fileContent = fileContent.toString()

            if(fileContent.indexOf(WARNING_MSG) == -1) { //we've not added a warning yet
                fileContent = WARNING_MSG + fileContent
                await writeFile(failingFilePath, fileContent)
                console.log("The file was updated with the proper warning")
           } else {
                console.log("The file already has the warning message")
            }
        } catch (e) {
            throw new Error(e)
        }
    })
} else {
    console.log("No errors found!")
}
