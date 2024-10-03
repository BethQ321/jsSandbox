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

const today = new Date();
const thisYear = today.getFullYear();

console.log(thisYear);