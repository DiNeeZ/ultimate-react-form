/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';

interface IData {
  name: string;
  age: number;
}

type DataContextType = {
  data: IData | null;
  setValues: (values: IData) => void;
};

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IData | null>(null);

  const setValues = (values: IData) => {
    setData((prevData) => ({
      ...prevData,
      ...values
    }));
  };

  return <DataContext.Provider value={{ data, setValues }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
