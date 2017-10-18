import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chat from './components/Chat.jsx';
import io from 'socket.io-client';
import {Col, Grid, Row} from 'react-bootstrap';
import moment from 'moment';

import './chat.global.scss';


class ChatContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if (localStorage.getItem("token") == null) {
            this.props.history.push('/chat')
        }
        
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.data.user).length === 0) {
            localStorage.removeItem("token");
            this.props.history.push('/');
        }
    }

    render() {

        const {user} = this.props.data
        return (
            <div className="chat">
                <div className="topBar">
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <i className="fa fa-bars"/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="userInfo">
                    <Grid>
                        <Row>
                            <Col
                                xs={12}
                                sm={10} smoffset={1}
                                md={8} mdOffset={2}
                            >
                                <h2>User: {user.name}</h2>
                                <p>{moment().format('MMMM D, YYYY')}</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="chatLog">
                    <Chat 
                    messages={this.props.data.chat}
                    user={user} 
                    send={this.props.actions.sendMessage}/>
                </div>
                <footer>
                    <Grid>
                        <Row>
                            <Col
                                xs={12}
                                sm={10} smoffset={1}
                                md={8} mdOffset={2}
                                className="text-right"
                            >
                                <p>&copy; 2017 All rights reserved.</p>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
                <button className="button" onClick={this.props.actions.userLogout}>logout</button>
            </div>
        )
    }
}

export default ChatContainer;
