import React, { useState } from 'react';

function ImageSearch(props) {
    const [searchQ, setSearchQ] = useState("");

    const onSubmit = (ev) => {
        ev.preventDefault();
        props.searchImages(searchQ)
    }
    return (
        <div> Image Search
           <form onSubmit={onSubmit}>
               <input type="text" name="searchQuery" placeholder='Search for images here...' onChange={ev => setSearchQ(ev.target.value)}></input>
               <button>Search</button>
           </form>
           <hr />
        </div>
    )
}

export default ImageSearch;