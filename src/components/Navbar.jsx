import logoImg from "../images/wind.png";
import weatherImg from "../images/weather.png";
import listImg from "../images/list.png";
import mapImg from "../images/map.png";
import settingsImg from "../images/settings.png";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center my-3 text-gray-500">
      <div className="logo w-10 bg-gray-700 p-2 rounded-xl mb-10">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="my-2 w-full flex flex-col items-center">
        <img className="w-5" src={weatherImg} alt="weather" />
        <h1 className="text-xs mt-2">Weather</h1>
      </div>
      <div className="my-2 w-full flex flex-col items-center">
        <img className="w-5" src={listImg} alt="cities" />
        <h1 className="text-xs mt-2">Cities</h1>
      </div>
      <div className="my-2 w-full flex flex-col items-center">
        <img className="w-5" src={mapImg} alt="map" />
        <h1 className="text-xs mt-2">Map</h1>
      </div>
      <div className="my-2 w-full flex flex-col items-center">
        <img className="w-5" src={settingsImg} alt="settings" />
        <h1 className="text-xs mt-2">Settings</h1>
      </div>
    </div>
  );
};

export default Navbar;
