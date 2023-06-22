const ThreeDayCard = (props) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-gray-400 text-xs font-semibold w-5">{props.day}</p>
      <div className="flex items-center">
        <img className="w-7 mr-3" src={props.image} alt="" />
        <p className="text-textdark text-xs font-semibold">{props.text}</p>
      </div>
      <p className="text-textdark text-xs font-semibold">
        {props.max}
        <span className="text-gray-400">/{props.min}</span>
      </p>
    </div>
  );
};

export default ThreeDayCard;
