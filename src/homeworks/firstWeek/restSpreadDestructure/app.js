
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