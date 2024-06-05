/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

// Exercise completed for me!

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza', 'cheeseburger');
// They asked us to add pizza & hamburgers to the const 'foods' so I used the push method to do that.

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco');
// the unshift method places the 'taco' at the beginning of the 'foods' array.

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[1];
// we are settings favFood as a const, and when we equal it to 1, it will go to the 2nd in the list, which is pizza bc we put taco in the first spot.

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu');
// I inserted tofu in between pizza and cheeseburger, to be honest with you i trial and errored the 2, 0 until i got tofu to where the instructions told us to put it.

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// Here we will need to use the splice action again
foods.splice(1, 1, 'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

// if we are assigning a new array I want to use const to assign yummy to foods sliced
const yummy = foods.slice(1, 3);
// I used foods because thats what we're adding to, and slice to insert 1 and 3, which are the second and 3rd options.

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// use const to assign soyIdx variable
const soyIdx = foods.indexOf('tofu');
// I used the indexOf method to find the string tofu, which I defined, and it was in the foods array.
// when logging this should show '3' because tofu is the 4th one. 

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

// again assigning result to a variable requires const, and its gonna be named allFoods
const allFoods = foods.join(' -> ');
// join method to put -> between all of the elements 

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup');
// the includes functions allows me to check if soup is in the hasSoup array.

console.log('Exercise 10 result:', hasSoup);
