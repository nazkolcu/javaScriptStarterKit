//console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

//console.log(dolarDun)

const euroDun=11.2
// euroDun=11 //read-only old. için yapamayız

//console.log(euroDun)

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredileri","Özel Konut Kredisi"]
/* 
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>") */

let student = {id:1, name:"Naz"}

//console.log(student)

function save(ogrenci,puan=10) {
 console.log(ogrenci.name+" "+puan)   
}
//save(student,100);


function save2(puan=10,ogrenci) {
 console.log(ogrenci.name+" "+puan)   
}
//save2(undefined, student);

let students = ["Engin Demiroğ","Naz Kolcu","Umit Balta"]

//console.log(students)

let students2 =[student,{id:2,name:"Bebis"},"Ankara",{city:"İstanbul"}]

//console.log(students2)

//rest
//params
//varArgs
let showProducts = function (id,...products){
    console.log(id)
    console.log(products)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10,"Java","Javascript","PHP")

//spread
let points = [1,2,3,40,79,22]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring

let populations=[10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    
}

someFunction(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)