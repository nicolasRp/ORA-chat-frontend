import * as types from '../actionTypes';


function addMessage(message){
    return{
        type: types.ADD_MESSAGE,
        payload: message
    }
}

export function userLogout(){
    return {
        type: types.USER_LOGOUT
    }
}




