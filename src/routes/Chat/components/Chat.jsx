import React, {Component} from 'react';
import MessageComposer from './MessageComposer';
import {Input} from 'react-bootstrap';


class Chat extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <MessageComposer send={this.props.send}/>
            </div>
        )
    }

}


export default Chat;