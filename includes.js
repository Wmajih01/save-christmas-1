
function includes(arr, item) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === item) {return 'true'}
    }
return "false"
}

const items = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(includes(items, 'Lego')) // Should be true
console.log(includes(items, 'Teddybear')) // Should be true
console.log(includes(items, 'Laser sword')) // Should be false
console.log(includes(items, 'Playstation')) // Should be false
