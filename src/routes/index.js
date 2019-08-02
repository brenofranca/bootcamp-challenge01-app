import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppNavigator from "./navigators";

export const Pages = {
  SignInScreen: "SignInScreen",
  SignUpScreen: "SignUpScreen",
  HomeStack: "HomeStack",
  AccountStack: "AccountStack"
};

export default logged => {
  return createAppContainer(
    createSwitchNavigator(
      { ...AppNavigator },
      { initialRouteName: logged ? Pages.HomeStack : Pages.AccountStack }
    )
  );
};
