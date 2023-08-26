import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

function Flowers() {
  // const [countryData, setCountryData] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const countryList = [
    {
      name: "india",
      fetchTime: 5000,
    },
    {
      name: "pakistan",
      fetchTime: 10000,
    },
    {
      name: "china",
      fetchTime: 50000,
    },
  ];
  const fetchCountries = async (country, fetchTime) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      // setCountries(countries.filter((county) => country.name === country));
      // await axios.get("https://restcountries.com/v3.1/name/pakistan");
      // await axios.get("https://restcountries.com/v3.1/name/russia");
      console.log(data);
      // setCountryData(data);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    clearTimeout(timer);
    setTimer(setTimeout(() => fetchCountries(country, fetchTime), fetchTime));
  };
  useEffect(() => {
    if (!isMounted) {
      // fetchCountries();
      for (let i = 0; i < countryList.length; i++) {
        const { name, fetchTime } = countryList[i];
        fetchCountries(name, fetchTime);
      }
      setIsMounted(true);
    }
  }, []);
  return (
    <>
      <Header></Header>
      {/* <div>
        <div>
          {!loading ? (
            <div>
              <div>Name: {countryData && countryData[0]?.name?.common}</div>
              <div>
                Languages: {countryData && countryData[0]?.languages?.eng + " "}
                {countryData && countryData[0]?.languages?.hin}
              </div>
            </div>
          ) : (
            "Loading..."
          )}
        </div>
      </div> */}
      List of countries
    </>
  );
}

export default Flowers;
