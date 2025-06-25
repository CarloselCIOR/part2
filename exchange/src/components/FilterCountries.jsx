const FilterCountries = ({countries, value}) => {
    
const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value.toLowerCase())
);
    if(filteredCountries.length > 10 || !value){
        return(
            <p>To many matches, specify another filter</p>
        )
    }else if(filteredCountries.length === 1){
        return(
            filteredCountries.map((country, index) =>(
                <div key={index}>
                    <h1>{country.name.common}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Area: {country.area}</p>
                    <p>Languages:</p>
                    <ul>
                        {Object.values(country.languages).map((language, langIndex) => (
                            <li key={langIndex}>{language}</li>
                        ))}
                    </ul>
                    <img src= {country.flags.png} alt={`Bandera de ${country.name.common}`}></img>
                </div>
            ))
        )
    }else{
        return(
            filteredCountries.map((country, index) =>(
                <p key={index}>{country.name.common}</p>
            ))
        )
    }
};

export default FilterCountries