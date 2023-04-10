const App = () => (
    <div>
        <Tweet 
            username="boyMama" 
            author="Danielle" 
            date="4/10/2023" 
            message="Guys! Get off of your ipads and GO OUTSIDE!" 
        />
        <Tweet 
            username="zeroLogic" 
            author="Tim" 
            date="4/10/2023" 
            message="Mom! Let me just finish this one thing!" 
        />
        <Tweet 
            username="minecraftBoi" 
            author="Isaac" 
            date="4/10/23" 
            message="Look at the mansion I built in Minecraft!" />
    </div>
);

ReactDOM.render(
    <App/>, 
    document.getElementById("root")
);

