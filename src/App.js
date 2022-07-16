import React from 'react';
import "./App.css";
import ImageSearch from './components/ImageSearch';
import ImageResults from './components/ImageResults';

const API_KEY = process.env.REACT_APP_API_KEY;
class App extends React.Component {

  state = { images: [] }

  handleGetRequest = async (ev) => {
    ev.preventDefault();
    const searchQ = ev.target.elements.searchQuery.value;
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQ}&image_type=photo`;

    const req = await fetch(url);
    const res = await req.json();
    this.setState({ images: res.hits })
  }

  render() {
    return (
      <div>
        <div>
        <ImageSearch handleGetRequest={this.handleGetRequest}/>
        <hr />
        <ImageResults images={this.state.images}/>
        </div>
        <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", marginTop: "400px", marginLeft: "5px", height: "35px"}}>
          <p>Powered by: <a href="https://pixabay.com/api/docs/"><img src="https://pixabay.com/static/img/logo.png" target="" alt={""} style={{width: "120px", height: "25px", marginTop: "5px"}}></img></a></p>
        </div>
      </div>
    )
  }
}

export default App;
