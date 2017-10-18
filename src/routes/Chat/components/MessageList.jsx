import React from 'react';
import MessageListItem from './MessageListItem.jsx';
import PropTypes from 'prop-types';

const MessageList = props =>{
    console.log('props in messageList', props)

    return(
    <div>
       {props.messages.map((message, key) => <MessageListItem key={key} message={message}/>)}
    </div>
    )
}


export default MessageList;