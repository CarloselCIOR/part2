import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Person'
import personsservice from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personsservice.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('There was an error fetching the persons!', error);
      })
  }, [])

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