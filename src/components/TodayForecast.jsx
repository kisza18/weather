import clearImg from "../images/clear.png";
import cloudImg from "../images/cloud.png";
import rainImg from "../images/rain.png";

const TodayForecast = () => {
  return (
    <div>
      <p className="text-xs text-gray-500 font-semibold uppercase">
        Today's Forecast
      </p>
      <div className="flex items-center justify-between mt-4  mx-5">
        <div className="text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 font-semibold">6:00 AM</p>
          <img className="w-10 my-2" src={cloudImg} alt="" />
          <h3 className="text-textdark text-xl">25°</h3>
        </div>
        <div className="borderleft"></div>
        <div className="text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 font-semibold">9:00 AM</p>
          <img className="w-10 my-2" src={cloudImg} alt="" />
          <h3 className="text-textdark text-xl">28°</h3>
        </div>
        <div className="borderleft"></div>
        <div className="text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 font-semibold">12:00 PM</p>
          <img className="w-10 my-2" src={clearImg} alt="" />
          <h3 className="text-textdark text-xl">33°</h3>
        </div>
        <div className="borderleft"></div>
        <div className="text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 font-semibold">3:00 PM</p>
          <img className="w-10 my-2" src={rainImg} alt="" />
          <h3 className="text-textdark text-xl">34°</h3>
        </div>
        <div className="borderleft"></div>
        <div className="text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 font-semibold">6:00 PM</p>
          <img className="w-10 my-2" src={rainImg} alt="" />
          <h3 className="text-textdark text-xl">32°</h3>
        </div>
        <div className="borderleft"></div>
        <div className="text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 font-semibold">9:00 PM</p>
          <img className="w-10 my-2" src={clearImg} alt="" />
          <h3 className="text-textdark text-xl">30°</h3>
        </div>
      </div>
    </div>
  );
};

export default TodayForecast;
