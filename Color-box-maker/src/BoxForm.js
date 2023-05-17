import React, {useState} from "react";
import BoxId from "./BoxId";

const BoxForm = ({ addBox }) => {
    const boxId = <BoxId />;
    const [formData, setFormData] = useState({
        backgroundColor: "",
        width: "",
        height: ""
    });
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox({...formData, id:boxId});
        setFormData({backgroundColor: "", width: "", height: ""});
    };

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name] : value
        }));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="backgroundColor">Background Color:</label>
                <input 
                    type="text"
                    id="backgroundColor"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />

                <label htmlFor="width">Width:</label>
                <input 
                    type="text"
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />  

                <label htmlFor="height">Height:</label>
                <input 
                    type="text"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />  

                <button>Add a Box!</button>
            </form>
        </div>
    );
};

export default BoxForm;