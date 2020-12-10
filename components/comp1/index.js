
function removeWhiteSpaces(str, replacement = '') {
    return str.replace(/[ ]+/g, replacement)
}

module.exports = removeWhiteSpaces