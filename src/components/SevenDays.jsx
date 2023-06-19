import clearImg from "../images/clear.png";
import cloudImg from "../images/cloud.png";
import rainImg from "../images/rain.png";
import stormImg from "../images/storm.png";

const SevenDays = () => {
  return (
    <div className="h-full">
      <p className="text-xs text-gray-500 font-semibold uppercase">
        7-Day Forecast
      </p>
      <div className="h-full flex flex-col justify-evenly mx-2">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-xs font-semibold w-5">Today</p>
          <div className="flex items-center">
            <img className="w-7 mr-3" src={clearImg} alt="" />
            <p className="text-textdark text-xs font-semibold">Sunny</p>
          </div>
          <p className="text-textdark text-xs font-semibold">
            36 <span className="text-gray-500">/22</span>
          </p>
        </div>
        <div className="borderbottom"></div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-xs font-semibold w-5">Tue</p>
          <div className="flex items-center">
            <img className="w-7 mr-3" src={clearImg} alt="" />
            <p className="text-textdark text-xs font-semibold">Sunny</p>
          </div>
          <p className="text-textdark text-xs font-semibold">
            36 <span className="text-gray-500">/22</span>
          </p>
        </div>
        <div className="borderbottom"></div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-xs font-semibold w-5">Wed</p>
          <div className="flex items-center">
            <img className="w-7 mr-3" src={clearImg} alt="" />
            <p className="text-textdark text-xs font-semibold">Sunny</p>
          </div>
          <p className="text-textdark text-xs font-semibold">
            36 <span className="text-gray-500">/22</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SevenDays;
