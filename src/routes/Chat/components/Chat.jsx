import React, {Component} from 'react';
import MessageComposer from './MessageComposer';
import MessageList from './MessageList';
import {Col, Grid, Input, Row} from 'react-bootstrap';


class Chat extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid>
                <Row>
                    
                    <Col
                        xs={12}
                        sm={10} smoffset={1}
                        md={8} mdOffset={2}
                    >
                        <MessageList messages={this.props.messages}/>
                        <MessageComposer user={this.props.user} 
                        send={this.props.send} />
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Chat;