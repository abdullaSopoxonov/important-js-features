// string 
let str = "string"

str.split("")
str.toLocaleUpperCase()
str.toLocaleLowerCase()
str.startsWith("")
str.endsWith("")
str.includes("")
str.indexOf("s")
str.length
str.at(1)
str.slice(1, 3)

// array
let arr = [1, 2, 4, 3]

let users = [
    {
        firstName: "Jon",
        lastName: "doe"
    },
    {
        firstName: "Jon",
        lastName: "doe"
    },
    {
        firstName: "Jon",
        lastName: "doe"
    },
]

let newArr = ["Jon doe", "Jon doe"]

users.map((item, index, arr) => {return item.firstName + " " + item.lastName}) // []

arr.map((item, index, arr) => {return item + index})
arr.join(" ")
arr.includes(1)
arr.indexOf(1)
arr.forEach((item, index, arr) => {item + index})
arr.length
arr.pop()
arr.push(5)
arr.shift()
arr.unshift(0)
arr.slice(1, 3)
arr.reduce((previousValue, currentValue, currentIndex, arr) => {previousValue + currentValue})
arr.filter((item, index, arr) => {return index === 2}) // [3]
arr.some((item, index, arr) => {return index === 3})
arr.sort((a, b) => {return b - a})

// object 
let person = {
    id: 1, 
    name: "Jack",
    age: 24
}

person.name

Object.keys(person) // ["id", "name", "age"]
Object.values(person) // [1, "Jack", 24]

// destructuring
let person2 = ["Jack", 24];

let [nameArr, ageArr] = person2

nameArr // "Jack"
ageArr // 24

let person2Obj = {
    name: "Jack",
    age: 24
}

let {age, name} = person2Obj
// let name = "Jack"
// let age = 24

function Fn(arg1, arg2, arg3, ...rest) {
    return arg1 + arg2 + arg3
}
let sum = Fn(1, 2, 3) // 6

function State(value) {
    function setValue() {}

    return [value, setValue]
} 

let [value, setValue] = State(1) // [1, () => {}]

function fn1() {}
const fn2 = function() {}
const fn3 = () => {}

// Promise
fetch("https://google.api.com/").then((response) => {}).catch((error) => {}).finally(() => {})

document.querySelector()
document.querySelectorAll()

let h1 = document.createElement('h1')
document.appendChild(h1)

// terminal commands
// ls - papka ichindagi filelani korish
// cd ... - change directory
// clear - tozalash
// cat ... - file ni ichini ochib baradi
// ssh-keygen - ssh key generatsiya qilish

// git commands
// git init
// git remote add origin ...
// git remote -v
// git branch
// git branch -M main
// git status
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"
// git clone ...
// git add .
// git commit -m "text"
// git push origin <branch-name>