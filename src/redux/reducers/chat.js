import {ADD_MESSAGE, RECEIVE_MESSAGE, LOAD_MESSAGES } from '../actionTypes';



const initialState = {
    messages:[]
}

export default function chatReducer(state = initialState.messages, action){
    switch(action.type){ 
        case ADD_MESSAGE:
            return state.concat(action.payload)
        case LOAD_MESSAGES: 
            return state.concat(action.payload)    
        default:
            return state    
    }
}



