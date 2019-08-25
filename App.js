import { createStackNavigator, createAppContainer } from "react-navigation";

import Chat from "./src/views/HomeScreen"
import Login from "./src/views/LoginScreen"
import SignUp from "./src/views/SignUpScreen"

const navigator = createStackNavigator(
  {
    login: Login,
    chat: Chat,
    signUp: SignUp,
  },
  {
    initialRouteName: "login"
  }
);

export default createAppContainer(navigator)
