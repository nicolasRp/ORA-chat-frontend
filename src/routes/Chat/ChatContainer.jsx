import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chat from './components/Chat.jsx';
import io from 'socket.io-client';
import moment from 'moment';

import './chat.global.scss';
import MessageComposer from "./components/MessageComposer";


class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("token") == null) {
            // this.props.history.push('/chat')
        }
    
        this.props.socket.on('new bc message', function(data){
            console.log('data msg', data)
        })        
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.data.user).length === 0) {
            localStorage.removeItem("token");
            // this.props.history.push('/');
        }
    }

    toggleMenu() {
        this.setState({showMenu: !this.state.showMenu})
    }

    render() {
        const {user} = this.props.data
        return (
            <div className={`chat ${showMenu ? 'drawled' : ''}`}>
                <div className="drawler">
                    <div className="closeBtn">
                        <i className="fa fa-times" onClick={() => this.toggleMenu()} />
                    </div>
                    <div className="headLine">
                        <h2>Ora Chat</h2>
                    </div>
                    <div className="actions">
                        <ul className="list-unstyled">
                            <li className='bttn' onClick={this.props.actions.userLogout}>
                                LOG OUT
                            </li>
                            <li className='user'>
                                {user.name} Kam
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="topBar">
                        <div className="menu">
                            <i className="fa fa-bars" onClick={() => this.toggleMenu()}/>
                        </div>
                    </div>
                    <div className="userInfo">
                        <div className="data">
                            <h2>User: {user.name}</h2>
                            <p>{moment().format('MMMM D, YYYY')}</p>
                        </div>
                    </div>
                    <div className="chatLog">
                        <Chat messages={this.props.data.chat}/>
                        <MessageComposer user={user} send={this.props.actions.sendMessage}/>
                    </div>
                    <footer>
                        <div className="copy">
                            <p>&copy; 2017 All rights reserved.</p>
                        </div>
                    </footer>
                </div>
                <div className="chatLog">
                    <Chat 
                    socket={this.props.socket}
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
