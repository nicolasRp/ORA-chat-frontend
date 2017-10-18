import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer';
import {Row, Grid, Col} from 'react-bootstrap';

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
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Chat;