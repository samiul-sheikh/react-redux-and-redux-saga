import { combineReducers } from 'redux';
import cartCounter from './cartCounter';
import cartFavorite from './cartFavorite';
import users from './users';

const reducers = combineReducers({
    cartCounter,
    cartFavorite,
    users,
});

export default reducers;