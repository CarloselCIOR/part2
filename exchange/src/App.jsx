import { useState, useEffect } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <p>find countries: </p>
      <input value={value} onChange={handleChange} />

      <FilterCountries countries={countries} value={value}></FilterCountries>

    </div>
  );
};

export default App;
