const HourForecast = (props) => {
  return (
    <div className="text-center flex flex-col items-center">
      <p className="text-xs text-gray-400 font-semibold">{props.time}</p>
      <img className="w-10 my-2" src={props.image} alt="image" />
      <h3 className="text-textdark text-xl">{props.temp}°</h3>
    </div>
  );
};

export default HourForecast;
