function addToCart(quantity,productName="Elma"){
    console.log("Sepete eklendi: "+productName+" adet: "+quantity);
}


/* addToCart("Karpuz")
addToCart(15)

addToCart() */

addToCart(1,"Yumurta")

addToCart(10)

let sayHello = ()=>{
    console.log("Hello world");
}

sayHello()


let sayHello2 = function () {
    console.log("Hello world 2");   
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("Elma",5,10)
addToCart2("Ekmek",2,2)

let product1 = {productName:"Elma",quantity:5, unitPrice:2}


function addToCart3(product){
   
    console.log("Ürün: "+ product.productName);
    console.log("Adet: "+ product.quantity);
    console.log("Birim fiyat: "+ product.unitPrice);
}
addToCart3(product1)

let product2 = {productName:"Elma",quantity:5, unitPrice:2}
let product3 = {productName:"Elma",quantity:5, unitPrice:2}

/* product2=product3
product2.productName="KARPUZ"
console.log(product3.productName); */

function addToCart4(products) {
    console.log(products);
}

let products = [
    {productName:"Elma",quantity:5, unitPrice:2},
    {productName:"Armut",quantity:5, unitPrice:2},
    {productName:"Krpuz",quantity:5, unitPrice:2}
]

addToCart4(products)


function add(...numbers) { //rest operatoru
    let total = 0;
  for (let i = 0; i < numbers.length; i++) {
   total = total + numbers[i] 
  }
    console.log(total);
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers = [30,10,600,45,321]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"40M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["Bursa","İstanbul"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)

console.log(marmara)

console.log(icAnadoluSehirleri);


let newProductName,newUnitPrice,newQuantity
({ productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
    = {productName:"Kavun",unitPrice:10,quantity:5}
)
console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);