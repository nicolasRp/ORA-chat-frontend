import {ADD_MESSAGE, RECEIVE_MESSAGE } from '../actionTypes';



const initialState = {
    loading: false,
    data:[],
    fethHistory: []
}


export default function chatReducer(state = initialState, action){
    switch(action.type){
        case ADD_MESSAGE:
            return state
        default:
            return state    
    }
}



