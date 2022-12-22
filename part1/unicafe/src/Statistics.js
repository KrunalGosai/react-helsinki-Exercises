function Statistics(props) {

    return (
        <>
            <h2>Statistics</h2>
            {(props.good == 0 && props.neutral == 0 && props.bad == 0)
                ? (<p>No feedback available, Please give your feedback</p>)
                : (<>
                    <p><b>Good :</b> {props.good}</p>
                    <p><b>Neutral :</b> {props.neutral}</p>
                    <p><b>Bad :</b> {props.bad}</p>
                    <p><b>All :</b> {props.good + props.neutral + props.bad}</p>
                    <p><b>Average :</b> {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
                    <p><b>Positive :</b> {(props.good * 100) / (props.good + props.neutral + props.bad)} %</p>
                </>
                )}



        </>
    )
}

export default Statistics