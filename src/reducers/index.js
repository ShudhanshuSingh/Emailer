import authReducer from "./authenticate";
import {combineReducers} from 'redux';
import { auth } from "../firebase";

const allReducers = combineReducers({
    authReducer:authReducer
})

export default allReducers;