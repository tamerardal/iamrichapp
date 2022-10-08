import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import IAmRichScreen from "./src/screens/IAmRichScreen";
import IAmPoorScreen from "./src/screens/IAmPoorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    IAmRichScreen: IAmRichScreen,
    IAmPoorScreen: IAmPoorScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
    },
  }
);

export default createAppContainer(navigator);
