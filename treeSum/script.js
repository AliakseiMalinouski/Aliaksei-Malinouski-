"use strict"

let arr =  [ 5, 7, 
        [ 4, [2], 8, [1,3], 2 ], 
        [ 9, [] ], 
        1, 8
      ]
let sum = 0;
arr = arr.flat(Infinity);
function treeSum() {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 0) {
            return 0;
        }
        sum += arr[i];
    }
    return sum;
}
console.log(treeSum())
