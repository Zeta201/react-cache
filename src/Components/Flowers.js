import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";

function Flowers() {
  //   const [countryData, setCountryData] = useState(null);
  //   const [loading, setLoading] = useState(false);
  //   const [timer, setTimer] = useState(null);
  //   const [isMounted, setIsMounted] = useState(false);

  //   const fetchCountries = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get(
  //         "https://restcountries.com/v3.1/name/india"
  //       );
  //       await axios.get("https://restcountries.com/v3.1/name/pakistan");
  //       await axios.get("https://restcountries.com/v3.1/name/russia");
  //       console.log(data);
  //       setCountryData(data);

  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //     }
  //     clearTimeout(timer);
  //     setTimer(setTimeout(fetchCountries, 500000));
  //   };
  //   useEffect(() => {
  //     if (!isMounted) {
  //       fetchCountries();
  //       setIsMounted(true);
  //     }
  //   }, []);
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
