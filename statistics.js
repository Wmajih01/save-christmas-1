function max(arr) {
    let big = 0
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > big) {
            big = arr[i]
        }
    }
return big
}

function min(arr) {
    let small = 100 // working on finding out how to set unspecified huge infinite number
    for(i = 0; i < arr.length; i++) {
        if(arr[i] < small) {
            small = arr[i]
        }
    }
return small
}

function mean(arr) {
    let result = 0
    
    for (let i = 0; i < arr.length; i++) {
       result = result + arr[i];
    }
return (result / arr.length)
}

console.log(max([0, 1, 2, 3, 4, 5]))
console.log(min([0, 1, 2, 3, 4, 5]))
console.log(mean([0, 1, 2, 3, 4, 5]))