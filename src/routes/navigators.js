import React from "react";

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import SignInScreen from "~/pages/sign-in";
import SignUpScreen from "~/pages/sign-up";
import HomeScreen from "~/pages/home";
import ProductTypesScreen from "~/pages/product-types";

const HomeStackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  ProductTypes: {
    screen: ProductTypesScreen,
    navigationOptions: {
      header: null
    }
  }
});

const HomeSwitchNavigation = createSwitchNavigator({
  Home: {
    screen: HomeStackNavigation
  }
});

const AccountStackNavigation = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    }
  }
});

export const AppRoutes = {
  AccountStack: AccountStackNavigation,
  HomeStack: HomeSwitchNavigation
};

export default AppRoutes;
