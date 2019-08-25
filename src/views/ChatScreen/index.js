import React, { Component } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

import firebaseSDK from "../../utils/firebaseSDK";

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: firebaseSDK.name || "Room"
  };

  state = {
    messages: []
  };

  componentDidMount() {
    firebaseSDK.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message)
      }))
    );
  }
  componentWillUnmount() {
    firebaseSDK.off();
  }

  get user() {
    return {
      name: firebaseSDK.name,
      email: firebaseSDK.email,
      id: firebaseSDK.uid,
      _id: firebaseSDK.uid
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {Platform.OS === "android" ? (
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
            keyboardVerticalOffset={80}
          >
            <GiftedChat
              messages={this.state.messages}
              onSend={firebaseSDK.send}
              user={this.user}
              isLoadingEarlier={true}
              renderUsernameOnMessage={true}
            />
          </KeyboardAvoidingView>
        ) : (
          <GiftedChat
            messages={this.state.messages}
            onSend={firebaseSDK.send}
            user={this.user}
            isLoadingEarlier={true}
            renderUsernameOnMessage={true}
          />
        )}
      </View>
    );
  }
}
