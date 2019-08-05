import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppNavigator from "./navigators";

export const Pages = {
  SignInSreen: "SignIn",
  SignUpScreen: "SignUp",
  HomeStack: "HomeStack",
  AccountStack: "AccountStack"
};

export default logged => {
  return createAppContainer(
    createSwitchNavigator(
      { ...AppNavigator },
      { initialRouteName: Pages.AccountStack }
    )
  );
};
