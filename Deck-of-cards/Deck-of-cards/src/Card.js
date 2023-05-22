import React, {useState, useEffect, useRef} from 'react';

const Card = ({name, image}) => {
    return  <img classname="Card" 
            alt={name}
            src={image} />
}


export default Card;