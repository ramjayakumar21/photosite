import "./Photo.css";
import React, { useEffect, useState } from 'react';
import imagesCache from 'images-cache';

export function Photo(props) {   
    
    const [imageURL, setImageURL] = useState(props.url);

    useEffect(() => {
        // Remote URLS don't have CORS enabled, as such images can't be cached
        imagesCache.load(imageURL)
            .then(() => {
                setImageURL(imagesCache.get(imageURL))
            })
            .catch((err) => {console.log(err)})
    });
    

    return (
        <div>
            <img className="photo" src={props.url}></img>
            <div className="photo--title">
                <div className="photo--title-text">
                    {props.title}
                </div>
            </div>
            
        </div>
    )

}