const Persons = (props) => {
    return (
        <>
            {props.displayContacts.map((person) => <div key={person.id}>{person.name} {person.number ? `(${person.number})` : ''}</div>)}
        </>
    )
}
export default Persons