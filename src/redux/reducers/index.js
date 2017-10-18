import {combineReducers} from 'redux';
import chatReducer  from './chat';
import userReducer  from './user';


const reducer = combineReducers({
    chat: chatReducer,
    user: userReducer
})

export default reducer;

