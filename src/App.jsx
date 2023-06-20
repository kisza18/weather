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
        <div className="app-container p-5 flex gap-5 rounded-3xl shadow-2xl">
          <div className="w-20">
            <CardLayout>
              <Navbar />
            </CardLayout>
          </div>
          <div className="flex flex-col gap-5 w-2/3">
            <CardLayout>
              <Search />
            </CardLayout>
            <Current />
            <CardLayout>
              <TodayForecast />
            </CardLayout>
            <CardLayout>
              <Conditions />
            </CardLayout>
          </div>
          <div className="flex flex-col gap-5 w-1/3">
            <CardLayout>
              <SevenDays />
            </CardLayout>
            <CardLayout>
              <Astro />
            </CardLayout>
          </div>
        </div>
      )}
    </DataProvider>
  );
}

export default App;
