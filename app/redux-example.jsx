var redux = require('redux');

console.log('Starting redux example');

//Pure Function
function add (a, b) {
  return a + b;
}

function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen'
  };
}

var res = changeProp({
  name: 'Bhavya',
  age: 20
});

console.log(res);
