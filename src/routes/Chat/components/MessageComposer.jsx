import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
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
        const {content} = this.state;
        const time = moment().format('MMM Do YY, h:mm a');
        const user = this.props.user.name;

        const message = {
            user,
            content,
            time
        }

        this.props.send(message)
        this.setState({
            content: ''
        })
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
                    <Button type="submit" 
                    onClick={this.handleSubmit}
                    className='btn-orange'>
                        <i className="fa fa-arrow-right" />
                        {''}Submit
                    </Button>
                </Col>
            </Row>
        )
    }
}

export default MessageComposer;