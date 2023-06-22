import CardLayout from "../layouts/CardLayout";
import { useDataContext } from "../providers/DataProvider";
import HourForecast from "./HourForecast";

const TodayForecast = () => {
  const { data } = useDataContext();
  return (
    <CardLayout>
      <div>
        <p className="text-xs text-gray-500 font-semibold uppercase">
          Today's Forecast
        </p>
        <div className="grid grid-cols-3 gap-10 md:gap-0 md:flex items-center justify-between mt-4 mx-5">
          <HourForecast
            time="6:00 AM"
            image={data.forecast.forecastday[0].hour[6].condition.icon}
            temp={data.forecast.forecastday[0].hour[6].temp_c}
          />
          <div className="hidden md:block borderleft"></div>
          <HourForecast
            time="9:00 AM"
            image={data.forecast.forecastday[0].hour[9].condition.icon}
            temp={data.forecast.forecastday[0].hour[9].temp_c}
          />
          <div className="hidden md:block borderleft"></div>
          <HourForecast
            time="12:00 PM"
            image={data.forecast.forecastday[0].hour[12].condition.icon}
            temp={data.forecast.forecastday[0].hour[12].temp_c}
          />
          <div className="hidden md:block borderleft"></div>
          <HourForecast
            time="3:00 PM"
            image={data.forecast.forecastday[0].hour[15].condition.icon}
            temp={data.forecast.forecastday[0].hour[15].temp_c}
          />
          <div className="hidden md:block borderleft"></div>
          <HourForecast
            time="6:00 PM"
            image={data.forecast.forecastday[0].hour[18].condition.icon}
            temp={data.forecast.forecastday[0].hour[18].temp_c}
          />
          <div className="hidden md:block borderleft"></div>
          <HourForecast
            time="9:00 PM"
            image={data.forecast.forecastday[0].hour[21].condition.icon}
            temp={data.forecast.forecastday[0].hour[21].temp_c}
          />
        </div>
      </div>
    </CardLayout>
  );
};

export default TodayForecast;
