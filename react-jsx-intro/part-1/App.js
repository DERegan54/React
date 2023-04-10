const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Danielle" />
    </div>
)

ReactDOM.render(
    <App/>, 
    document.getElementById("root")
);
