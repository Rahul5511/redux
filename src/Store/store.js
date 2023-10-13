import {createStore} from 'redux';
import { loginReducer } from '../reducer/loginReducer';

const store =createStore(loginReducer)

export default store;