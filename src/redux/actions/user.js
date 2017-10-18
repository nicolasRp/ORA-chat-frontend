import * as types from '../actionTypes';
import fetch from 'isomorphic-fetch';

const BASE_URL = "http://localhost:8080/create";

function registerUser(){
    return{ 
        type: types.REQUEST_REGISTER_USER
    }
}
function receiveUser(user){
    return{
        type: types.REGISTER_USER_SUCCESFULL,
        payload: user
    }
}

export function registerUser(){
    return async dispatch => {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = res.json()
        Promise.resolve(data)
        .then(response => dispatch(receiveUser(response))) 
    }
}


