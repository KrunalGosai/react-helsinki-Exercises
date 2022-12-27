const PersonForm = (props) => {
    return (
        <form onSubmit={props.submitForm}>
            <div>
                name: <input value={props.newName.name} onChange={(e) => props.newNameChange(e, 'name')} />
            </div>
            <div>
                number: <input type='number' value={props.newName.number} maxLength="10" onChange={(e) => props.newNameChange(e, 'number')} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm;