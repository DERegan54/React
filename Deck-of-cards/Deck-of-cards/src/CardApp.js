import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Card from './Card'



const CardApp = () => {
    const [deck, setDeck] = useState(null);
    const [draw, setDraw] = useState(false);
    const [card, setCard] = useState([]);
    const [autoDraw, setAutoDraw] = useState(false);
    const timerRef = useRef(null);

    const BASE_URL = 'http://deckofcardsapi.com/api/deck';

    // On page load ONLY, get deck data from API
    useEffect(() => {
        async function getDeckData () {
            const deckRes = await axios.get(`${BASE_URL}/new/shuffle/`);
            setDeck(deckRes.data);
        }
        getDeckData();
    }, [])
                
    // Draw card on click
    useEffect(() => {
        async function getCardData() {
            // If there is a deck in state, and state of draw is not false
            if(draw && deck) {
                //desturcture deck to acces deck_id
                const {deck_id} = deck;
                // Call the API to get the next card
                const cardRes = await axios.get(`${BASE_URL}/${deck_id}/draw/`);
                // If there are no more cards in the deck, set draw state to false and alert user
                // that there are no cards left in the deck
                if(cardRes.data.remaining === 0) {
                    setDraw(false);
                    alert("No cards remain in this deck!")
                }
                // Define newCard as the card at index 0 in the array return from the API call
                const newCard = cardRes.data.cards[0];
                // Add the new card to the array of cards previously drawn
                setCard((prevCards) => [
                    ...prevCards,
                    {
                        id: newCard.code,
                        name: newCard.value + " " + newCard.suit,
                        image: newCard.image,
                    },
                ]);
                // Re-set draw state to false until next click
                setDraw(false);
            }
        }
        // Call the getCardData function
        getCardData();
        // Dependencies for this effect are the draw state and deck state
    }, [draw, deck]);

    // autoDraw capability
    useEffect(() => {
        async function getAutoDrawCardData() {
            // De-structure deck to acces deck_id
            let {deck_id} = deck;
            try {
                // Call API to get next card for auto draw
                let autoDrawRes = await axios.get(`${BASE_URL}/${deck_id}/draw/`);
                // If there are no cards remaining in the deck...
                if(autoDrawRes.data.remaining === 0) {
                    // Set autoDraw state to false and alert user
                    setAutoDraw(false);
                    alert("No cards remaining in this deck!");
                }
                // Define card as the next card drawn from autoDraw
                const card = autoDrawRes.data.cards[0];
                // Add the card to the array of cards previously drawn by autoDraw
                setCard((a) => [
                    ...a,
                    {
                        id: card.code,
                        name: card.value + " " + card.suit,
                        image: card.image,
                    },
                ]);
            } catch (err) {
                console.log(err);
            }
        }
        // If the autoDraw state is true and ther is no current timerRef, then autoDraw card every second
        if(autoDraw && !timerRef.current) {
            timerRef.current = setInterval(async () => {
                await getAutoDrawCardData();
            }, 1000);
        }

        return () => {
            clearInterval(timerRef.current);
            timerRef.current = null;
        };
    }, [autoDraw, setAutoDraw, deck]);

    // Draw card on button click (setting draw state to true allows getCardData to run)
    const drawCard = () => {
        setDraw(true);
     };
 
    // Toggle autoDraw state to true/false
    const toggleAutoDraw = () => {
        setAutoDraw((autoDraw) => !autoDraw);
    } 

    // Store drawn cards in array   
    const cardsToDisplay = card.map((c) => (
        <Card key={c.id} name={c.name} image={c.image} />
    ));
    // Return JSX to be rendered
    return (
        <div className="Deck">
            <h1>Deck of Cards</h1>
            <button className="Deck-drawButton" onClick={drawCard}>Draw a Card!</button>
            <button className="Deck-autoDrawButton" onClick={toggleAutoDraw}>
                {autoDraw ? "Do NOT" : "Please" } draw cards for me!</button>
            <hr></hr>
            <div className="Deck-card-area">
                <h3>Cards Drawn:</h3>
                <p>{cardsToDisplay}</p>
            </div>  
        </div>
    );
    
};


export default CardApp;