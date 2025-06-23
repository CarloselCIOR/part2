import React from "react";
import personsService from '../services/persons';

const Persons = ({ persons, findName }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase())).map(person =>
                <div key={person.id}>
                    <p key={person.name}>{person.name} {person.number}</p> 
        
                </div>
            )}
        </div>
    )
}

export default Persons  