import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
    if (!props.selectedGif) {
        return <div></div>;
    }
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={() => props.onRequestClose()}>
            <div className="gif-modal">
                <div className="img-div">
                    <img className="gif-modal-img" alt="modal-here" src={props.selectedGif.images.original.url} />
                </div>
                <div className="img-div2">
                    <p><strong>Title:<br /></strong> {props.selectedGif.title}</p>
                    <p><strong>Source (url):<br /></strong> <a href={props.selectedGif.url}>{props.selectedGif.bitly_url}</a></p><br />
                    <button className="btn btn-info log2" onClick={props.addGif.bind(null, props.selectedGif)} > Add to "My Gifs"</button><br />
                    <button className="btn btn-info log log3" onClick={() => props.onRequestClose()}>Close</button><br />
                </div>
            </div>
        </Modal >
    );
};

export default GifModal;