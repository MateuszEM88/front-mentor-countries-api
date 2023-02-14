import { useEffect, useState } from "react";
import DarkMode from "./components/DarkMode";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get("country");

  let detailSwitch;

  if (window.location.search.includes("?country")) {
    detailSwitch = true;
  } else {
    detailSwitch = false;
  }

  // fetch data from api and set it to state
  const [countries, setCountries] = useState([]);
  const API_URL_ALL = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(API_URL_ALL)
      .then((res) => res.json())
      .then((json) => setCountries(json));
  }, []);

  // handle region change
  const [region, setRegion] = useState("");
  const handleRegion = (e) => {
    const regionFilter = e.target.value;
    setRegion(regionFilter);
  };

  // handle input change
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="h-screen text-vDarkBlueDark dark:text-white bg-vLightGray dark:bg-vDarkBlueDark">
      <div className="flex shadow-md flex-row justify-between w-screen h-16 bg-white dark:bg-darkBlue items-center">
        <h1 className="text-2xl font-nunito font-extrabold text-vDarkBlueDark dark:text-white ml-8 ">
          Where in the world?
        </h1>
        <DarkMode />
      </div>
      <div
        className={`flex flex-row justify-around items-center py-8 ${
          detailSwitch ? "hidden" : "visible"
        }`}
      >
        <input
          className="bg-white dark:bg-darkBlue w-1/3 h-12 p-2 rounded-md"
          onChange={handleChange}
          value={query}
          type="search"
          placeholder="Search for a country"
        />
        <select
          className="p-2 rounded-md bg-white dark:bg-darkBlue"
          defaultValue={""}
          onChange={handleRegion}
        >
          <option value="" disabled>
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="w-screen">
        {detailSwitch ? (
          <Detail />
        ) : (
          <Dashboard countries={countries} query={query} region={region} />
        )}
      </div>
    </div>
  );
}

export default App;
