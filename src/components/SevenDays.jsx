import clearImg from "../images/clear.png";
import cloudImg from "../images/cloud.png";
import rainImg from "../images/rain.png";
import stormImg from "../images/storm.png";
import { useDataContext } from "../providers/DataProvider";

const SevenDays = () => {
  const { data } = useDataContext();
  return (
    <div className="h-full">
      <p className="text-xs text-gray-500 font-semibold uppercase">
        3-Day Forecast
      </p>
      <div className="h-full flex flex-col justify-evenly mx-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-xs font-semibold w-5">Today</p>
          <div className="flex items-center">
            <img
              className="w-7 mr-3"
              src={data.forecast.forecastday[0].day.condition.icon}
              alt=""
            />
            <p className="text-textdark text-xs font-semibold">
              {data.current.condition.text}
            </p>
          </div>
          <p className="text-textdark text-xs font-semibold">
            {data.forecast.forecastday[0].day.maxtemp_c}
            <span className="text-gray-400">
              /{data.forecast.forecastday[0].day.mintemp_c}
            </span>
          </p>
        </div>
        <div className="borderbottom"></div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-xs font-semibold w-5">Tue</p>
          <div className="flex items-center">
            <img
              className="w-7 mr-3"
              src={data.forecast.forecastday[1].day.condition.icon}
              alt=""
            />
            <p className="text-textdark text-xs font-semibold">
              {data.forecast.forecastday[1].day.condition.text}
            </p>
          </div>
          <p className="text-textdark text-xs font-semibold">
            {data.forecast.forecastday[1].day.maxtemp_c}
            <span className="text-gray-400">
              /{data.forecast.forecastday[1].day.mintemp_c}
            </span>
          </p>
        </div>
        <div className="borderbottom"></div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400 text-xs font-semibold w-5">Wed</p>
          <div className="flex items-center">
            <img
              className="w-7 mr-3"
              src={data.forecast.forecastday[2].day.condition.icon}
              alt=""
            />
            <p className="text-textdark text-xs font-semibold">
              {data.forecast.forecastday[2].day.condition.text}
            </p>
          </div>
          <p className="text-textdark text-xs font-semibold">
            {data.forecast.forecastday[2].day.maxtemp_c}
            <span className="text-gray-400">
              /{data.forecast.forecastday[2].day.mintemp_c}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SevenDays;
