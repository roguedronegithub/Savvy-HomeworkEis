  // #1 created an array of pizzaToppings with 4 toppings

  const pizzaToppings = ["pepperoni", "sausage", "peppers", "ex-cheese" ];
  console.log(pizzaToppings);

  // #2 create a 'greetCustomer' function that prints a message that welcomes a
  // a guest, then informs them of available toppings by looping over 'pizzaToppings'

let message = "Welcome to Pizza House, our toppings are:";

for ( let i=0; i< pizzaToppings.length; i++) {
  message += pizzaToppings[i];
};

// #3 create a 'getPizzaOrder' function that accepts size  crust and indefinite amount
//toppings as inputs. prints the order ' One large thick crust pizza with  x,y,z, ... coming up!!
// outputs a list with size, crust, and toppings

const size = [ "small", "medium", "large" ];
const crust = [ "thin", "pan", "deep-dish" ];
let message2 = "One large thick crust pizza with";
let message3 = "Coming up!!";

function getPizzaOrder( size, crust, pizzaToppings) {

  console.log(message2); + size; + crust; +
  pizzaToppings; + console.log(message3)
  return

};

getPizzaOrder(message2,size,message3);

// #4 create a 'preparePizza' function that accepts an array with three items: a size, a crust
// a list of toppings.

function preparePizza(object) {

  obj.size = "small";
  obj.crust = "pan";
  obj.pizzaToppings = "sausage";
  return

};

preparePizza(size, crust, pizzaToppings);

// #5 create a servePizza that accepts a pizza object
// logs a message that the pizza is ready

let message4 = "Order up! Here's your large thick crust pizza with";

function servePizza (object) {

  message4,
  obj.size = "large";
  obj.crust = "pan";
  obj.pizzaToppings = "sausage";
  return
};

servePizza(message, obj);


















































