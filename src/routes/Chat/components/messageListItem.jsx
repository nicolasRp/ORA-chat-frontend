import React, {Component} from 'react';
import PropTypes from 'prop-types';


const  MessageListItem = props => (
    <div>
        <div>time</div>
        <div>user</div>
        <div>message</div>
    </div>
)

MessageListItem.propTypes = {
    message: PropTypes.object.isRequired
}

export default MessageListItem;