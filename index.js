var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var poppedVeg = vegetables.pop();
var poppedFruit = fruit.shift();

var indexF = fruit.indexOf("orange");
fruit.push(indexF);
console.log(indexF);

var numVeg = vegetables.length
vegetables.push(numVeg);
console.log("number of veggies is: " + numVeg);

var food = fruit.concat(vegetables);

food.splice(4, 2);
food.reverse();
food.toString();

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
console.log("food: ", food);

/*
Remove the last item from the vegetable array.
Remove the first item from the fruit array.
Find the index of "orange."
Add that number to the end of the fruit array.
Use the length property to find the length of the vegetable array.
Add that number to the end of the vegetable array.
Put the two arrays together into one array. Fruit first. Call the new Array "food".
Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Turn the array into a string and return it.
If you've done everything correctly, the last step should print the following string to the console:

3,pepper,1,watermelon,orange,apple

var people = [
    {name: "Bob", age: 31},
    {name: "Eric", age: 27}
]

var names = people.map(function(person){
    console.log(person.name);
    return person.name;
});

var cars = [
    {make: "Ford", model: "E150", price: 10000},
    {make: "Chevy", model: "Camaro", price: 20010},
    {make: "Toyota", model: "Tacoma", price: 30900},
    {make: "Ford", model: "Explorer", price: 9000},
    {make: "Ford", model: "F250", price: 2400},
]
var searchCar = cars.find(function(car){
    return car.model === "Camaro";
})

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous, desks) {
      if (desks.type === "sitting") previous.sitting++;
      if (desks.type === "standing") previous.standing++;
      return previous;
  }, { sitting: 0, standing: 0 });
  console.log(desks.type);

  var numbers = [1, 1, 2, 3, 4, 4];

  function unique(array) {
    return array.reduce(function(previous, item){
        if(!previous.find(function(foundItem){
            return item === foundItem;
        })) {
            previous.push(item);
        }
        return previous;
    }, []);
}

var people = [
    {name: "Bob", age: 31},
    {name: "Eric", age: 27}
]

var names = people.reduce(function(previous, person){
    previous.push(person);

    return person.name;
}, []);
*/
