import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Header from "./Header";

const fetchCountries = () => {
  return axios.get("http://localhost:9000/iris");
};
function FlowersRQ() {
  const { isLoading, data, isError, error } = useQuery(
    "super-countries",
    fetchCountries,
    {
      // sends nw requests. but ui not updated so loading not shown
      // cacheTime: 5000,
      // Do not query data always. No additional requests sent for over 5 seconds
      // staleTime: 5000,
      //   default
      //   automotaically update when tab loses focus
      // refetchOnWindowFocus: true,
      // polling time -> quering data at regular intervals
      // refetchInterval: 10000,
      //   polling pauses when window loses focus. to avoid that and enable background
      //   refetching
      // refetchIntervalInBackground: true,
    }
  );

  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <Header />
      <div
        style={{
          background: "#eee",
          border: "2px solid #bbb",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          padding: "0.6rem",
          borderRadius: "20px",
          width: "50%",
          margin: "auto",
        }}
      >
        {!isLoading
          ? data?.data?.map((el) => {
              return (
                <div
                  style={{
                    background: "tomato",
                    padding: "0.6rem",
                    fontFamily: "sans-serif",
                    fontWeight: "700",
                    display: "flex",
                    borderRadius: "20px",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <div>Sepal Length: {el.sepalLength}</div>
                  <div>Petal Width: {el.petalWidth}</div>
                  <div>Sepal Length: {el.sepalLength}</div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    </>
  );
}

export default FlowersRQ;
