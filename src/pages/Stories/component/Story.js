import * as React from 'react';
import { Card, StyledBody } from "baseui/card";
import { Button } from 'baseui/button';
import { Modal, ModalHeader, ModalBody, ModalButton, ModalFooter, FocusOnce } from "baseui/modal";
export default class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }
    handleClick = () => {
        this.setState({ isOpen: true });
    }
    close = () => {
        this.setState({ isOpen: false });
    }
    render() {
        const { title, summary, text } = this.props;
        return (
            <React.Fragment>
                <Card overrides={{ Root: { style: { width: '200px' } } }}>
                    <StyledBody>
                        <h2>
                            {title}
                        </h2>
                        {summary}
                        <Button onClick={this.handleClick}>Read More</Button>
                        <Modal onClose={this.close} isOpen={this.state.isOpen}>
                            <FocusOnce>
                                <ModalHeader><h2>{title}</h2></ModalHeader>
                            </FocusOnce>
                            <ModalBody>
                                <p>
                                    <h3>{summary}</h3>
                                    {text}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <ModalButton kind='primary' onClick={this.close}>
                                    Close
                                </ModalButton>
                            </ModalFooter>
                        </Modal>
                    </StyledBody>
                </Card>
            </React.Fragment>
        )
    }
}

