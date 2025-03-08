let number = [1, 3, 2, 5, 6, 9, 8]
// for (let a of number){
//     let sum = a + 1;
//     console.log(sum)
// 
// let temp = [];
// for (let index = 0; index < number.length; index++) {
//     let sum = number[index];
//     let Numbers = sum + 1;
//     temp.push(Numbers)
// }
// console.log(temp)


// const elementsquare = number.map(Element =>{
//     return Element * Element
// })
// console.log(elementsquare)

// 

// For each  loop using 

let products = [
    { id: 1,brand: "samsung", type: "phone", color: "blue", price: "1200" },
    { id: 2, brand: "samsung", type: "phone", color: "blue", price: "1200" },
    { id: 3, brand: "iphone", type: "phone", color: "gold", price: "800" },
    { id: 4, brand: "xiomi", type: "phone", color: "green", price: "950" },
    { id: 5, brand: "tesla", type: "phone", color: "red", price: "1020" },
    { id: 6, brand: "Nokia", type: "phone", color: "Black", price: "1800" }
]
// for each do not return 
// products.forEach(product => {
//     if (product.price > 1000) {
//         console.log(product);
//     }
// })
// const array =products.filter(product => Number(product.price)>1000)
// console.log(array)

// const foundSpecific = products.find( p => p.id ===5)
// console.log(foundSpecific)
// for delete an id 

const newElement = products.filter(p => p.id != 2);
    console.log(newElement);

