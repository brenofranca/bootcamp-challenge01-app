import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import SignIn from "~/pages/sign-in";
import SignUp from "~/pages/sign-up";
import Home from "~/pages/home";

const HomeSwitchNavigation = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Auth: {
    screen: SignIn
  },
  Home: {
    screen: Home
  }
});

const accountStackNavigation = createStackNavigator({
  SignIn: {
    screen: HomeSwitchNavigation,
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
  SignUp: "SignUp",
  Home: "Home"
};

export default Routes;
