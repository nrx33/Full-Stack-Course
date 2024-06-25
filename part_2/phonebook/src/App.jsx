import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
      number: '040-123456' 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    if (persons.some(person => (person.name === newName) && (person.number === newNumber))){
      alert(`${newName} with #${newNumber} is already added to the phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
    console.log(newName, newNumber)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) =>
        <div key={index}>
          <div>{person.name} {person.number}</div>
        </div>
      )}
    </div>
  )
}

export default App