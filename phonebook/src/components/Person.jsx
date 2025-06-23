import React from "react";
import personsService from '../services/persons';
import App from "../App";

const Persons = ({ persons, findName, setPersons }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase())).map(person =>
                <div key={person.id}>
                    <p key={person.name}>{person.name} {person.number}</p> 
                    <button onClick={() => {
                        if (window.confirm(`Delete ${person.name}?`)) {
                            personsService.deletePerson(person.id)
                                .then(() => {
                                    personsService.getAll()
                                        .then(updatedPersons => {
                                            setPersons(updatedPersons);
                                        })
                                        .catch(error => {
                                            console.error('There was an error fetching the updated persons!', error);
                                        });
                                })
                        } 
                    }}>delete</button>
                </div>
            )}
        </div>
    )
}

export default Persons  