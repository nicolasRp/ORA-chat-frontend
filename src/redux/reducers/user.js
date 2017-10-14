import { USER_LOGOUT ,REGISTER_USER_SUCCESFULL } from '../actionTypes'

const initialState = {
    data:{}
}
export default function userReducer(state = initialState, action){
    switch(action.type ){
        case REGISTER_USER_SUCCESFULL: 
            return action.payload
        case USER_LOGOUT:
            return {}     
        default: 
            return state   
    }
}
