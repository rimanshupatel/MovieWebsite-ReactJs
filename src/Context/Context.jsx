import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const ApiKey = import.meta.env.VITE_API_KEY;
console.log(ApiKey);
const Api_url = `https://www.omdbapi.com/?apikey=${ApiKey}`;
const AppProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState("true");
  const [error, setError] = useState({ show: "false", msg: "" });
  const [handleSearch, setHandleSearch] = useState("shinchan");
  const getMovies = async (url) => {
    await axios.get(url).then((res) => {
      if (res.data.Response === "True") {
        setLoading("false");
        setInfo(res.data.Search);
      } else {
        setError({ show: "true", msg: res.data.error });
      }
    });
  };

  useEffect(() => {
    getMovies(`${Api_url}&s=${handleSearch}`);
  }, [handleSearch]);
  return (
    <AppContext.Provider value={{ info, setHandleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

const UseGloballyContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, UseGloballyContext };
