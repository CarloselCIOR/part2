import React from "react";

const Persons = ({ persons, findName }) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(findName.toLowerCase())).map(person =>
                <p key={person.name}>{person.name} {person.number}</p>
            )}
        </div>
    )
}

export default Persons