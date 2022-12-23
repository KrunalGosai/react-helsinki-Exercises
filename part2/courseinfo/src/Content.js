import Part from "./Part";

function Content(props) {
    return (
        <>
            {props.parts.map(part => (<Part key={part.name} part={part.name} exercises={part.exercises}></Part>))}
        </>
    );
}
export default Content;
