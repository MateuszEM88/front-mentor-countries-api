import React, { useEffect, useState } from "react";

const Detail = () => {
  const [details, setDetails] = useState({});

  let country;
  const goBackToDashboard = () => {
    window.location.href = "/";
  };
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get("country");
  const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  useEffect(() => {
    fetch(API_URL_DETAIL)
      .then((res) => res.json())
      .then(([country]) => {
        if (!country) {
          goBackToDashboard();
        }
        country = {
          capital: country.capital
            ? country.capital && country.capital[0]
            : "-",
          population: country.population
            ? country.population.toLocaleString()
            : "-",
          name: country.name.common ? country.name.common : "-",
          nativeName: country.name.nativeName
            ? Object.values(country.name.nativeName)[0].official
            : "-",
          code: country.cca3 ? country.cca3 : "-",
          region: country.region ? country.region : "-",
          subregion: country.subregion ? country.subregion : "-",
          flagURL: country.flags.png,
          currencies: country.currencies
            ? Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")
            : "-",
          languages: country.languages
            ? Object.values(country.languages).join(", ")
            : "-",
          tld: country.tld ? country.tld && country.tld[0] : "-",
          borders: country.borders,
        };
        setDetails(country);
      });
  }, []);

  console.log(details);
  return (
    <div className="mt-12 font-nunito text-vDarkBlueDark dark:text-white bg-vLightGray dark:bg-vDarkBlueDark">
      <a href="/">
        {" "}
        <button className="p-2 w-28 ml-12 bg-white dark:bg-darkBlue shadow-md rounded-md">
          ← Back
        </button>
      </a>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img className="m-8" src={details.flagURL} alt="" />
        <div className="w-4/5 md:w-1/5">
          <h1 className="text-2xl mb-4 font-extrabold">{details.name}</h1>
          <p>
            <span className="font-bold">Native name:</span> {details.nativeName}
          </p>
          <p>
            <span className="font-bold">Population: </span>
            {details.population}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {details.region}
          </p>
          <p>
            <span className="font-bold">Sub Rgion:</span> {details.subregion}
          </p>
          <p>
            <span className="font-bold">Capitol: </span>
            {details.capital}
          </p>
        </div>
        <div className="w-4/5 md:w-1/5">
          {" "}
          <p>
            <span className="font-bold">Top Level Domain: </span>
            {details.tld}
          </p>
          <p>
            <span className="font-bold">Currencies: </span>
            {details.currencies}
          </p>
          <p>
            <span className="font-bold">Languages: </span>
            {details.languages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
