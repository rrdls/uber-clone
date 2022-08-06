import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import Reactotron from "reactotron-react-native";

export type TNavigationInfo = {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
};

export type TUberNavigationContext = {
  navigationInfo: TNavigationInfo;
  updateNavigationInfo: (info: TNavigationInfo) => void;
};

const UberNavigationContext = createContext<TUberNavigationContext | null>(
  null
);

const UberNavigationProvider: React.FC = ({ children }) => {
  const [navigationInfo, setNavigationInfo] = useState<TNavigationInfo>({
    origin: null,
    destination: null,
    travelTimeInformation: null,
  });

  const updateNavigationInfo = useCallback((info: TNavigationInfo) => {
    setNavigationInfo(info);
  }, []);

  useEffect(() => {
    Reactotron.log(navigationInfo);
  }, [navigationInfo]);

  return (
    <UberNavigationContext.Provider
      value={{ navigationInfo, updateNavigationInfo }}
    >
      {children}
    </UberNavigationContext.Provider>
  );
};

const useUberNavigation = (): TUberNavigationContext | null => {
  return useContext<TUberNavigationContext | null>(UberNavigationContext);
};

export { UberNavigationProvider, useUberNavigation };
