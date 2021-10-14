// Code your solution here
function findMatching(array,string){
    return array.filter(givenItem => givenItem.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array,string){
    const fuzzyArray = array.filter(givenItem => givenItem.startsWith(string))
    return fuzzyArray
}


function matchName(array,string){
    const matchedArray = array.filter(givenDriver => givenDriver.name === string)
    return matchedArray
}