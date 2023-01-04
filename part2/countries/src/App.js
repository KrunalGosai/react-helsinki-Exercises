import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [filterValue, setFilterValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    loadCountriesData();
  }, [])

  const filterValueChanged = (event) => {
    setFilterValue(event.target.value);
    let filteredData = countries.filter(country => country.name.official.toLowerCase().includes(event.target.value));
    setDisplayCountries(filteredData);
    if (filteredData.length == 1) {
      setCountryData(filteredData[0]);
    } else setCountryData({})
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
      <div>-------------------------------------------------------------------------</div>
      <div> Number of Countries : {countries.length}</div>
      <div> Display Countries : {displayCountries.length}</div>
      <div>-------------------------------------------------------------------------</div>
      {displayCountries.length > 10
        ?
        (<p>Too many matches, specify another filter.</p>)
        :
        (displayCountries.length == 0
          ?
          <p>No matching country found</p>
          :
          (
            displayCountries.map((country) => {
              return (
                <div key={country.cca3}>
                  <label> {country.name.official} </label>
                  <button onClick={(e) => setCountryData(countryData.cca3 == country.cca3 ? {} : country)}>{countryData.cca3 == country.cca3 ? 'hide' : 'show'}</button>
                </div>
              )
            })
          )
        )
      }
      {
        countryData.cca3
          ?
          (
            < div key={countryData.cca3}>
              <h1>{countryData.name.common}</h1>
              <p>Official Name : {countryData.name.official}</p>
              <p>Capital : {countryData.capital.join(',')}</p>
              <p>Area : {countryData.area}</p>
              <h4>Languages:</h4>
              <ul>
                {Object.keys(countryData.languages).map(key =>
                  <li key={key}>{countryData.languages[key]}</li>)}
              </ul>
              <p>Flag : </p>
              <img src={countryData.flags.png} alt="flag" />
            </div>

          )
          :
          <></>
      }

    </div >
  );
}

export default App;
