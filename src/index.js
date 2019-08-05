import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Provider } from "react-redux";
import axios from "axios";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as ProductCategoriesCreators } from "~/store/ducks/product-categories";

import "~/config/ReactotronConfig";

import store from "./store";

import RootStackNavigation from "~/routes";

import { setNavigator } from "~/services/navigation";

const App = ({}) => {
  const Routes = RootStackNavigation(false);

  return (
    <Provider store={store}>
      <Routes ref={setNavigator} />
    </Provider>
  );
};

export default App;
