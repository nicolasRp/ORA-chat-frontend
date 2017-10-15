import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chat from './components/Chat.jsx';
import io from 'socket.io-client';

const socket = io("http://localhost:1337");

class ChatContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        if(localStorage.getItem("token") == null){
        this.props.history.push('/chat')
       }
    }
    componentWillReceiveProps(nextProps){
       if(nextProps.data.user){
           localStorage.removeItem("token")
           this.props.history.push('/')
       }
    }
    render() {
        const {user} = this.props.data
        return (
            <div className="chat">
                <button className="button" onClick={this.props.actions.userLogout}>logout</button>
                user: {user.name}
                <Chat send={this.props.actions.sendMessage}/>
             </div>
        )
    }
}
export default ChatContainer;
