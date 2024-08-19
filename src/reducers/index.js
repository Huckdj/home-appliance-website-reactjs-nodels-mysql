import cartReducers from './CartReducers.js'
import { combineReducers } from 'redux';
import infouser from './InfouserReducers.js'
const allReducer = combineReducers({
    cart: cartReducers,
    infouser: infouser
})

export default allReducer;
