function filter(arr, func) {

    let returningFilter = []

    for(i = 0; i < arr.length; i++) {
        if(func(arr[i]) === true) {
            returningFilter.push(arr[i])
        }
    }
return returningFilter
}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filteredNewNumbers = filter(newNumbers, x => x >= 5)
console.log(filteredNewNumbers)