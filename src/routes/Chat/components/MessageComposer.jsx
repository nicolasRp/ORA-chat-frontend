import React, {Component} from 'react';
import {FormGroup, FormControl, Row, Col, Button} from 'react-bootstrap';

class MessageComposer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        const user = localStorage.getItem("token")
        const {content} = this.state
        const message = {
            user,
            content
        }
        this.props.send(message)
    }

    render() {
        return (
            <Row>
                <Col xs={9}>
                    <FormGroup>
                        <FormControl
                            placeholder="enter your message"
                            type="input"
                            value={this.state.content}
                            onChange={(e) => this.setState({content: e.target.value})}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.handleSubmit();
                                }
                            }}
                        />
                    </FormGroup>
                </Col>
                <Col xs={3}>
                    <Button type="submit" className='btn-orange'>
                        <i className="fa fa-arrow-right" />
                        {' '}Submit
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default MessageComposer;