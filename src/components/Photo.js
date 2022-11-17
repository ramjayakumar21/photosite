import "./Photo.css";
import React, { useEffect, useState } from 'react';
import imagesCache from 'images-cache';

export function Photo(props) {   
    
    const [imageURL, setImageURL] = useState(props.url);

    useEffect(() => {
        // Remote URLS don't have CORS enabled, as such images can't be cached
        // Stores image in cache as Base64 URL, recalls it later if already saved

        imagesCache.load(imageURL)
            .then(() => {// do nothing
            })
            .catch((err) => {console.log(err)})
    });
    

    return (
        <div>
            <img className="photo" src={imagesCache.get(imageURL)}></img>
            <div className="photo--title">
                <div className="photo--title-text">
                    {props.title}
                </div>
            </div>
            
        </div>
    )

}