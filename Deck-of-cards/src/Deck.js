import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";  

// Gets deck data from API and draws one card at a time

const API_URL = "https://deckofcardsapi.com/api/deck";

const Deck = () => {
    const [deck, setDeck] = useState(null);
    const [cardDrawn, setCardDrawn] = useState([]);
    const card = useRef();
    
    // Make a request to API to fetch data on deck, and then use data to setDeck()
    useEffect(() => {
        async function fetchDeckData() {
            let deckData = await axios.get(`${API_URL}/new/shuffle/`);
            setDeck(deckData.data);   
        }
        fetchDeckData(); 
        
    }, [setDeck]);

    // deckId.current.deck_id = deckId;  

    // Draw one card on button click
    useEffect(() => {
        async function fetchCardData() {
            let {deck_id} = deck;
            let cardData = await axios.get(`API_URL\${deckId}/draw/`);
            let cardDrawn = cardData.data.cards[0];
            setCardDrawn(d => [...d,{id: card.code, image: card.image, name: card.value + " " + card.suit}]);
            cardDrawn.current = card;
        }
        fetchCardData()
    }, [deck, setCardDrawn]);
    
    const drawCard = () => {
        setCardDrawn(card);
    };

    const cardsDrawn = cards.map(c => (
        <Card key={c.id} image={c.image} name={c.name}/>
    ));

    return (
        <div classname="Deck">
            {/* <p>{deck.deck_id}</p> */}
            <h1>Click the button to draw a card!</h1>
            <button className="Deck-drawButton" onClick={drawCard}>Draw a Card!</button>
            <div className="Deck-cardDisplayArea">
                <h2>Cards Drawn:</h2>
                <div className="Deck-cards">{cardsDrawn}</div>
            </div>
        </div>
    );
}

export default Deck;