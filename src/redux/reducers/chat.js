import {ADD_MESSAGE, RECEIVE_MESSAGE } from '../actionTypes';



const initialState = {
    messages:[]
}

export default function chatReducer(state = initialState.messages, action){
    switch(action.type){ 
        case ADD_MESSAGE:
            return state.concat(action.payload)
        default:
            return state    
    }
}



