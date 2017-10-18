import * as types from '../actionTypes';
import fetch from 'isomorphic-fetch';

const BASE_URL = "http://localhost:8080/send";

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

export function sendMessage(message){
    console.log('message in actions', message)
    return dispatch => {
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',                
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({
                    "user": message.user,
                    "content": message.content,
                    "time": message.time
                })
            
        }).catch(err => {throw(err)})
        dispatch(addMessage(message));
    }
}



