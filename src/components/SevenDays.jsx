import CardLayout from "../layouts/CardLayout";
import { useDataContext } from "../providers/DataProvider";
import ThreeDayCard from "./ThreeDayCard";

const SevenDays = () => {
  const { data } = useDataContext();

  const getDayName = (dataArray) => {
    const dateString = dataArray;
    const d = new Date(dateString);
    const dayName = d.toString().split(" ")[0];
    return dayName;
  };

  return (
    <CardLayout>
      <div className="h-full">
        <p className="text-xs text-gray-500 font-semibold uppercase">
          3-Day Forecast
        </p>
        <div className="h-full flex flex-col justify-evenly mx-2 gap-5 lg:gap-0 mt-5 lg:mt-0">
          <ThreeDayCard
            day="Today"
            image={data.forecast.forecastday[0].day.condition.icon}
            text={data.current.condition.text}
            max={data.forecast.forecastday[0].day.maxtemp_c}
            min={data.forecast.forecastday[0].day.mintemp_c}
          />
          <div className="borderbottom"></div>
          <ThreeDayCard
            day={getDayName(data.forecast.forecastday[1].date)}
            image={data.forecast.forecastday[1].day.condition.icon}
            text={data.forecast.forecastday[1].day.condition.text}
            max={data.forecast.forecastday[1].day.maxtemp_c}
            min={data.forecast.forecastday[1].day.mintemp_c}
          />
          <div className="borderbottom"></div>
          <ThreeDayCard
            day={getDayName(data.forecast.forecastday[2].date)}
            image={data.forecast.forecastday[2].day.condition.icon}
            text={data.forecast.forecastday[2].day.condition.text}
            max={data.forecast.forecastday[2].day.maxtemp_c}
            min={data.forecast.forecastday[2].day.mintemp_c}
          />
        </div>
      </div>
    </CardLayout>
  );
};

export default SevenDays;
