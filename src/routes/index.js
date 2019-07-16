import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignIn from "~/pages/sign-in";

const Routes = createAppContainer(createSwitchNavigator({ SignIn }));

export default Routes;
