const obj1 = {}
console.dir(obj1)

const obj2 = new Object()
console.dir(obj2)

const arr1 = []
console.dir(arr1)

const arr2 = new Array()
console.dir(arr2)

function User(name) {
    this.name = name;
    this.iAm = function(){
        console.log(`I am ${this.name}`);
    }
}

const user1 = new User("Feri, aki a ... :9")

console.dir(user1.iAm())

const user2 = new User("asd")
console.dir(user2)
// de ha 10000 userünk van akkor annyiszor fog lefutni, és ez nem jó



User.prototype.iAm2 = function() {
    console.log(`I am 2 ${this.name}`);
}

const user3 = new User("Bármi más")
console.dir(user3.iAm2())

const user3Proto = Object.getPrototypeOf(user3)
console.log(user3Proto)
const user3Proto2 = user3.__proto__
console.log(user3Proto2)


function CustomUser(name, role){
    User.call(this, name)
    this.role = role
}

const user4 = new CustomUser("Dezső", "frontendfejleszto")
console.dir(user4)