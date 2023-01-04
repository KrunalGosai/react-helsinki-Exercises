import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [filterValue, setFilterValue] = useState('')
  const [countries, setCountries] = useState([])
  const [displayCountries, setDisplayCountries] = useState([])

  useEffect(() => {
    loadCountriesData();
  }, [])

  const filterValueChanged = (event) => {
    setFilterValue(event.target.value);
    let filteredData = countries.filter(country => country.name.official.toLowerCase().includes(event.target.value));
    setDisplayCountries(filteredData);
  }

  const loadCountriesData = () => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data)
    })
  }

  return (
    <div>
      <label> Find Countries </label>
      <input type="text" value={filterValue} onChange={filterValueChanged} />
      <p> Number of Countries : {countries.length}</p>
      <p> Display Countries : {displayCountries.length}</p>
      {displayCountries.length > 10
        ?
        (<p>Too many matches, specify another filter.</p>)
        :
        (displayCountries.length == 0
          ?
          <p>No matching country found</p>
          :
          (displayCountries.length > 1
            ?
            displayCountries.map((country) => { return (<p key={country.cca3}>{country.name.official}</p>) })
            :
            displayCountries.map((country) => {
              let url = country.flags.png;
              return (
              <div key={country.cca3}>
                <h1>{country.name.common}</h1>
                <p>Official Name : {country.name.official}</p>
                <p>Capital : {country.capital.join(',')}</p>
                <p>Area : {country.area}</p>
                <h4>Languages:</h4>
                <ul>
                  {Object.keys(country.languages).map(key =>
                    <li key={key}>{country.languages[key]}</li>)}
                </ul>
                <p>Flag : </p>
                <img src={url} alt="flag" />
              </div>)
            })
          )
        )

      }
    </div>
  );
}

export default App;
