import React, {useState} from "react"

// This component renders the form used to create the MadlibsStory.
// When the formData is set to INITIAL_STATE, the form fields are blank and waiting to be filled in
// The handleChange function allows for the text the user is typing to be rendered in the form fields 
// The handleSubmit function sends the formData to the createStory function in the Madlibs component, 

const MadlibsForm = ({createStory}) => {
    const INITIAL_STATE = {
        name : "",
        adjective1 : "",
        noun1 : "",
        adverb : "",
        verb : "",
        exclamation : "",
        adjective2 : "",
        noun2 : ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange= (evt) => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createStory(formData)
        setFormData(INITIAL_STATE);
    };

    return (
        <div className="Madlibs-formContainer">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="adjective1">Adjective 1:</label>
                <input 
                    type="text"
                    id="adjective1"
                    name="adjective1"
                    value={formData.adjective1}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="noun1">Noun 1:</label>
                <input 
                    type="text"
                    id="noun1"
                    name="noun1"
                    value={formData.noun1}
                    onChange={handleChange}
                />      
                <br></br>
                <br></br>
                <label htmlFor="adverb">Adverb:</label>
                <input 
                    type="text"
                    id="adverb"
                    name="adverb"
                    value={formData.adverb}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="verb">Verb:</label>
                <input 
                    type="text"
                    id="verb"
                    name="verb"
                    value={formData.verb}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="exclamation">Exclamation:</label>
                <input 
                    type="text"
                    id="exclamation"
                    name="exclamation"
                    value={formData.exclamation}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <label htmlFor="adjective2">Adjective 2:</label>
                <input 
                    type="text"
                    id="adjective2"
                    name="adjective2"
                    value={formData.adjective2}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <br></br>
                <button>Create a Madlib!</button>
            </form>
        </div>
    );
};

export default MadlibsForm;

