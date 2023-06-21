import CardLayout from "./layouts/CardLayout";
import Search from "./components/Search";
import Current from "./components/Current";
import TodayForecast from "./components/TodayForecast";
import Conditions from "./components/Conditions";
import SevenDays from "./components/SevenDays";
import Navbar from "./components/Navbar";
import Astro from "./components/Astro";
import DataProvider from "./providers/DataProvider";
import Intro from "./components/Intro";
import { useState } from "react";

function App() {
  const [intro, setIntro] = useState(true);

  const toggleIntro = (e) => {
    setIntro(e);
  };

  return (
    <DataProvider>
      {intro && <Intro toggle={toggleIntro} />}
      {!intro && (
        <div className="app-container p-3 md:p-5 flex flex-col lg:flex-row gap-5 rounded-3xl shadow-2xl">
          {/* <div className="w-20 hidden lg:block">
            <Navbar />
          </div> */}
          <div className="flex flex-col gap-5 lg:w-2/3">
            <Search />
            <Current />
            <TodayForecast />
            <Conditions />
          </div>
          <div className="flex flex-col gap-5 lg:w-1/3">
            <SevenDays />
            <Astro />
          </div>
        </div>
      )}
    </DataProvider>
  );
}

export default App;
