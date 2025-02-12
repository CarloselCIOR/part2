import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [findName, setFindName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter findName={findName} setFindName={setFindName} />

      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>
      <Persons persons={persons} findName={findName} />
    </div>
  )
}

export default App