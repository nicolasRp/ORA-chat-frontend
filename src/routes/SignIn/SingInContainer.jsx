import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignInContainer extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.dataUser){
            localStorage.setItem("token", nextProps.dataUser.token)
            this.props.history.push('/chat')
        }
    }

    componentDidMount(){
       if(localStorage.getItem("token") !== null){
        this.props.history.push('/chat')
       }
    }

    render()
    {
         return(
            <div>
                <button onClick={this.props.registerUser}>create user</button>
            </div>
        )
    }
}
export default SignInContainer;

