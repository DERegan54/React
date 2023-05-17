import React from "react";


const Box = ({id, width=100, height=100, backgroundColor='lavender', handleDeleteBox}) => {
    const deleteBox = () => handleDeleteBox(id);
    return (
        <div>
            <div 
                style={{
                    backgroundColor, 
                    width: `${width}px`,
                    height: `${height}px`
                }}
            />
            <button onClick={deleteBox}>X</button>
        </div>
    );
}

export default Box;