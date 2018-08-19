import React, { Component } from 'react';
import SearchBar from './SearchBar';
import GifModal from './GifModal';


class CreateGif extends Component {


    render() {
        return (
            <div className="results">
                <SearchBar handleTermChange={this.props.handleTermChange} />
                <GifModal
                    addGif={this.props.addGif}
                    modalIsOpen={this.props.modalIsOpen}
                    selectedGif={this.props.selectedGif}
                    onRequestClose={this.props.onRequestClose}
                />
            </div>
        );
    }
}

export default CreateGif;