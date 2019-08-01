import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import SignIn from "~/pages/sign-in";
import SignUp from "~/pages/sign-up";

const accountStackNavigation = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  }
});

const Routes = createAppContainer(accountStackNavigation);

export const Pages = {
  SignIn: "SignIn",
  SignUp: "SignUp"
};

export default Routes;
