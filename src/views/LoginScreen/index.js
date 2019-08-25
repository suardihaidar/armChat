import React from "react";
import { Text, TextInput, View, Button } from "react-native";

import firebaseSDK from "../../utils/firebaseSDK";
import styles from "./style";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
	title: "ArmChat",
  };

  state = {
    email: "",
    password: ""
  };

  onPressLogin = async () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    const response = firebaseSDK.login(
      user,
      this.loginSuccess,
      this.loginFailed
    );
  };

  loginSuccess = () => {
    this.props.navigation.navigate("chat");
  };

  loginFailed = () => {
    alert("Login failure. Please tried again.");
  };

  render() {
    return (
      <View>
        <Text style={styles.title}>Email:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="mail@example.com"
          onChangeText={val => this.setState({ email: val })}
          value={this.state.email}
        />
        <Text style={styles.title}>Password:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={val => this.setState({ password: val })}
          value={this.state.password}
        />
        <Button
          title="Login"
          style={styles.buttonText}
          onPress={this.onPressLogin}
        />

        <Button
          title="Signup"
          style={styles.buttonText}
          onPress={() => this.props.navigation.navigate("signUp")}
        />
      </View>
    );
  }
}
