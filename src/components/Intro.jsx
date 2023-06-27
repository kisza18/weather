import axios from "axios";
import { useState } from "react";
import introImg from "../images/intro.png";
import logoImg from "../images/wind.png";
import { useDataContext } from "../providers/DataProvider";

const Intro = ({ toggle }) => {
  const [city, setCity] = useState("");
  const { addData } = useDataContext();

  const getData = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=4c5af73e30dd4167b02114039231603&q=${city}&days=3&aqi=yes&alerts=no`
      )
      .then((res) => {
        addData(res.data);
        toggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="intro flex flex-col gap-10 lg:flex-row items-center justify-center w-full h-screen lg:h-full p-10 rounded-xl">
      <div className="flex items-center justify-center lg:w-1/2 bg-primarydark rounded-xl">
        <img className="w-60 lg:w-full" src={introImg} alt="intro" />
      </div>
      <div className="flex flex-col items-center justify-center lg:w-1/2">
        <img
          className="logo w-16 bg-gray-700 p-2 rounded-xl mb-3"
          src={logoImg}
          alt="logo"
        />
        <h1 className="text-textdark text-5xl font-bold mb-1">Breeze</h1>
        <p className="text-gray-500 text-xl mb-10">Weather App</p>
        <input
          className="bg-primarydark text-textdark outline-none text-sm tracking-wide rounded-xl px-5 py-2 mb-5 text-center text-lg"
          placeholder="Search for cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getData}
          className="bg-primarybutton text-textdark px-4 py-1 rounded-xl shadow-xl"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Intro;
