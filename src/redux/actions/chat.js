import * as types from '../actionTypes';
import fetch from 'isomorphic-fetch';

const BASE_URL = "http://localhost:8080";

export function addMessage(message){
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
function allMessages(messages){

    return{
        type: types.LOAD_MESSAGES,
        payload: messages
    }
}

export function getAllMessages(){
    return async dispatch => {
       const res = await fetch(BASE_URL + '/all', {
            method: 'GET',
            'Accept': 'application/json',
            'Content-Type': 'application/json',                
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        })
       const data = res.json()
       Promise.resolve(data)
       .then(response => dispatch(allMessages(response)))
       .catch(err => {throw(err)})
        
    }
}
export function sendMessage(message){
    return dispatch => {
        fetch(BASE_URL + '/send', {
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
            
        }).catch(err => {throw(err)});
    }
}



