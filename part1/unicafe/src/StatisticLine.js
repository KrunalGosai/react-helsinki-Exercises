function StatisticsLine(props) {

    return (
        <tr>
            <td><b>{props.name}</b></td>
            <td>{props.value}</td>
        </tr>
    )
}

export default StatisticsLine;
