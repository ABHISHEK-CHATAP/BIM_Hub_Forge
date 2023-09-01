import * as React from "react";

export const DataContext = React.createContext<{
  data: any;
  setData: any;
} | null>(null);

export const DataContextProvider = ({ children }: { children: any }) => {
  const [data, setData] = React.useState({});

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
