import React from "react";
import { Text, TextInput, View, Button } from "react-native";

import firebaseSDK from "../../utils/firebaseSDK";
import styles from "./style";

export default class SignUpScreen extends React.Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  onPressCreate = async () => {
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      await firebaseSDK.createAccount(user);
    } catch ({ message }) {
      console.log("create account failed. catch error:" + message);
    }
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
        <Text style={styles.title}>Name:</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={val => this.setState({ name: val })}
          value={this.state.name}
        />
        <Button
          title="SigUp"
          style={styles.buttonText}
          onPress={this.onPressCreate}
        />
      </View>
    );
  }
}
