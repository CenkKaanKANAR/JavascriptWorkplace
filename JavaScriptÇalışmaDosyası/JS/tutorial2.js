class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(currentYear) {
        return Number(currentYear - this.year);
    }
    printAge(currentYear) {
        console.log(this.name + " is " + this.age(currentYear) + " years old.");
    }
}

let date = new Date();
let currentYear = date.getFullYear();

let myCar1 = new Car("Volvo", 2019);
myCar1.printAge(currentYear);
let myCar2 = new Car("Renault", 2016);
myCar2.printAge(currentYear);

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj.employees[0].lastName);

let a = undefined;
if(typeof a === "undefined") {
    console.log("yes");
}

//a = null;
// a = 5;

if(typeof a !== "undefined" && a !== null) {
    console.log("value is null");
}
else {
    console.log("value is not null");
}
// going through an object
let txt = "";
for (let x in myCar1) {
    txt += myCar1[x] + " ";
  }
  console.log(txt);
// another option
const myArray = Object.values(myCar2);
let len = myArray.length;
for(let i = 0 ; i < len ; i++ ) {
    console.log("=>" + myArray[i]);
}  
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get langGet() {
      return this.language.toUpperCase();
    },
    set langSet(lang) {
      this.language = lang;
    }
  };
person.langGet;
console.log(person.language); 
person.langSet = "TR";
console.log(person.language);  
/*
let p = new Promise((resolve, reject) => {
    let a = 3;
    if( a == 2) {
        resolve("success");
    }
    else {
        reject("failure");
    }
})

p.then((message) => {
    console.log(" This is is the then " + message);
}).catch((message) => {
    console.log(" This is is the catch " + message);
}) */


function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log("Making request to "+ location)
        if( location === "Google") {
            resolve("Google says hi")
        }
        else {
            reject("We can only talk to Google")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response")
        resolve("Extra Information " + response)
    })
}


async function doWork() {
    try {
        
        const response = await makeRequest("Google")
        console.log("Response Received")
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    
    } catch (error) {
        console.log(error)
    }
}

doWork()


