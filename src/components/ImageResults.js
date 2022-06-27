import React from 'react';
import { Link } from 'react-router-dom';

function ImageResults(props) {
    console.log("image results props", props);
    console.log("results props 1 lvl", props.images);
    console.log("results props 2 lvl", props.images.images);
    //console.log("drilling", props.images.images);

    return (
        <div>
            { props.images.length > 0 && props.images.images.map((image) => {
                return (
                <div key={image.id}>
                    <div>
                        <Link to={{ pathname: `/image/${image.id}`}} state={{ image }}>
                            <img src={image.largeImageURL} alt={image.tags}></img>
                        </Link>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ImageResults;