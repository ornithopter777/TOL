const objectA = {
    a:10,
    b:true
}
const objectB = objectA
objectB.a = 15
console.log(objectB)
objectB.c = 'abc'
console.log(objectB)
const objectC = {
    with: 250,
    innerHeight: 250
}
console.log(objectC)



const myCity = {
    name: 'NewYork'
}
console.log(myCity.name)
myCity.popular = 1000000
myCity.country = 'USA'
console.log(myCity)
console.log(myCity.popular)
delete myCity.popular
console.log(myCity.popular)
console.log(myCity)
const svojstvo = 'continent'
myCity[svojstvo] = 'America'
console.log(myCity)
const myCity2 = {
    name: 'Minsk'
}
myCity2[svojstvo] = 'Evrazija'
console.log(myCity)
console.log(myCity2)

const myCity3 = {}
const myCity4 = {}
const sv1 = 'header'
const sv2 = 'name'
const sv3 = 'country'
const sv4 = 'continent'
const vseSv = {
    sv1,
    sv2,
    sv3,
    sv4
}
console.log(vseSv)
myCity3[sv1] = 'myCity3'
myCity3[sv2] = 'Telaviv'
myCity3[sv3] = 'Izrael'
myCity3[sv4] = 'Azija'
myCity4[sv2] = 'Landshut'
myCity4[sv3] = 'Germany'
myCity4[sv4] = 'Europe'
const objectsNames = {}
objectsNames.oN1 = 'myCity3'
const oN2 = 'myCity4'
console.log(objectsNames.oN1)
console.log(myCity3)
console.log(oN2)
console.log(myCity4)

const objects = {
    o1: 'City1'
}
objects.o2 = 'myCity6'
const proverka = 'mojgorod'
const goroda = {
    objects,
    proverka,
    city1:{},
    city2:{}
}
console.log(10)
goroda[proverka] = 'gbfgb'
console.log(objects.o1)
console.log(goroda)
const abbss = 'region'
goroda.city1[abbss] = 'strana'
goroda.city1.nazv = 'gunu'
goroda.city1.onp = 'gunu22'
console.log(objects.o1)
console.log(goroda.city1)
console.log(goroda.city1.nazv)
console.log(10)
function f1(m,n) {
    let yy
    m=m+1
    yy=m+n
   
    console.log(yy)
}
f1(10,3)
const abb = 'ft1'
console.log(abb)
let l
!l
console.log(!l)

console.log(typeof 10)
typeof bbb === 'indefined'
console.log(typeof bbb)