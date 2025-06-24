import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Person";
import personsservice from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personsservice
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.error("Error fetching persons:", error);
      });
  }, []);

  const [findName, setFindName] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter findName={findName} setFindName={setFindName} />

      <Notification message={message} errorMessage={errorMessage} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setErrorMessage={setErrorMessage}/>

      <h3>Numbers</h3>
      <Persons persons={persons} findName={findName} setPersons={setPersons} />
    </div>
  );
};

export default App;
