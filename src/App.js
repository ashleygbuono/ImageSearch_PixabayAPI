import React, { useState, useEffect } from 'react';
import './App.css';
import ImageSearch from './components/ImageSearch';
import ImageResults from './components/ImageResults';

const API_KEY = '28291536-2cdcaa97dc7ea649bd02bf0cf';

function App() {
  const [images, setImages] = useState([]);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQ}&image_type=photo`;

    fetch(url)
    .then(req => req.json()
    .then(res => {
      setImages({ images: res.hits })
      console.log("images fetch", images);
      console.log("searchQ fetch", searchQ);
    }))    
  }, [searchQ])

  return (
    <div>
      <div>
        <ImageSearch searchImages={(searchQ) => setSearchQ(searchQ)}/>
        <hr />
        <ImageResults images={images}/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
