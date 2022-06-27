import React from 'react';
import { Link } from 'react-router-dom';

function ImageResults(props) {

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px"}}>
            { props.images.length > 0 && props.images.map((image) => {
                return (
                <div key={image.id} style={{flexBasis: "auto"}}>
                    <div>
                        <Link to={{ pathname: `/image/${image.id}`}} state={{ image }}>
                            <img src={image.largeImageURL} alt={image.tags} style={{width: "100%", height: "200px"}}></img>
                        </Link>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ImageResults;