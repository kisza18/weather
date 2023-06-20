import currentImg from "../images/clear.png";
import { useDataContext } from "../providers/DataProvider";

const Current = () => {
  const { data } = useDataContext();

  return (
    <div className="text-textdark my-5 mx-10 flex items-center justify-between">
      <div>
        <h1 className="text-3xl tracking-wide font-semibold">
          {data.location.name}
        </h1>
        <p className="text-gray-500 text-xs mt-1">
          Chance of rain:{" "}
          {data.forecast.forecastday[0].day.daily_chance_of_rain}%
        </p>
        <h1 className="text-5xl font-bold mt-8">{data.current.temp_c}°</h1>
      </div>
      <div>
        <img className="w-32 mr-10" src={currentImg} alt="current" />
      </div>
    </div>
  );
};

export default Current;
