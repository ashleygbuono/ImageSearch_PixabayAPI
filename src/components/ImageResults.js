import React from 'react';

function ImageResults(props) {
    console.log("image results props", props);
    console.log("results props 1 lvl", props.images);
    console.log("results props 2 lvl", props.images.images);
    //console.log("drilling", props.images.images);
    const chars = ["a", "b", "c", "d", "e"]

    return (
        <div>
            { props.images.length > 0 && props.images.images.map((image) => {
                return (
                <div key={image.id}>
                    <div>
                        <img src={image.largeImageURL} alt={image.tags}></img>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ImageResults;