function Controls(props) {

    return (
        <div>
            <button onClick={() => props.controlClick('good')}>Good</button>
            <button onClick={() => props.controlClick('neutral')}>Neutral</button>
            <button onClick={() => props.controlClick('bad')}>Bad</button>
        </div>
    )
}

export default Controls