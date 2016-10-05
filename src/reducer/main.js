import { Map } from 'immutable';
import { SET_SUMMARY, SET_CONTACT, SET_PORTFOLIO, SET_WORK, SET_TOKEN} from '../actions/actions';

// generic function to merge states
function merge(state, newState) {
  return state.merge(newState);
}

// Main reducer for handling all data inputs and outputs
export default function main(state = Map(), action) {
  switch (action.type) {
    case SET_CONTACT:
      return merge(state, action.payload);
    case SET_SUMMARY:
      return merge(state, action.payload);
    case SET_PORTFOLIO:
      return merge(state, action.payload);
    case SET_WORK:
      return merge(state, action.payload);
    case SET_TOKEN:
      return merge(state, action.payload);
    default:
      return state;
  }
}
