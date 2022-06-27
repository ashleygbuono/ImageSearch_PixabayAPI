import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ImageDetails(props) {
    const location = useLocation();
    console.log("image detail props", props);
    //console.log("imageDetails location", location.state.image);

    return (
        <div>
            <div>
                <img src={location.state.image.largeImageURL} alt={location.state.image.tags}/>
            </div>
            <div>
                <p>Photo by: {location.state.image.user}</p>
                <p>{location.state.image.tags}</p>
                <button><Link to="/">Home</Link></button>
            </div>
        </div>
    )
}

export default ImageDetails