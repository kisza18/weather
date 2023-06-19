import { useContext, useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const addData = (data) => {
    setData(data);
  };

  const contextValue = {
    data,
    addData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
