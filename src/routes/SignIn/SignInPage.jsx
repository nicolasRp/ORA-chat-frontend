import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as user from '../../redux/actions/user.js'
import SignInContainer from './SingInContainer.jsx'

const mapStateToProps = state => ({
    dataUser: state.user
})
const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(user, dispatch)
 });


export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);


