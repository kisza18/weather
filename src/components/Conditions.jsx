import realfeelImg from "../images/realfeel.png";
import chanceImg from "../images/chanceofrain.png";
import windyImg from "../images/windy.png";
import uvImg from "../images/uv.png";
import { useDataContext } from "../providers/DataProvider";
import CardLayout from "../layouts/CardLayout";
import ConditionCard from "./ConditionCard";

const Conditions = () => {
  const { data } = useDataContext();
  return (
    <CardLayout>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 font-semibold uppercase">
          Air Conditions
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 sm:gap-0 sm:flex items-center justify-between my-6 mx-4">
        <ConditionCard
          class="flex items-start"
          image={realfeelImg}
          title="Real feel"
          content={data.current.feelslike_c + "°"}
        />
        <ConditionCard
          class="flex items-start"
          image={windyImg}
          title="Wind"
          content={data.current.wind_kph + "km/h"}
        />
        <ConditionCard
          class="flex items-start"
          image={chanceImg}
          title="Chance of rain"
          content={data.forecast.forecastday[0].day.daily_chance_of_rain + "%"}
        />
        <ConditionCard
          class="flex items-start"
          image={uvImg}
          title="UV Index"
          content={data.current.uv}
        />
      </div>
    </CardLayout>
  );
};

export default Conditions;
