import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppNavigator from "./navigators";

export const Pages = {
  SignInSreen: "SignIn",
  SignUpScreen: "SignUp",
  AccountStack: "AccountStack",
  ProductsStack: "ProductsStack",
  ProductTypesScreen: "ProductTypes",
  ProductTCategorieScreen: "ProductTCategorie"
};

export default logged => {
  return createAppContainer(
    createSwitchNavigator(
      { ...AppNavigator },
      { initialRouteName: Pages.AccountStack }
    )
  );
};
