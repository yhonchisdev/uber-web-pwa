import { useState, ReactNode, createContext, useContext } from "react";

type ContextType = {
  changeCurrent: (i: number) => void;
};
const NavigatorContext = createContext<ContextType>({} as ContextType);

type ProviderProps = {
  children: ReactNode[];
};
function NavigatorProvider({ children }: ProviderProps): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const handleChangeCurrent = (value: number): void => {
    setCurrent(value);
  };

  return (
    <NavigatorContext.Provider value={{ changeCurrent: handleChangeCurrent }}>
      {children[current]}
    </NavigatorContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNavigator = () => useContext(NavigatorContext);

export default NavigatorProvider;
