import React from 'react';
import MessageListItem from './MessageListItem.jsx';
import PropTypes from 'prop-types';

const MessageList = props =>{

    return(
    <div>
       {props.messages.map((message, key) => <MessageListItem key={key} message={message}/>)}
    </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
}
export default MessageList;