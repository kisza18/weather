import realfeelImg from "../images/realfeel.png";
import chanceImg from "../images/chanceofrain.png";
import windyImg from "../images/windy.png";
import uvImg from "../images/uv.png";

const Conditions = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 font-semibold uppercase">
          Air Conditions
        </p>
      </div>
      <div className="flex items-center justify-between my-6 mx-4">
        <div className="flex items-start">
          <img className="w-6 mr-2" src={realfeelImg} alt="" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-xs">Real feel</p>
            <h1 className="text-textdark text-xl font-bold mt-2">30°</h1>
          </div>
        </div>
        <div className="flex items-start">
          <img className="w-6 mr-2" src={windyImg} alt="" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-xs">Wind</p>
            <h1 className="text-textdark text-xl font-bold mt-2">0.2 km/h</h1>
          </div>
        </div>
        <div className="flex items-start">
          <img className="w-6 mr-2" src={chanceImg} alt="" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-xs">Chance of rain</p>
            <h1 className="text-textdark text-xl font-bold mt-2">0%</h1>
          </div>
        </div>
        <div className="flex items-start">
          <img className="w-6 mr-2" src={uvImg} alt="" />
          <div className="flex flex-col">
            <p className="text-gray-500 text-xs">UV Index</p>
            <h1 className="text-textdark text-xl font-bold mt-2">3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
