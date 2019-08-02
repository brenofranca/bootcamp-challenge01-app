import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AppNavigator from "./navigators";

export default createAppContainer(createSwitchNavigator(AppNavigator));

export const Pages = {
  SignIn: "SignIn",
  SignUp: "SignUp",
  Home: "Home"
};
