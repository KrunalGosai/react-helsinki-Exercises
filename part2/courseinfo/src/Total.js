function Total(props) {
    return (
        <p><b>Total of {props.parts.reduce((value,part) => { return value += part.exercises },0)} exercises</b></p>
    );
}
export default Total;
