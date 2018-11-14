import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

export class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  handleChangeEmail = email => {
    this.setState({
      email
    });
  };

  handleChangePassword = password => {
    this.setState({
      password
    });
  };

  handleChangePasswordConfirm = passwordConfirm => {
    this.setState({
      passwordConfirm
    });
  };

  render() {
    return (
      <View style={styles.signUpForm}>
        <TextInput
          style={styles.email}
          onChangeText={text => {
            this.handleChangeEmail(text);
          }}
          textContentType="emailAddress"
          placeholder="email"
          value={this.state.email}
        />
        <TextInput
          style={styles.password}
          onChangeText={text => {
            this.handleChangePassword(text);
          }}
          textContentType="password"
          placeholder="password"
          value={this.state.password}
        />
        <TextInput
          style={styles.password}
          onChangeText={text => {
            this.handleChangePasswordConfirm(text);
          }}
          textContentType="password"
          placeholder="confirm password"
          value={this.state.passwordConfirm}
        />
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => {
            this.props.logUserIn(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.submitText}>submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={this.props.toggleLoginScreen}
        >
          <Text style={styles.signUpText}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signUpForm: {}
});

export const mapDispatchToProps = dispatch => ({
  logUserIn: (username, password) => dispatch(logUserIn(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
