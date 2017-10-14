import React, { Component } from 'react';



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
            <div>
                <button onClick={this.props.userLogout}>logout</button>
                user: {user.name}
             </div>
        )
    }
}
export default ChatContainer;
