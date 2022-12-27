import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const emptyName = { name: '', number: '' }
  const [newName, setNewName] = useState(emptyName)

  const newNameChange = (event, param) => {
    let data = {...newName};
    data[param] = event.target.value
    setNewName(data);
  }
  const submitForm = (event) => {
    event.preventDefault()

    // check for duplicate names if exist already show alert and skip further process
    if (runDuplicateValidation()) {
      alert(`${newName} is already added to phonebook`);
      setNewName(emptyName);
      return;
    }

    const nameData = newName
    setPersons(persons.concat(nameData));
    setNewName(emptyName);
  }

  const runDuplicateValidation = () => {
    return persons.filter((person) => {
      return person.name.toLowerCase().trim() == newName.name.toLowerCase().trim();
    }).length > 0;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName.name} onChange={(e) => newNameChange(e, 'name')} />
        </div>
        <div>
          number: <input type='number' value={newName.number} maxLength="10" onChange={(e) => newNameChange(e, 'number')} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}>{person.name} {person.number ? `(${person.number})` : ''}</div>)}
    </div>
  )
}

export default App