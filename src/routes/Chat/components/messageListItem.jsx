import React, { Component } from 'react';
import PropTypes from 'prop-types';


const MessageListItem = props => {
    console.log('props', props)
    return (
        <div>
            <div>{props.message.time}</div>
            <div>{props.message.user}</div>
            <div>{props.message.content}</div>
        </div>
    )
}

MessageListItem.propTypes = {
    message: PropTypes.object.isRequired
}

export default MessageListItem;