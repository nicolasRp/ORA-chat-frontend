import React, {Component} from 'react';
import MessageComposer from './MessageComposer';
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
                        <MessageComposer send={this.props.send}/>
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default Chat;