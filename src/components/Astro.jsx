import { useDataContext } from "../providers/DataProvider";
import humidityImg from "../images/humidity.png";
import rainImg from "../images/rain-drops.png";
import sunriseImg from "../images/sunrise.png";
import sunsetImg from "../images/sunset.png";

const Astro = () => {
  const { data } = useDataContext();
  return (
    <div className="h-full">
      <div className="flex flex-col">
        <p className="text-xs text-gray-500 font-semibold uppercase">
          More information
        </p>
      </div>
      <div className="flex flex-col gap-16 mt-10">
        <div className="flex h-full w-full justify-start">
          <div className="flex items-start w-1/2">
            <img className="w-6 mr-2" src={humidityImg} alt="" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs">Humidity</p>
              <h1 className="text-textdark text-xl font-bold mt-2">
                {data.current.humidity}%
              </h1>
            </div>
          </div>
          <div className="flex items-start">
            <img className="w-6 mr-2" src={rainImg} alt="" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs">Rain</p>
              <h1 className="text-textdark text-xl font-bold mt-2">
                {data.current.precip_mm} mm
              </h1>
            </div>
          </div>
        </div>
        <div className="flex h-full  w-full justify-start">
          <div className="flex items-start w-1/2">
            <img className="w-6 mr-2" src={sunriseImg} alt="" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs">Sunrise</p>
              <h1 className="text-textdark text-xl font-bold mt-2">
                {data.forecast.forecastday[0].astro.sunrise}
              </h1>
            </div>
          </div>
          <div className="flex items-start">
            <img className="w-6 mr-2" src={sunsetImg} alt="" />
            <div className="flex flex-col">
              <p className="text-gray-400 text-xs">Sunset</p>
              <h1 className="text-textdark text-xl font-bold mt-2">
                {data.forecast.forecastday[0].astro.sunset}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astro;
