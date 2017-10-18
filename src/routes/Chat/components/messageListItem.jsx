import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const MessageListItem = props => {
    return (
        <div className='msgItem'>
            <div className='msgUser'>
                <i className="fa fa-user-circle-o" /> {props.message.user}
            </div>
            <div className='msgTimestamp'>
                <i className="fa fa-clock-o"/> {
                moment(props.message.time, 'MMM Do YY, H:m a').format('MMMM D, YYYY')
            }
            </div>
            <div className='msgContent'>{props.message.content}</div>
        </div>
    )
}

MessageListItem.propTypes = {
    message: PropTypes.object.isRequired
}

export default MessageListItem;