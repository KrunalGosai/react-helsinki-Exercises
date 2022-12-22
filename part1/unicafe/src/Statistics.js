import StatisticsLine from "./StatisticLine"

function Statistics(props) {

    return (
        <>
            <h2>Statistics</h2>
            {(props.good == 0 && props.neutral == 0 && props.bad == 0)
                ? (<p>No feedback available, Please give your feedback</p>)
                : (<>
                    <StatisticsLine name="Good" value={props.good}></StatisticsLine>
                    <StatisticsLine name="Neutral" value={props.neutral}></StatisticsLine>
                    <StatisticsLine name="Bad" value={props.bad}></StatisticsLine>
                    <StatisticsLine name="All" value={props.good + props.neutral + props.bad}></StatisticsLine>
                    <StatisticsLine name="Average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}></StatisticsLine>
                    <StatisticsLine name="Positive" value={((props.good * 100) / (props.good + props.neutral + props.bad)) + ' %'}></StatisticsLine>
                </>
                )}



        </>
    )
}

export default Statistics