import React from "react";

const Dashboard = ({ countries, query, region }) => {
  let countriesData = countries.map((country) => {
    return {
      capital: country.capital && country.capital[0],
      population: country.population.toLocaleString(),
      name: country.name.common,
      code: country.cca3,
      region: country.region,
      flagURL: country.flags.png,
    };
  });

  const filteredData = countriesData.filter(
    (country) =>
      country.name.toLowerCase().includes(query.toLowerCase()) &&
      (!region || country.region === region)
  );

  return (
    <div className="flex flex-row p-4  flex-wrap gap-20 items-center justify-center text-vDarkBlueDark dark:text-white bg-vLightGray dark:bg-vDarkBlueDark">
      {filteredData.map((country, index) => {
        return (
          <a key={index} href={`?country=${country.code}`}>
            <div className="w-60 rounded-md overflow-hidden shadow-md">
              <div className="flex flex-col bg-white dark:bg-darkBlue ">
                <img
                  className="w-60 h-36 shadow-sm"
                  src={country.flagURL}
                  alt="flag"
                />
                <div className="flex flex-col h-36 m-4">
                  <p className="font-nunito text-lg mb-4 font-extrabold">
                    {country.name}
                  </p>

                  <p className="font-nunito text-sm">
                    <span className="font-extrabold">Population:</span>{" "}
                    {country.population}
                  </p>
                  <p className="font-nunito text-sm">
                    {" "}
                    <span className="font-extrabold">Region:</span>{" "}
                    {country.region}
                  </p>
                  <p className="font-nunito text-sm">
                    {" "}
                    <span className="font-extrabold">Capital:</span>{" "}
                    {country.capital}
                  </p>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Dashboard;
