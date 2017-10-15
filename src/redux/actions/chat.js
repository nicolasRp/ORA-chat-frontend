import * as types from '../actionTypes';
import fetch from 'isomorphic-fetch';

const BASE_URL = "http://localhost:1337/send";

function addMessage(message){
    return{
        type: types.ADD_MESSAGE,
        message
    }
}

export function userLogout(){
    return {
        type: types.USER_LOGOUT
    }
}

export function sendMessage(message){
    console.log(message)
    return dispatch => {
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + message.user
            },
            body: {
                "message": message.content
            }
        }).catch(err => {throw(err)})
    }
}



