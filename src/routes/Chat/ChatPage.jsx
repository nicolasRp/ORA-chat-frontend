import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chat from '../../redux/actions/chat.js';
import ChatContainer from './ChatContainer';
import { socketConnect } from 'socket.io-react';


const mapStateToProps = state =>({
    data: state
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(chat, dispatch)
})
const chatRedux = connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
export default socketConnect(chatRedux);




