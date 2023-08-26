import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Route, Routes } from "react-router-dom";
import Countries from "./Components/Flowers";
import CountryRQ from "./Components/FlowersRQ";
import Flowers from "./Components/Flowers";
import FlowersRQ from "./Components/FlowersRQ";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/iris" element={<Flowers />}></Route>
        <Route path="/irisrq" element={<FlowersRQ />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
