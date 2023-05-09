import React, { useState }  from 'react';
import './EightBall.css';


   
function EightBall (props) {
    const [color, setColor] = useState("black");
    const [msg, setMsg] = useState("Think of a question");
    
    const genAnsIdx = (arr) => {
        const randIdx = Math.floor(Math.random() * arr.length);
        return arr[randIdx];
    }

    const ansOnClick = () => {
        const {msg, color} = genAnsIdx(props.answers);
        setMsg(msg);
        setColor(color);
       
    }   

    const askNewQuestion = () => {
        setMsg("Think of a question");
        setColor("black");
    }
    
    return (
        <div className="EightBall-container">
            <h1 className="Eightball-heading">Magic 8 Ball</h1>
            <div className="EightBall-msg" style = {{ color: color }}>
                <b>{msg}</b>     
            </div>
            <div>
                <h2>
                    <button onClick={ansOnClick}>The 8 Ball says...</button> 
                    <button onClick={askNewQuestion}>Ask another question</button>
                </h2>
            </div>
        </div>
    ); 
}
 
EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green"},
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "gold" },
        { msg: "Reply hazy, try again.", color: "gold" },
        { msg: "Ask again later.", color: "gold" },
        { msg: "Better not tell you now.", color: "gold" },
        { msg: "Cannot predict now.", color: "gold" },
        { msg: "Concentrate and ask again.", color: "gold" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
      
} 

export default EightBall;