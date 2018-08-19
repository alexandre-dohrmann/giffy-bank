import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditGifModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            gifToEdit: {
                description: '',
                url: props.gif.url,
                _id: props.gif._id
            }
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleFormChange = (e) => {
        this.setState({
            gifToEdit: {
                ...this.state.gifToEdit,
                [e.target.name]: e.target.value
            },
        })
    }

    render() {
        return (
            <div className="edit-modal-div">
                <Button className="btn btn-info log m-1" onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="modal-header" toggle={this.toggle}>GIVE YOUR GIFE A NEW NAME:</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.props.editGif.bind(null, this.state.gifToEdit)}>
                            <label className="edit-description">
                                Edit Description "{this.props.gif.description}":<br />
                                <input className="gif-edit-input" type="text" name="description" onChange={this.handleFormChange} placeholder="enter new description" />
                            </label>
                            <Button type="submit" color="primary" onClick={this.toggle}>Update</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default EditGifModal;