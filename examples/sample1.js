/*
include content from comp1/index.js
*/
const WSREmover = require("../components/comp1/index")


/**
 * Example of a function using the component whitespace remover.
 * 
 * We'll turn a string into a camel case variable name
 */
function stringToCamelCase(str) {

    let varName = WSREmover(
        str.split(" ").map( p => p.charAt(0).toUpperCase() + p.toLowerCase().slice(1)).join(" ")
        )

    return varName
}


module.exports = {
    stringToCamelCase
}