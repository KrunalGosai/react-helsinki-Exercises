import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

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
    nameData['id']=persons.length +1;
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
      <Filter filterValue={filterValue} filterChange={(e) => filterChange(e)}></Filter>
      <h2>Add New</h2>
      <PersonForm newName={newName} submitForm={submitForm} newNameChange={(e,param) => newNameChange(e,param)}></PersonForm>
      <h2>Numbers</h2>
      <Persons displayContacts={displayContacts}></Persons>
    </div>
  )
}

export default App