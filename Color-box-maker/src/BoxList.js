import React, {useState} from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";
import BoxId from "./BoxId";

const BoxList = () => {
    const id = <BoxId />;
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]);
        console.log(newBox)
    };
    
    const deleteBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const newBoxComponents = boxes.map(box => (
        <Box 
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            handleDeleteBox={deleteBox}
        />
    ));

    return (
        <div>
            <h1>Color Box Maker</h1>
            <BoxForm addBox={addBox} />
            {newBoxComponents}
        </div>
    );
};


export default BoxList;

