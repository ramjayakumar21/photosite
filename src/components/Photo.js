import "./Photo.css";
import React, { useEffect, useState } from 'react';

export function Photo(props) {   
    
    const [imageURL, setImageURL] = useState(props.url);

    useEffect(() => {
        fetch(imageURL)
            .then(r => {
                const reader = new FileReader();
                reader.onload = () => {
                    localStorage.setItem(props.url, reader.result)
                };
                reader.readAsDataURL(r.blob());
            })
            .catch(err => console.log("Failed to get"))
            
        
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