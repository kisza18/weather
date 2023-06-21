import CardLayout from "../layouts/CardLayout";
import { useDataContext } from "../providers/DataProvider";

const TodayForecast = () => {
  const { data } = useDataContext();
  return (
    <CardLayout>
      <div>
        <p className="text-xs text-gray-500 font-semibold uppercase">
          Today's Forecast
        </p>
        <div className="grid grid-cols-3 gap-10 md:gap-0 md:flex items-center justify-between mt-4 mx-5">
          <div className="text-center flex flex-col items-center">
            <p className="text-xs text-gray-400 font-semibold">6:00 AM</p>
            <img
              className="w-10 my-2"
              src={data.forecast.forecastday[0].hour[6].condition.icon}
              alt=""
            />
            <h3 className="text-textdark text-xl">
              {data.forecast.forecastday[0].hour[6].temp_c}°
            </h3>
          </div>
          <div className="hidden md:block borderleft"></div>
          <div className="text-center flex flex-col items-center">
            <p className="text-xs text-gray-400 font-semibold">9:00 AM</p>
            <img
              className="w-10 my-2"
              src={data.forecast.forecastday[0].hour[9].condition.icon}
              alt=""
            />
            <h3 className="text-textdark text-xl">
              {data.forecast.forecastday[0].hour[9].temp_c}°
            </h3>
          </div>
          <div className="hidden md:block borderleft"></div>
          <div className="text-center flex flex-col items-center">
            <p className="text-xs text-gray-400 font-semibold">12:00 PM</p>
            <img
              className="w-10 my-2"
              src={data.forecast.forecastday[0].hour[12].condition.icon}
              alt=""
            />
            <h3 className="text-textdark text-xl">
              {data.forecast.forecastday[0].hour[12].temp_c}°
            </h3>
          </div>
          <div className="hidden md:block borderleft"></div>
          <div className="text-center flex flex-col items-center">
            <p className="text-xs text-gray-400 font-semibold">3:00 PM</p>
            <img
              className="w-10 my-2"
              src={data.forecast.forecastday[0].hour[15].condition.icon}
              alt=""
            />
            <h3 className="text-textdark text-xl">
              {data.forecast.forecastday[0].hour[15].temp_c}°
            </h3>
          </div>
          <div className="hidden md:block borderleft"></div>
          <div className="text-center flex flex-col items-center">
            <p className="text-xs text-gray-400 font-semibold">6:00 PM</p>
            <img
              className="w-10 my-2"
              src={data.forecast.forecastday[0].hour[18].condition.icon}
              alt=""
            />
            <h3 className="text-textdark text-xl">
              {data.forecast.forecastday[0].hour[18].temp_c}°
            </h3>
          </div>
          <div className="hidden md:block borderleft"></div>
          <div className="text-center flex flex-col items-center">
            <p className="text-xs text-gray-400 font-semibold">9:00 PM</p>
            <img
              className="w-10 my-2"
              src={data.forecast.forecastday[0].hour[21].condition.icon}
              alt=""
            />
            <h3 className="text-textdark text-xl">
              {data.forecast.forecastday[0].hour[21].temp_c}°
            </h3>
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default TodayForecast;
