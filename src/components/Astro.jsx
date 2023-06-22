import { useDataContext } from "../providers/DataProvider";
import humidityImg from "../images/humidity.png";
import rainImg from "../images/rain-drops.png";
import sunriseImg from "../images/sunrise.png";
import sunsetImg from "../images/sunset.png";
import CardLayout from "../layouts/CardLayout";
import ConditionCard from "./ConditionCard";

const Astro = () => {
  const { data } = useDataContext();
  return (
    <CardLayout>
      <div className="h-full">
        <div className="flex flex-col">
          <p className="text-xs text-gray-500 font-semibold uppercase">
            More information
          </p>
        </div>
        <div className="flex flex-col gap-16 mt-10 mb-5 lg:mb-0">
          <div className="flex h-full w-full justify-start">
            <ConditionCard
              class="flex items-start w-1/2"
              image={humidityImg}
              title="Humidity"
              content={data.current.humidity + "%"}
            />
            <ConditionCard
              class="flex items-start w-1/2"
              image={rainImg}
              title="Rain"
              content={data.current.precip_mm + "mm"}
            />
          </div>
          <div className="flex h-full  w-full justify-start">
            <ConditionCard
              class="flex items-start w-1/2"
              image={sunriseImg}
              title="Sunrise"
              content={data.forecast.forecastday[0].astro.sunrise}
            />
            <ConditionCard
              class="flex items-start w-1/2"
              image={sunsetImg}
              title="Sunset"
              content={data.forecast.forecastday[0].astro.sunset}
            />
          </div>
        </div>
      </div>
    </CardLayout>
  );
};

export default Astro;
