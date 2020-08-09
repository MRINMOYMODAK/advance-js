const numbers = [3,4,5,6,8];
// const output = [];

// for (let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);
// function square(element){
//     return element*element;
// }
// const result =  numbers.map (function(element){
//     return element*element ;
// })
//console.log (result);


// const hello = element=> element*element;
// console.log(hello);

// const result2 = numbers.map(x=>x*x);
// console.log (result2);

const bigger = numbers.filter(x=>x<5);
console.log (bigger);