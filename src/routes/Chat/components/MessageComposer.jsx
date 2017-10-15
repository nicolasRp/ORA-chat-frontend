import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup} from 'react-bootstrap';

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
        const { content } = this.state
        const message = {
            user,
            content
        }
        this.props.send(message)
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            placeholder="enter your message"
                            type="input"
                            value={this.state.content}
                            onChange={(e) => this.setState({ content: e.target.value })}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    this.handleSubmit();
                                }
                            }}
                        />
                    </InputGroup>

                </FormGroup>
            </div>
        )
    }
}

export default MessageComposer;