import * as types from '../actionTypes';
import fetch from 'isomorphic-fetch';

const BASE_URL = 'http://localhost:1337/create';

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
        const res = await fetch("http://localhost:1337/create", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = res.json()
        Promise.resolve(data)
        .then(response => dispatch(receiveUser(response[0]))) 
    }
}


