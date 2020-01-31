// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 
 // Function Decleration
 function add(n) {  
   return n + 1;
 }

 // Function Expression

 let add = function(n) {
                return n + 1;
              };
 
 //Arrow function without Curly braces

 let add = (n) => n + 1; 

 //Arrow function with Curly braces

 let add = (n) => {              
    return n + 1;
    };
 
 //function invocation

 add(28); 

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 // Function Decleration

 function sub(n) {
   return n - 1;
 }

 // Function Expression

 let sub =  function (n) {
    return n - 1;
    };

 //Arrow Function without curly braces

 let sub = (n) => n - 1; 

 // Arrow Function with curly braces

 let sub = (n) => {              
    return n - 1;
    };
 // Function Invocation

 sub(30);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 // Function Decleration
 
 function addTwoNum(x, y) {
   return x + y;
 }

 // Function Expression

 let addTwoNum = function(x, y){
    return x + y;
    };

 // Arrow Function without curly braces

 let addTwoNum = (x, y) => x + y; 

 // Arrow Function with curly braces

 let addTwoNum = (x, y) => {             
    return x + y;
    };

 // Function Invocation

 addTwoNum(12, 8); 


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 
 // Function Decleration

 function subTwoNums(x, y) {
  return x - y;
 }

 //Function Expression

 let subTwoNums = function (x, y) {
   return x - y;
    };

 // Arrow function without curly braces
 
 let subTwoNums = (x, y) => x - y; 

 // Arrow function with curly braces

 let subTwoNums = (x, y) => {             
    return x - y;
    };
 // Function Invocation
 
 subTwoNums(38, 9); 


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
 
 //Function Decleration

 function mul(x, y) {
   return x * y;
 }

 //Function Expression

 let mul = function(x, y) {
    return x * y;
    };

 // Arrow function without curly braces

 let mul= (x, y) => x * y;
 
 //Arrow function with curly braces

 let mul = (x, y) => {            
    return x * y;
    };

 // Function Invocation

 mul(10, 10); 

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 //Function Decleration

 function divide(x, y) {
   return x / y;
 }

 // Function Expression
 let divide = function (x, y) {
    return x / y;
    };

 // Arrow function without curly braces

 let divide = (x, y) => x / y; 

 //Arrow function with curly braces

 let divide = (x, y) => {               
                           return x / y;
                         };
 // Function Invocation

 divide(50, 2); 

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //Function Decleration

 function square(x) {
   return x * x;
 }
 
 //Function Expression

 let square = function (x) {
    return x * x;
    };

 //Arrow function without curly braces

 let square = (x) => x * x; 

 //Arrow function with curly braces

 let square = (x) => {              
    return x * x;
    };

 // Function Invocation

 square(2); 

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
 
 // Function Decleration

 function calculator(operation, x, y) {
    switch(operation) {
      case ("+") : alert(`${x} + ${y} = ${x + y}`);
                   return x + y;
      
      case ("-") : alert(`${x} - ${y} = ${x - y}`);
                        return x - y;

      case ("*") : alert(`${x} * ${y} = ${x * y}`);
                        return x * y;

      case ("/") : alert(`${x} / ${y} = ${x/y}`);
                      return x / y;
    }
 }
 
 // Function Expression

 let calculator = function (operation, x, y)    
            {
              switch(operation) {
                case ("+") : alert(`${x} + ${y} = ${x + y}`);
                             return x + y;
                
                case ("-") : alert(`${x} - ${y} = ${x - y}`);
                                  return x - y;
          
                case ("*") : alert(`${x} * ${y} = ${x * y}`);
                                  return x * y;
          
                case ("/") : alert(`${x} / ${y} = ${x/y}`);
                                return x / y;
              }
             };

 //Arrow Function With Curly Braces

 let calculator = (operation, x, y) => {                      
                  switch(operation) {
                    case ("+") : alert(`${x} + ${y} = ${x + y}`);
                                return x + y;
                    
                    case ("-") : alert(`${x} - ${y} = ${x - y}`);
                                      return x - y;

                    case ("*") : alert(`${x} * ${y} = ${x * y}`);
                                      return x * y;

                    case ("/") : alert(`${x} / ${y} = ${x/y}`);
                                    return x / y;
                  }
                                  };
 // Function Invocation
 
 calculator("+", 20, 9);



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
  
 // Function Decleration
 function compare(a, b) {
  return a > b;
 }
 
 // Function Expression

 let compare = function (a, b) {
                  return a > b;
                };

 //Arrow function without curly braces

 let compare = (a, b) => a > b; 

 //Arrow function with curly braces

 let compare = (a, b) => {              
                            return a > b;
                          };

 // Function Invocation

 compare(10, 8); 

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function compareSmall(a, b) {
   return a < b;
 }

 // Function Expression

 let compareSmall = function (a, b) {
                       return a < b;
                     };

 //Arrow function without curly braces

 let compareSmall = (a, b) => a < b; 

 //Arrow function with curly braces

 let compareSmall = (a, b) => {              
                                 return a < b;
                               };
 // Function Invocation

 compareSmall(18, 10); 


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 // Function Decleration

 function equal(a, b) {
  return a === b;
 }

 // Function Expression

 let equal = function (a, b)   
              {
                return a === b;
              };

 //Arrow function without curly braces

 let equal = (a, b) => a === b; 

 //Arrow function with curly braces

 let equal = (a, b) => {              
                          return a === b;
                        };
 // Function Invocation

 equal(10, 10); 


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

 // Function Decleration

 function smallest(x, y) {
   return x < y ? x : y;
 }

 // Function Expression

 let smallest = function (x, y) {
                    return x < y ? x : y;
                 };

 //Arrow function without curly braces

 let smallest = (x, y) => x < y ? x : y;

 //Arrow function with curly braces

 let smallest = (x, y) => {               
                             return x < y ? x : y;
                           };

 // Function Invocation
 
 smallest(10, 8); 


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 // Function Decleration

 function largest(x, y) {
   return x > y ? x : y;
 }

 // Function Expression

 let largest = function (x, y) {
                 return x > y ? x : y;
               };

 //Arrow function without curly braces

 let largest = (x, y) => x > y ? x : y; 

 //Arrow function with curly braces

 let largest = (x,y) => {               
                           return x > y ? x : y;
                         };

 // Function Invocation
 
 largest(10, 8); 

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 // Function Decleration
 function even(n) {
   return (n % 2 === 0);
 }

 // Function Expression

 let even = function (n) {
                    return (n % 2 === 0);
                  };

 //Arrow function without curly braces

 let even = (n) => (n % 2 === 0); 
 
 //Arrow function with curly braces

 let even = (n) => {              
                           return (n % 2 === 0);
                         };
 // Function Invocation

even(10); 


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 // Function Decleration

 function odd(n) {
   return (n % 2 === 1);
 }
 
 // Function Expression

 let odd = function (n) {
                   return (n % 2 === 1);
                 };

 //Arrow function without curly braces

 let odd = (n) => (n % 2 === 1);

 //Arrow function with curly braces

 let odd = (n) => {              
                          return (n % 2 === 1);
                        };

 // Function Invocation

 odd(13); 


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
 
 // Function Decleration

 function grades(score, total) {
   switch(true) {
    case (score >= 90) : return "A";
    case (score >= 80 && score < 90) : return "B";
    case (score >= 70 && score < 80) : return "C";
    case (score >= 60 && score < 70) : return "D";
    default : return "F";
   }
 }

 //Function Expression

 let grades = function (score, total)     
                      {
                        switch(true) {
                          case (score >= 90) : return "A";
                          case (score >= 80 && score < 90) : return "B";
                          case (score >= 70 && score < 80) : return "C";
                          case (score >= 60 && score < 70) : return "D";
                          default : return "F";
                        }
                      };

 //Arrow Function with curly braces

 let grades= (score, total) => {                  
                                    switch(true) {
                                      case (score >= 90) : return "A";
                                      case (score >= 80 && score < 90) : return "B";
                                      case (score >= 70 && score < 80) : return "C";
                                      case (score >= 60 && score < 70) : return "D";
                                      default : return "F";
                                    }
                                   };
 //Function Invocation

 grades(77, 100);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 
 // Function Decleration

 function concatTwoString(word1, word2) {
   return word1 + " " + word2;
 }

 // Function Expression
 
 let concatTwoString = function (word1, word2) {
                          return word1 + " " + word2;
                        };
 //Arrow function without curly braces

 let concatTwoString = (word1, word2) => word1 + " " + word2;

 //Arrow function with curly braces

 let concatTwoString = (word1, word2) => {            
                                            return word1 + " " + word2;
                                          };
 //Function Invocation

 concatTwoString("Hello", "World");