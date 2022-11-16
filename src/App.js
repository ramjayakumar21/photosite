import React, { useEffect, useState } from 'react';
import {Photo} from './components/Photo.js';
import './App.css';

function App() {
  const [photoList, setPhotoList] = useState([]);


  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => setPhotoList(json))
  }, []);

  function randomizeArray(array) {
    let newArray = [];

    // base case
    if (!array.length) {
      return newArray;
    }

    // get random index, push to newArray and remove from array
    let a = Math.floor(Math.random() * array.length);
    newArray.push(array[a]);
    array.splice(a, 1);

    // recursive step
    return newArray.concat(randomizeArray(array));
  }
 

  
  return (
    <div>
      <div className='photolist'>
        { 
        photoList.map(item => { return (
          <div>
            <Photo {...item} key={item.id} />
          </div>)}) 
        }
      </div>
      <div style={{display: 'flex', justifyContent: "center"}}>
        <button className="random-btn" onClick={() => {
            let copy = photoList;
            copy = randomizeArray(copy);
            setPhotoList(copy);
          }}>
          Randomize Array
        </button>
      </div>
    </div>
    
  );
}

export default App;
