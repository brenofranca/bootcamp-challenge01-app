import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppNavigator from "./navigators";

export const Pages = {
  SignInSreen: "SignIn",
  SignUpScreen: "SignUp",
  AccountStack: "AccountStack",
  ProductsStack: "ProductsStack",
  CartScreen: "Cart",
  ProductTypesScreen: "ProductTypes",
  ProductSizesScreen: "ProductSizes",
  ProductCategoriesScreen: "ProductCategories"
};

export default logged => {
  return createAppContainer(
    createSwitchNavigator(
      { ...AppNavigator },
      { initialRouteName: Pages.AccountStack }
    )
  );
};
