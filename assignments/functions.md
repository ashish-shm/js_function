1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
let calculateDogAge = (age, conversionRate) => return(age * conversionRate);
  alert(` Your dog is  ${calculateDogAge(5, 7)} years old in dog years! ` );

```
2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

```js
// your code goes here
const MAX_AGE = 75;

  let calculateSupply = (age, amountPerDay) => return((MAX_AGE - age) * (amountPerDay * 365));
  alert(` You will need ${Math.round( calculateSupply(21, 3) )} to 
    last you until the ripe old age of ${MAX_AGE} `);

```
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."

```js

function celsiustoFahrenheit(celtemp){
  var celtemp = celtemp;
  alert(` ${celtemp}°C is ${celtemp + 32}°F `);
}

function fahrenheittoCelsius(fahtemp){
  var fahtemp = fahtemp;
  alert(` ${fahtemp}°F is ${fahtemp - 32}°C `);
}

```
4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  function checkAge(age) = (age > 18) ? return true : return confirm("Did parents allow you?");
  ```

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
function checkAge(age){
  if(age > 18 || age <=18){
  return true;
  return confirm("Did parents allow you?");
}
  
}

  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
```
Is there any difference in the behavior of these two variants? If there is what is that?

Yes, there is difference. In the previous one, there would be two cases. If age is > 18 then it returns true or else it confirms if parents allow you? In this case, if age > 18 it returns true and then it confirms if parents allow you?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.

```js
function pow(x,n){
  // var x = Number(prompt("Enter the natural number greater than 1"));
  // var n = Number(prompt("Enter the power value"));
  var x = x;
  var n = n;

  if(x < 1){
    alert(` Number below 1 is not allowed `);
  }
  
  for(var i=1 ; i <n ; i++){
    x = x * x;
  }

  alert(` Result is ${x} `);

}

pow(3,2);



// Your code goes here

// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

```js
// your code goes here
function sumorproduct( n ){
  var n = Number(prompt("Enter the number "));
  var x = prompt("Sum or Product" );
  var sum= 0;
  var mul = 1;
  var i = 1;
  switch(true){
    case (sum) :
    while(i <= n){
      sum = sum +i;
    }
    alert(`Sum is ${sum} `);
    break;

    case(mul) :
    while(i <= n){
      mul = mul * i;
    }
    alert(` Product is ${mul} `);
    break;

    default :
    alert(`Choose betwewn sum and product`);
  
  }
}

```
6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

```js
// your code goes here
function sum( n ){
  var n = Number(prompt("Enter the value n"));
  var i,sum = 0;
  while( i <= n){
    sum = sum + i;
    i++;
  }

  alert(`Sum of the numbers is ${sum} `);
}

```
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

```js
// your code goes here
function sum( n ){
  var n = Number(prompt("Enter the value n"));
  var i,sum = 0;
  while( i <= n){
    if( i%5 == 0 || i%7 ==0){
    sum = sum + i;
    }
    i++;
  }

  alert(`Sum of the numbers is ${sum} `);
}

```

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.

  function min(x , y){
    var x = x;
    var y = y;

    if (x > y){
      alert(y);
    }
    else if(x == y){
      alert("both are equal");
    }
    else{
      alert(x);
    }
  }


  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
```