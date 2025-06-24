import React, { useState } from "react";
import axios from "axios";
import personsService from "../services/persons";


const PersonForm = ({ persons = { persons }, setPersons = { setPersons }, setMessage={setMessage}, setErrorMessage={setErrorMessage}}) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const newPerson = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      ) &&
        personsService
          .put(persons.find((person) => person.name === newName).id, {
            name: newName,
            number: newNumber,
          })
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== response.id ? person : response
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.error("Error updating person:", error);
          });
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };
      personsService
        .create(nameObject)
        .then((response) => {
          setPersons(persons.concat(response));
          setNewName("");
          setNewNumber("");
          setMessage(`Added ${response.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
            console.error("Error creating person:", error);
        });
    }
  };

  return (
    <form onSubmit={newPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>{" "}
      </div>
    </form>
  );
};

export default PersonForm;