import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class LoginScreen extends Component {
  constructor() {
    super();

    this.state = {
      showLogin: true
    };
  }

  toggleLoginScreen = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };

  render() {
    return (
      <View style={styles.loginScreen}>
        {this.state.showLogin && (
          <LoginForm toggleLoginScreen={this.toggleLoginScreen} />
        )}
        {!this.state.showLogin && (
          <SignUpForm toggleLoginScreen={this.toggleLoginScreen} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {}
});
