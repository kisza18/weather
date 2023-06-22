const ConditionCard = (props) => {
  return (
    <div className={props.class}>
      <img className="icon w-6 mr-2" src={props.image} alt="image" />
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">{props.title}</p>
        <h1 className="text-textdark text-xl font-bold mt-2">
          {props.content}
        </h1>
      </div>
    </div>
  );
};

export default ConditionCard;
