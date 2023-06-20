import { useDataContext } from "../providers/DataProvider";

const Current = () => {
  const { data } = useDataContext();

  return (
    <div className="text-textdark my-5 mx-10 flex items-center justify-between">
      <div>
        <h1 className="text-3xl tracking-wide font-semibold">
          {data.location.name}
        </h1>
        <p className="text-gray-300 text-xs mt-1">
          {data.current.condition.text}
        </p>
        <h1 className="text-5xl font-bold mt-8">{data.current.temp_c}°</h1>
      </div>
      <div>
        <img
          className="w-32 mr-10"
          src={data.current.condition.icon}
          alt="current"
        />
      </div>
    </div>
  );
};

export default Current;
