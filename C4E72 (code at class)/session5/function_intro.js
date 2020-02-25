//define
//parameter
// function greeting(name){
//     console.log('Hello '+name);
// }
//call
// greeting('Hieu');
// greeting('Nam')

// function addition(a, b){
//     let c=a+b;
//     return c;
// }
// let result= addition
// let total=result(2,2);

// console.log(total);
function loop(arr, action){
    for(let i=0;i<arr.length;i++){
        action(i,arr[i])
    }
}

function action2(item, index){
    string=String(item);
    console.log(string)
}

//loop([0,1,2,3,4],action2) //callback

// setTimeout(action, 2000);
// function action(i, item){
//     console.log(i, item);
// }

// array=['a', 'b', 'c'];
// array.forEach(function(item, i){
//     console.log(i, item);
// })
// array.filter()
// array.map()
arr=[6,9,7,2,5,6]

let total= arr.reduce(function(total, x){
    return total +x
},0)
console.log(total)