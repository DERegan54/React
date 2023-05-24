import React, {useState} from "react";
import MadlibsForm from "./MadlibsForm";
import MadlibsStory from "./MadlibsStory";
import "./Madlibs.css";

// This component has two states.  
// story/setStory contains the actual text of the story.
// storyCreated/setStoryCreated determins whether the MadlibsForm is displayed (if StoryCreated is set to false)
//      or if the MadlibsStory is displayed (if StoryCreated is set to true)

const Madlibs = () => {
    const [story , setStory] = useState();
    const [storyCreated, setStoryCreated] = useState(false);

    const createStory = (formData) => {
        const {name, adjective1, noun1, adverb, verb, exclamation, adjective2} = formData;

        setStory(`${name} was sleeping soundly until a ${adjective1} sound woke her up.  She climbed out of bed to see what it was.
            When she got to the hallway she heard the ${adjective1} sound again, and so she grabbed her ${noun1} and ${adverb} ${verb} to the kitchen. ${exclamation}! 
            Breakfast was going to be ${adjective2}!`);

        setStoryCreated(storyCreated => (
            !storyCreated
        ))
    }

    return (
        <>
            <h1>Madlibs!</h1>
            <div className="Madlibs-storyContainer">
                {storyCreated === false ?
                    <MadlibsForm createStory={createStory} /> 
                    :
                    <MadlibsStory className="Madlibs-story" story={story} /> }
            </div>
        </>
    )
}

export default Madlibs;

