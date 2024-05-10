// function stringson(str) {
//     return str.split('').reverse().map(Number);
// }

// console.log(stringson("34567"));



// 2
// let num = 3
// let num2 = '3'

// if(num === num2){
//     console.log(true)
// } else {
//     console.log(false)
// }


// let n = +prompt('sonni kiriting')

// function recursive(n) {
//     if (n === 1) {
//         return [1];
//     } else {
//         let arr = recursive(n - 1);
//         arr.push(n); 
//         return arr;
//     }
// }
// console.log(recursive(n));

// 2 ci usul
// let son = +prompt('sonni')
// const result = [];

// function recfunction() {
//     result.unshift(son)
//     son--;
//     if(1 <= son) {
//         recfunction()
//     }
//     return result;
// }
// console.log(recfunction(son))



// const numbers = [1, 2, 3, 4, 5, 6]

//     const number = numbers.filter(num => num % 2 == 0).reduce((acc, curval) => {acc += curval; return acc},  0);
//     const number2 = numbers.filter(num => num % 2 !== 0).reduce((acc, curval) => {acc += curval; return acc},  0);
    
// console.log([number, number2])



// const words = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//  Delectus quam blanditiis! eveniet optio! repudiandae doloribus laudantium vero eum
//   perspiciatis eius,! ea harum odit aspernatur distinctio iste corrupti aliquam cum repellat!`.split('!').join('')
//   console.log(words)


// function reduceFunction(arr1, arr2) {
//    return [].concat(arr1, arr2).reduce((acc, curval) => acc += curval)
// }
// console.log(reduceFunction([1, 2, 3], [4, 5, 6]))



// function Ochirsh(string) {
//     return string.substring(1, string.length - 1);
// }

// let natija = Ochirsh("salom");
// console.log(natija); 



// function teskariQil(array) {
//     let teskariArray = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//       teskariArray.push(array[i]);
//     }
//     return teskariArray;
//   }
  
//   let arr = [1, 2, 3, 4, 5];
//   console.log(teskariQil(arr));