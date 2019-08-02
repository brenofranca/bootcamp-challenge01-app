import React from "react";

import "~/config/ReactotronConfig";

import { Provider } from "react-redux";
import store from "./store";

import RootStackNavigation from "~/routes";

import { setNavigator } from "~/services/navigation";

const App = () => (
  <Provider store={store}>
    <RootStackNavigation ref={setNavigator} />
  </Provider>
);

export default App;
