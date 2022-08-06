import React from "react";
import { UberNavigationProvider } from "./src/hooks/use-uber-navigation";

import Home from "./src/screens/Home";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <UberNavigationProvider>
      <StatusBar />
      <Home />
    </UberNavigationProvider>
  );
}

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
