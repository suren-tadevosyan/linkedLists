const arr = [1,2,3,1,4,5,2,1,5,3]

function removeDuplicates(arr){
    const unique = new Set(arr)
    return unique
}

console.log(removeDuplicates(arr));