import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const newNameChange = (event) => {
    setNewName(event.target.value);
  }
  const submitForm = (event) => {
    event.preventDefault()

    // check for duplicate names if exist already show alert and skip further process
    if(runDuplicateValidation()) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      return;
    }

    const nameData = {
      name: newName
    }
    setPersons(persons.concat(nameData));
    setNewName('');
  }

  const runDuplicateValidation = () => {
    return persons.filter((person) => {
      return person.name.toLowerCase().trim() == newName.toLowerCase().trim();
    }).length > 0;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitForm}>
        <div>
          name: <input value={newName} onChange={newNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App