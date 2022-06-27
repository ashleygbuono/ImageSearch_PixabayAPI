import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ImageDetails(props) {
    const location = useLocation();

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignContent: "center", marginTop: "30px", gap: "20px"}}>
                <div>
                    <img src={location.state.image.largeImageURL} alt={location.state.image.tags} style={{width: "100%", height: "500px"}}/>
                </div>
                <div style={{border: "solid 2px", borderRadius: "10px", padding: "1rem"}}>
                    <p>Photo by: {location.state.image.user}</p>
                    <p>Tags: {location.state.image.tags}</p>
                    <button style={{borderRadius: "10px", height: "2rem", border: "outset 2px"}}><Link to="/">Home</Link></button>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", marginTop: "40px", marginLeft: "5px", height: "35px"}}>
                <p>Powered by: <a href="https://pixabay.com/api/docs/"><img src="https://pixabay.com/static/img/logo.png" alt={""} style={{width: "120px", height: "25px", marginTop: "5px"}}></img></a></p>
            </div>
        </div>
    )
}

export default ImageDetails