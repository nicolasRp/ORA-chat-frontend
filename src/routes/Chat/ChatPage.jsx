import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chat from '../../redux/actions/chat.js';
import ChatContainer from './ChatContainer';

const mapStateToProps = state =>({
    data: state
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(chat, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);

