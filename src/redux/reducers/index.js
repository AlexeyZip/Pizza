import filtersReducers from './filters';
import pizzasReducers from './pizzas';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  filters: filtersReducers,
  pizzas: pizzasReducers,
});


export default rootReducer;