


        //Sorting an Array
        //The sort() method sorts an array alphabetically
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        let sortedFruits = fruits.sort();
        console.log(sortedFruits);
        
        //Reversing an Array
        //The reverse() method reverses the elements in an array
        var fruits = ["Banana", "Orange", "Apple", "Mango"];
        let reversedFruits = fruits.reverse();
        console.log(reversedFruits);

        //Numeric Sort
        //The Compare Function
        //The purpose of the compare function is to define an alternative sort order.
        //The compare function should return a negative, zero, or positive value, depending on the arguments:
        //function(a, b){return a - b}
        let points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return a - b});
        console.log(points);
        points.sort(function(a, b){return b - a});
        console.log(points);

        //Find the Highest (or Lowest) Array Value
        //There are no built-in functions for finding the max or min value in an array.
        //However, after you have sorted an array, you can use the index to obtain the highest and lowest values
        points = [40, 100, 1, 5, 25, 10];
        points.sort(function(a, b){return a - b});
        console.log("Min value: ",points[0]);
        points.sort(function(a, b){return b - a});
        console.log("Max value: ",points[0]);
        // or
        points = [40, 100, 1, 5, 25, 10];
        let max = Math.max.apply(null, points);
        console.log("Max value: ",max);
        let min = Math.min.apply(null, points);
        console.log("Min value: ",max);

        //Sorting Object Arrays
        //JavaScript arrays often contain objects
        const cars = [
            {type:"Volvo", year:2016},
            {type:"Saab", year:2001},
            {type:"BMW", year:2010}
          ];
        cars.sort(function(a, b){return a.year - b.year});  
        console.log("Cars sorted by ther year attributes : ",cars); 
        
        
        //The Array forEach() Method
        //The forEach() method calls a function (a callback function) once for each array element.
        const numbers = [45, 4, 9, 16, 25];
        let txt = "";
        numbers.forEach(myFunction);
        console.log(txt);  
        function myFunction(value, index, array) {
            txt += value + " "; 
        }  
        
        /*The map() method creates a new array by performing a function on each array element.
        The map() method does not execute the function for array elements without values.
        The map() method does not change the original array.
        This example multiplies each array value by 2 */
        const numbers1 = [45, 4, 9, 16, 25];
        const numbers2 = numbers1.map(myFunction2);
        console.log(numbers1,numbers2);
        function myFunction2(value) {
           return value * 2;
        }

        /*The Array reduce() Method
        The reduce() method runs a function on each array element to produce (reduce it to) a single value.
        The reduce() method works from left-to-right in the array. See also reduceRight().
        The reduce() method does not reduce the original array.*/
        const numbers3 = [45, 4, 9, 16, 25];
        let sum = numbers3.reduce(myFunction3);
        console.log("sum of array elements :",sum);
        let sumWithInitial = numbers.reduce(myFunction3, 100);
        console.log("sum with initial :",sumWithInitial);
        function myFunction3(total, value) {
            return total + value;
        }


        /*The Array every() Method
        The every() method check if all array values pass a test.
        This example check if all array values are larger than 18: */
        const numbers4 = [25, 44, 39, 26, 19];
        let allOver18 = numbers4.every(myFunction4);
        console.log("all above 18 :",allOver18);
        function myFunction4(value) { 
            return value > 18;
        }


        //The Array some() Method
        //The some() method check if some array values pass a test.
        //This example check if some array values are larger than 18:
        const numbers5 = [45, 4, 9, 16, 25];
        let someOver18 = numbers5.some(myFunction5);
        console.log("some above 18 :",someOver18);
        function myFunction5(value) {
            return value > 18;
        }

        /*The Array indexOf() Method
        The indexOf() method searches an array for an element value and returns its position.
        */
        fruits = ["Apple", "Orange", "Apple", "Mango"];
        let index = fruits.indexOf("Apple");    
        console.log("index of apple is :",index);

        /*The Array includes() Method
        ECMAScript 2016 introduced Array.includes() to arrays.
        This allows us to check if an element is present in an array (including NaN, unlike indexOf).*/
        fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.includes("Mango"));

        /*The Array.from() Method
        The Array.from() method returns an Array object from any object with 
        a length property or any iterable object. Create an Array from a String:*/
        console.log(Array.from("ABCDEFG"));

        //JavaScript Date Objects
        const d = new Date();
        console.log("date is :",d);
        console.log("date is :",d.toDateString());
        const dStr = new Date("October 13, 2014 11:13:00");
        console.log("date string is :",dStr);

        //Math.random()
        let rand = Math.random() * 10;
        console.log(rand);
        rand = Math.ceil(Math.random() * 10);
        console.log(rand);
        rand = Math.ceil(10 + Math.random() * 91);
        console.log(rand);


        //Conditional Statements
        if (new Date().getHours() > 22) {
            console.log("good night!");
          }
        
        const num = 0;
        
        if (num > 0) {
            console.log(num,"is positive");
        }
        else if ( num < 0) {
            console.log(num,"is negative");
        }
        else {
            console.log(num," is zero");
        }

        
        
        // For loops
        
        fruits = ["Banana", "Orange", "Apple", "Mango"];
        
        for (let i = 0; i < fruits.length; i++) {
            console.log(fruits[i]);
        }

        let myArr = [2,3,11,6,2,7];

        for (let i = 0; i < myArr.length; i++) {
            console.log("elemnt",i,":",myArr[i]);
        }
        
        
        //While loop
        
        let x = 5;
        let condition = true;
        
        while(condition) {
            
            if(x <= 0) {
                condition = false;    
            }
            else {
                console.log(x,"not zero");
                x--;
            }
        
        }

        //Converting Strings to Numbers
        console.log(Number("3.14"));        // returns 3.14
        console.log(Number(" "));    // returns 0
        console.log(Number(""));    // returns 0
        console.log(Number("99 88"));   // returns NaN

        let w = "5";      // w is a string
        let v = + w;      // v is a number
        console.log(v); 
        
        //Converting Numbers to Strings
        //The global method String() can convert numbers to strings.
        console.log(String(123));
        //The Number method toString() does the same 
        console.log((256).toString()); 

        //JavaScript Arrow Function
        let arrowFunction = (a,b) => a*b;
        console.log(arrowFunction(2,3));
        var printHello = () => "Hello World!";
        console.log(printHello());
        printHello = (param) => "Hello" + " " + param;
        console.log(printHello("Everybody"));