import React from 'react';
import EditGifModal from './EditGifModal';

const MyGifs = (props) => {
    console.log(props);
    const gifsList = props.gifs.map((gif) => {
        return (
            <div className="gif-item small">
                <img src={gif.url} /><br />
                <small className="small">{gif.description}</small><br />
                <small className="small2"><a href={gif.url} target="_blank"> - VISIT GIF ORIGIN- </a></small><br />
                <div className="update-destroy">
                    <EditGifModal gif={gif} editGif={props.editGif} />
                    <button className="btn btn-info log3 m-2" onClick={props.deleteGif.bind(null, gif._id)}>Delete</button>
                </div>
            </div>
        )
    })
    return (
        <div><br />
            <div className="my-gifs">
                <h3 className="my-gifs">My Saved GIFs:</h3>
            </div>
            <div className="gif-list">
                {gifsList}
            </div>
        </div>
    );
}

export default MyGifs;

