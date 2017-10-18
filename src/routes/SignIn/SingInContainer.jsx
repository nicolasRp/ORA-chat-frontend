import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";

import './SignIn.global.scss'

class SignInContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dataUser) {
            localStorage.setItem("token", nextProps.dataUser.token)
            this.props.history.push('/chat')
        }
    }

    componentDidMount() {
        if (localStorage.getItem("token") !== null) {
            this.props.history.push('/chat')
        }
    }

    render() {
        return (
            <div className='signIn'>
                <div className="btnWrapper">
                    <Button
                        bsStyle='orange'
                        onClick={this.props.registerUser}
                    >
                        Sign in <i className="fa fa-sign-in"/>
                    </Button>
                </div>
            </div>
        )
    }
}

export default SignInContainer;

