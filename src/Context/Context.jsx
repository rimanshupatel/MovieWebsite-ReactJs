import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const ApiKey = import.meta.env.VITE_API_KEY;
console.log(ApiKey);
const Api_url = `https://www.omdbapi.com/?apikey=${ApiKey}`;
const AppProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [handleSearch, setHandleSearch] = useState("shinchan");
  const getMovies = async (url) => {
    await axios.get(url).then((res) => {
      if (res.data.Response === "True") {
        setInfo(res.data.Search);
        setLoading(false);
        setError({ show: "false", msg: "" });
        console.log(res.data);
      } else {
        setLoading(true);
        setError({ show: "true", msg: res.data.Error });
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies(`${Api_url}&s=${handleSearch}`);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [handleSearch]);
  return (
    <AppContext.Provider value={{ info, setHandleSearch, error, loading }}>
      {children}
    </AppContext.Provider>
  );
};

const UseGloballyContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, UseGloballyContext };
