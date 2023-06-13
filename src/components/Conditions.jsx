const Conditions = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 font-semibold uppercase">
          Air Conditions
        </p>
        <button className="bg-primarybutton text-textdark text-xs px-3 py-1 rounded-full">
          See more
        </button>
      </div>
      <div className="grid grid-cols-2 my-3 mx-2">
        <div>
          <p className="text-gray-500 text-xs">Real feel</p>
          <h1 className="text-textdark font-bold mt-1">30°</h1>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Wind</p>
          <h1 className="text-textdark font-bold mt-1">0.2 km/h</h1>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Chance of rain</p>
          <h1 className="text-textdark font-bold mt-1">0%</h1>
        </div>
        <div>
          <p className="text-gray-500 text-xs">UV Index</p>
          <h1 className="text-textdark font-bold mt-1">3</h1>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
