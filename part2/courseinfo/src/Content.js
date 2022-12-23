import Part from "./Part";

function Content(props) {
    return (
        <>
            {props.parts.map(part => (<Part key={part.id} part={part.name} exercises={part.exercises}></Part>))}
        </>
    );
}
export default Content;
