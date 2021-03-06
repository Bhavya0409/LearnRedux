var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
      default:
        return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Search for', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new search text'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new search text 2'
});

console.log('search text should be "new search text"', store.getState());
