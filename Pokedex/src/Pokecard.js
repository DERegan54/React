import React from 'react';
import "./Pokecard.css";

const API_URL = 'https://raw.githubusercontent.com/' + 'PokeAPI/sprites/master/sprites/pokemon/';

// Renders individual card

function Pokecard(props) {
    let imgSrc = `${API_URL}${props.id}.png`;
    return (
        <div className="Pokecard">
             <div className="Pokecard-title"><b>Card name:</b> { props.name }</div>
            <img className="Pokecard-image" src={imgSrc} />
            <div className="Pokecard-type"><b>Card type:</b> { props.type }</div> 
            <div className="Pokecard-exp"><b>Experience:</b> {props.exp}</div>
        </div>
    );
}

export default Pokecard;