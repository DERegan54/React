import React from "react";

// This component renders the paragraph that contains the text that story was set to in the Madlibs component.

const MadlibsStory = ({story}) => {
    return (
        <>
            <p>{story}</p>
        </> 
    )
}

export default MadlibsStory;


