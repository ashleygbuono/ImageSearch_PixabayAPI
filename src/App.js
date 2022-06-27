import React from 'react';
import './App.css';
import ImageSearch from './components/ImageSearch';
import ImageResults from './components/ImageResults';

const API_KEY = '28291536-2cdcaa97dc7ea649bd02bf0cf';

class App extends React.Component {

  state = { images: [] }

  handleGetRequest = async (ev) => {
    ev.preventDefault();
    const searchQ = ev.target.elements.searchQuery.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQ}&image_type=photo`;

    const req = await fetch(url);
    const res = await req.json();
    this.setState({ images: res.hits })
    console.log(this.state.images);
    console.log(searchQ);
  }

  render() {
    return (
      <div>
        <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        <hr />
        <ImageResults images={this.state.images}/>
        </div>
        <div>
          <p>Powered by: <img src="https://pixabay.com/static/img/logo.png" alt={""}></img></p>
        </div>
      </div>
    )
  }
}



// function App() {
//   const [images, setImages] = useState([]);
//   const [searchQ, setSearchQ] = useState("");

//   useEffect(() => {
//     const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQ}&image_type=photo`;

//     fetch(url)
//     .then(req => req.json()
//     .then(res => {
//       setImages({ images: res.hits })
//     }))    
//   }, [searchQ])

//   return (
//     <div>
//       <div>
//         <ImageSearch searchImages={(searchQ) => setSearchQ(searchQ)}/>
//         <hr />
//         <ImageResults images={images}/>
//       </div>
//       <div>
//       </div>
//     </div>
//   );
// }

export default App;
