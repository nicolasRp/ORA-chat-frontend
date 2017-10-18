import React, {Component} from 'react';
import MessageList from './MessageList';


class Chat extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="log">
                <MessageList messages={this.props.messages}/>
            </div>
        )
    }

}

export default Chat;