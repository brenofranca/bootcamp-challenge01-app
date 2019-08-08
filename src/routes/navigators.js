import React from "react";

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import SignInScreen from "~/pages/sign-in";
import SignUpScreen from "~/pages/sign-up";
import ProductTypesScreen from "~/pages/product-types";
import ProductCategoriesScreen from "~/pages/product-categories";

const ProductsStackNavigation = createStackNavigator({
  ProductCategories: {
    screen: ProductCategoriesScreen,
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
  ProductsStack: ProductsStackNavigation
};

export default AppRoutes;
