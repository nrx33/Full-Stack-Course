import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    if (persons.some(person => (person.name === newName) && (person.number === newNumber))){
      alert(`${newName} with #${newNumber} is already added to the phonebook`)
    } else {
      const newId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) + 1 : 1
      setPersons(persons.concat({ name: newName, number: newNumber, id: newId}))
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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filter shown with: <input value={newFilter} onChange={handleFilterChange}/></div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map(person =>
        <div key={person.id}>
          <div>{person.name} {person.number}</div>
        </div>
      )}
    </div>
  )
}

export default App