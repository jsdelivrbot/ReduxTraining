// State argument is not application state, only the state
// this reducer is responsible for
// state=null sets a default value for state if it's not passed through
// in this case that handles the initial load of the page where a book hasn't
// been selected yet
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}