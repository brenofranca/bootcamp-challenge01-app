import { createStackNavigator } from "react-navigation";
import CartScreen from "~/pages/cart";
import CartPlaceOrderScreen from "~/pages/cart-place-order";
import ProductCategoriesScreen from "~/pages/product-categories";
import ProductSizesScreen from "~/pages/product-sizes";
import ProductTypesScreen from "~/pages/product-types";
import SignInScreen from "~/pages/sign-in";
import SignUpScreen from "~/pages/sign-up";

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
  },
  ProductSizes: {
    screen: ProductSizesScreen,
    navigationOptions: {
      header: null
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      header: null
    }
  },
  CartPlaceOrder: {
    screen: CartPlaceOrderScreen,
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
