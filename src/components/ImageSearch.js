import React from 'react';

function ImageSearch(props) {
    // const [searchQ, setSearchQ] = useState("");

    // const onSubmit = (ev) => {
    //     ev.preventDefault();
    //     props.searchImages(searchQ)
    // }
    //console.log("imgsearch props", props);
    return (
        <div> Image Search
           <form onSubmit={props.handleGetRequest}>
           {/* onChange={ev => setSearchQ(ev.target.value)} */}
               <input type="text" name="searchQuery" placeholder='Search for images here...' ></input>
               <button>Search</button>
           </form>
        </div>
    )
}

export default ImageSearch;