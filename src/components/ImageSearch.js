import React from 'react';

function ImageSearch(props) {
    // const [searchQ, setSearchQ] = useState("");

    // const onSubmit = (ev) => {
    //     ev.preventDefault();
    //     props.searchImages(searchQ)
    // }
    //console.log("imgsearch props", props);
    return (
        <div style={{width: '100%', textAlign: "center", marginTop: "3rem", marginBottom: "3rem"}}> Image Search
           <form onSubmit={props.handleGetRequest} style={{margin: "0 auto", width: "40%"}}>
           {/* onChange={ev => setSearchQ(ev.target.value)} */}
               <input type="text" name="searchQuery" placeholder='Search for images here...' style={{borderRadius: "10px", width: "50%", height: "2rem", fontSize: "1rem", marginRight: "5px", marginTop: "10px", border: "outset 2px" }}></input>
               <button style={{borderRadius: "10px", height: "2rem", border: "outset 2px"}}>Search</button>
           </form>
        </div>
    )
}

export default ImageSearch;