
function map(arr, func) {

    const returnArray = new Array(arr.length)
    for(i = 0; i < arr.length; i++) {
        returnArray[i] = func(arr[i])
    }
return returnArray
}

// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const numberArray2 = [2, 3, 5, 8, 10]
const newNumberArray2 = map(numberArray2, x => x % 2)
console.log(newNumberArray2) // räknar rest av ett tal som delas på 2
console.log(numberArray2)