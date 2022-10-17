import React from 'react';
import styled from 'styled-components';


const NasaPhotWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledH3 = styled.h3 `
    color: #7F7FFF;
    font-size: 3.5rem;
` 
const StyledDate = styled.p `
    font-size: 1.5rem;
    margin: 0px;
    color: #cd5c5c;
`

const StyledImage = styled.img `
  max-width: 70%;
  object-fit: cover;
  border-radius: 10px;
`

const StyledDescription = styled.p `
    max-width: 50%;
    padding: 1%;
    border: 2px dashed black;
`

const NasaPhoto = (props) => {
    return (
        <NasaPhotWrapper className='nasa-photo-wrapper'>
            <StyledH3>{props.photo.title}</StyledH3>
            <StyledDate>{props.photo.date}</StyledDate>
            <StyledImage src={props.photo.hdurl} alt="Nasa Space" />
            <StyledDescription className='description-photo'>{props.photo.explanation}</StyledDescription>
        </NasaPhotWrapper>
    )
}

export default NasaPhoto;