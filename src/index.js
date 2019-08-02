import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider } from "react-redux";

import "~/config/ReactotronConfig";

import store from "./store";

import RootStackNavigation from "~/routes";

import { setNavigator } from "~/services/navigation";

const App = ({}) => {
  const [auth, setAuth] = useState({ checked: false, logged: false });

  useEffect(() => {
    async function fetchAuth() {
      const deviceLogin = await AsyncStorage.getItem("@login");

      setAuth({ checked: true, logged: !!deviceLogin });
    }

    fetchAuth();
  }, []);

  if (!auth.checked) {
    return <></>;
  }

  const Routes = RootStackNavigation(auth.logged);

  return (
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  );
};

export default App;
