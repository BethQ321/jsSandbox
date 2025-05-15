//Groups of nodes

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });



//"Object basics" problem (towards bottom of page)
// const array = [1, 2, 3, 4, 5];

// const filteredArray = array.filter((num) => {
//   return num % 2 === 0;
// });

// const sum = filteredArray.reduce((total, num) => {
//   return total += num*3;
// }, 0);

// console.log(sum);

// This method didn't work because the reduce array needs a return
// for each number and the array only had a return for even numbers
// **Fixed it with an else statement!**
// const sum = array.reduce((total, currentItem) => {

//   if(currentItem % 2 === 0) {
//     total += currentItem*3;
//     return total;
//   } else {
//     return total;
//   }
// }, 0);

// console.log(sum);

// function sumOfTripledEvens(array) {
//   return array
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 3)
//     .reduce((acc, curr) => acc + curr);
// }

// console.log(sumOfTripledEvens(array));

// const today = new Date();
// const thisYear = today.getFullYear();

// console.log(thisYear);

// console.log("hello there!!")

// function sumRange(num) {
//     if(num === 1) return 1;
//     return num + sumRange(num - 1);
// }

// let output = sumRange(5);
// console.log(output);

// function power(base, exp) {
//     if(exp === 0) {
//         return 1
//     }
//     return base * power(base, (exp - 1));
// }

// let output = power(2, 4);
// console.log(output);


// function factorial(num) {
//     if(num === 1) return 1;
//     return num * factorial(num - 1);
// }

// let output = factorial(5);
// console.log(output);

////////////////////////// Example 4
// function all(arr, fn) {
//     if ???????????????????????????????
// }

// const allAreLessThanSeven = all([1, 2, 9], function(num) {
//     return num < 7;
// })


// console.log(allAreLessThanSeven);
////////////////////////////

//const arr = []
function fibsRec(num) {

    if (num === 1) {
        return [0];
    } else if (num === 2) {
        return [0, 1];
    }

    let sum = fibsRec(num - 1);
    sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
    return sum;
}
//console.log(fibsRec(5));

// num = 5 
//     num = 4 
//         num = 3 
//             num = 2 
//             [0, 1]
//         [0, 1, 1]
//     [0, 1, 1, 2]
// [0, 1, 1, 2, 3]