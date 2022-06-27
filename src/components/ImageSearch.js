import React, { useState } from 'react';

function ImageSearch() {
    const [searchQ, setSearchQ] = useState("");
    return (
        <div> Image Search
           <form>
               <input type="text" name="searchQuery" placeholder='Search for images here...'></input>
               <button>Search</button>
           </form>
           <hr />
        </div>
    )
}

export default ImageSearch;