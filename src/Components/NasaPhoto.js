import React from 'react';

const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} alt="Nasa Space" />
            <p className='description-photo'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;