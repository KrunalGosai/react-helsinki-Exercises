import Part from "./Part";

function Content(props) {
    return (
        <>
            <Part part={props.content.part1} exercises={props.content.exercises1}></Part>
            <Part part={props.content.part2} exercises={props.content.exercises2}></Part>
            <Part part={props.content.part3} exercises={props.content.exercises3}></Part>
        </>
    );
}
export default Content;
