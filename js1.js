// let products = [
//     { id: 1,brand: "samsung", type: "phone", color: "blue", price: 1200 },
//     { id: 2, brand: "samsung", type: "phone", color: "blue", price: 1200 },
//     { id: 3, brand: "iphone", type: "phone", color: "gold", price: 800 },
//     { id: 4, brand: "xiomi", type: "phone", color: "green", price: 950 },
//     { id: 5, brand: "tesla", type: "phone", color: "red", price: 1020 },
//     { id: 6, brand: "Nokia", type: "phone", color: "Black", price: 1800 },
//     { id: 7, brand: "iphone", type: "phone", color: "gold", price: 80000 },
// ]

// // price increase specific one object 
// let newproduct = products.map(p =>{
//     if (p.brand ==='iphone'){
//         p.price = p.price + 200;
//     }
//     return p;
// })
// console.log(newproduct)


class nurMohammad {
    #property
    constructor(name,age,property){
        this.name =name;
        this.age = age;
        this.#property = property;
    }
    action(){
        console.log(this.#property)
    }
}
class Minu extends nurMohammad{
    constructor (name, age , property, favourite){
        super(name, age,property);
        this.Favourite = favourite;
    }
}

const Asadul = new Minu ('Asadul',21,"nothing","Ema, Mehreen");
console.log(Asadul)
console.log(Asadul.action())