import React, { useEffect, useState } from 'react';
import {Photo} from './components/Photo.js';
import './App.css';

function App() {

  const [photosModules, setPhotosModules] = useState([]);

  let photos = [];

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => response.json())
    .then(json => setPhotosModules(json))
}, []);



  
  return (
    <div>
      Default
      {photosModules.map(item => {
        return (<div>
          <Photo 
            image={item}
          />
        </div>)
      })}
    </div>
  );
}

export default App;
