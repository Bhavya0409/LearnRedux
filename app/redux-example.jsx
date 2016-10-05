var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
});

var currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Bhavya'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addMovie('Title 1', 'Genre 1'));

store.dispatch(actions.addMovie('Title 2', 'Genre 2'));

store.dispatch(actions.removeMovie(1));

// unsubscribe();
