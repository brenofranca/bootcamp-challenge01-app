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

const HomeSwitchNavigation = createSwitchNavigator({
  Home: {
    screen: HomeScreen
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
  Account: AccountStackNavigation,
  Home: HomeSwitchNavigation
};

export default AppRoutes;
