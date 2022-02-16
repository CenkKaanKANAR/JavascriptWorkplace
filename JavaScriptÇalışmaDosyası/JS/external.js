function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph Changed.";
}
    console.log("Let's do some math ");
    console.log("5 + 6 is: " ,5 + 6);
    console.log("5 * 6 is: " ,5 * 6);
    //JavaScript uses the keywords var, let and const to declare variables.
    let firstName = "John";
    let surname = "Dow";
    console.log(firstName + " " + surname);
    var x = 5, y = 10, z = 15;
    console.log(x + y + z);
    var animal = "dog";
    console.log(animal);
    var str = 4 + 3 + "5";
    console.log(str);
    var total = 39 + str;
    console.log(total);
    var _lastName = "Johnson"; //Private variables
    var _x = 2;
    var _100 = 5;
    var x = "redeclare";
    console.log(x);
    
    // let keyword
    let u = "John Fayer";
    //let u = 31; ERROR
    u = "Hello"; // u can reassign a variable with let keyword
    console.log(u);
    
    // const keyword
    const PI = 3.141592653;
    // cannot be reassigned or redeclared e.g. PI = 3.14 causes an error;
    // const PI; PI = 3.14 is wrong. const variables must be assigned a value when they are declared.
    // You can create a constant array:
    const cars = ["Saab", "Volvo", "BMW"];

    // You can change an element:
    cars[0] = "Toyota";

    // You can add an element:
    cars.push("Audi");
    console.log(cars,cars[2],cars[3]);
    //But you can NOT reassign the array
    //cars = ["Toyota", "Volvo", "Audi"];    // ERROR

    // You can create a const object:
    const car = {type:"Fiat", model:"500", color:"white"};

    // You can change a property:
    car.color = "red";

    // You can add a property:
    car.model = 2018;
    //But you can NOT reassign the object
    //car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
    console.log(car);
    console.log(car instanceof Object, 5 / 3);
    console.log(typeof car, typeof total);
    console.log(6 ** 2,Math.pow(3,4));
    let bool = (6 == -6);
    console.log(bool);

    const arr = ["Cenk Kaan",22,"Gebze",true,"Programming"];
    console.log(arr);
    arr.push(car);
    console.log(arr,arr[5].type);

    const phone = { brand:'Apple', model:'12 pro', year:2021, color:'coral'};
    console.log(phone);

    //undefined
    let a;
    let b = undefined;

    
    function toMultiply(x,y){
        return x * y;
    }
    let mul = toMultiply(5,7);

    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
      let fName = person.fullName();
      console.log(fName);

      //console.log(Date());
      function displayDate() {
        document.getElementById("demo3").innerHTML = Date();
      }
      
      //Strings
      let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let length = text.length;
      console.log(length);
      let text2 = "We are the so-called \"Vikings\" from the north.";
      console.log(text2);
      //String methods
      /*slice(start, end)
        substring(start, end)
        substr(start, length)
      */
     let city = "New_Delhi";
     console.log(city.slice(3));
     console.log(city.slice(0,3));
     //substring() is similar to slice().The difference is that substring() cannot accept negative indexes.
     //let fruits = "Apple, Banana, Kiwi";
     //console.log(fruits.substring(3,13));
     //The replace() method replaces a specified value with another value in a string
    let txt = "Please visit Microsoft!";
    let newTxt = txt.replace("Microsoft", "W3Schools");
    console.log(newTxt);  
    
    let float = 0.2 + 0.1;
    console.log(float);

    let r = 10;
    let p = 20;
    let q = "The result is: " + r + p;
    console.log(q,"The result is: " + r + p);
    console.log("The result is: ",r + p);
    let e = "10";
    console.log(100 / "apple",100 / e);

    let hex = 0x7F;
    console.log(hex);
    let myNumber = 127;
    console.log(myNumber.toString(2),myNumber.toString(16));
    
    //toFixed() returns a string, with the number written with a specified number of decimals
    let num = 9.656;
    console.log(num.toFixed(0),num.toFixed(2),num.toFixed(4),num.toFixed(6));
    
    //Number() can be used to convert JavaScript variables to numbers
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number("10"));  
    console.log(Number("  10")); 
    console.log(Number("10.33"));
    
    /*parseInt() parses a string and returns a whole number. Spaces are allowed.
    Only the first number is returned
    parseInt("-10");
    parseInt("-10.33");
    parseInt("10");
    parseInt("10.33");
    parseInt("10 20 30");
    parseInt("10 years");
    parseInt("years 10");
    */

    //JS Arrays
    //const cars = ["Saab", "Volvo", "BMW"];
    var fruits = ["Banana", "Orange", "Apple"];
    fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
    
    //const fruits = ["Banana", "Orange", "Apple"];
    //fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
    
    console.log(Array.isArray(fruits));
    
    //popping The pop() method removes the last element from an array
    console.log(fruits);
    fruits.pop();
    console.log(fruits);
    
    //The shift() method removes the first array element and "shifts" all other elements to a lower index.
    //The shift() method returns the value that was "shifted out"
    fruits = ["Banana", "Orange", "Apple", "Mango"];  
    console.log(fruits);
    let fruit = fruits.shift(); 
    console.log(fruit);
    console.log(fruits);
    // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
    // The unshift() method returns the new array length
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    fruits.unshift("Lemon"); 
    console.log(fruits);
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.unshift("Lemon")); 
    
    //The splice() method can be used to add new items to an array
    /*The first parameter (2) defines the position where new elements should be added (spliced in).
    The second parameter (0) defines how many elements should be removed.
    The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
    The splice() method returns an array with the deleted items
    */

    fruits = ["Banana", "Orange", "Apple", "Mango"];  
    console.log(fruits.splice(2, 0, "Lemon", "Kiwi"),fruits);
    let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
    console.log(removed);  
    //With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);
    console.log(fruits);
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 2);
    console.log(fruits);
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(1, 1); 
    console.log(fruits); 

    // Merging arrays The concat() method creates a new array by merging (concatenating) existing arrays
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
    console.log(myChildren);
    //The concat() method can take any number of array arguments
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChild = arr1.concat(arr2, arr3);


    //Slicing an Array
    //The slice() method slices out a piece of an array into a new array.
    //This example slices out a part of an array starting from array element 1 ("Orange"):
    fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);
    console.log(citrus);  
    //The slice() method can take two arguments like slice(1, 3).
    //The method then selects elements from the start argument, and up to (but not including) the end argument.
    fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus2 = fruits.slice(1, 3);
    console.log(citrus2); 