const App = () => {
    return (
        <div>
            <Person 
                name="Danielle" 
                age={42} 
                hobbies={["crocheting", "programming","piano"]} 
            />
            <Person 
                name="Sean" 
                age={49} 
                hobbies={["working out", "cooking","live music"]} 
            />
            <Person 
                name="Tim" 
                age={13} 
                hobbies={["video games", "guitar", "basketball"]} 
            />
            <Person 
                name="Isaac" 
                age={11} 
                hobbies={["bass", "video games", "writing comics"]} 
            />
        </div>
    );
}

ReactDOM.render(
    <App/>, 
    document.getElementById("root")
);

