function Statistics(props) {

    let noData = props.good == 0 && props.neutral == 0 && props.bad == 0

    return (
        <>
            <h2>Statistics</h2>
            {(props.good == 0 && props.neutral == 0 && props.bad == 0)
                ? (<p>No feedback available, Please give your feedback</p>)
                : (<>
                    <p>Good : {props.good}</p>
                    <p>Neutral : {props.neutral}</p>
                    <p>Bad : {props.bad}</p>
                </>
                )}



        </>
    )
}

export default Statistics