import { useState } from "react";
import axios from "axios";
import { useDataContext } from "../providers/DataProvider";
import CardLayout from "../layouts/CardLayout";

const Search = () => {
  const [city, setCity] = useState("");
  const { addData } = useDataContext();

  const getData = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=4c5af73e30dd4167b02114039231603&q=${city}&days=3&aqi=yes&alerts=no`
      )
      .then((res) => {
        addData(res.data);
        setCity("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      getData();
    }
  };

  return (
    <CardLayout>
      <div className="flex items-center justify-between">
        <input
          className="bg-transparent text-textdark outline-none text-sm tracking-wide w-full"
          placeholder="Search for cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          onClick={getData}
          className="bg-primarybutton text-textdark px-4 py-1 rounded-full shadow-xl"
        >
          search
        </button>
      </div>
    </CardLayout>
  );
};

export default Search;
