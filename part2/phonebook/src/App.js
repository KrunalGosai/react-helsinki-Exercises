import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const emptyName = { name: '', number: '' }
  const [newName, setNewName] = useState(emptyName)
  const [filterValue, setFilterValue] = useState('')

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

  const filterChange = (event) => {
    setFilterValue(event.target.value);
  }

  const getFilteredValue = () => {
    console.log(filterValue)
    return persons.filter((person) => person.name.toLowerCase().includes(filterValue.toLowerCase()));
  }
  const displayContacts = filterValue.trim() == '' ? persons : getFilteredValue(); 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          show with: <input value={filterValue} onChange={(e) => filterChange(e)} />
      </div>
      <h2>Add New</h2>
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
      {displayContacts.map((person) => <div key={person.name}>{person.name} {person.number ? `(${person.number})` : ''}</div>)}
    </div>
  )
}

export default App