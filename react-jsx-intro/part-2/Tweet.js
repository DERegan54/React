const Tweet = (props) => {
    return (
        <div>
            <h2>Username: @{props.username}</h2>
            <h3>Author: {props.author}</h3>
            <h4>Date: {props.date}</h4>
            <h5>Message: {props.message}</h5>
        </div>
    )
}