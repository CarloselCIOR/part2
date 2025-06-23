import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = ({ persons={persons}, setPersons={setPersons} }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const newPerson = (event) => {
        event.preventDefault()
        if (persons.find(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const nameObject = {
                name: newName,
                number: newNumber
            }
            axios.post('http://localhost:3001/persons', nameObject 
            ).then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            }).catch(error => {
                console.error('There was an error adding the person!', error);
            });
        }
    }

    return (
        <form onSubmit={newPerson}>
            <div>name: <input value={newName} onChange={handleNameChange} /></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div><button type="submit">add</button> </div>
        </form>
    );
};

export default PersonForm