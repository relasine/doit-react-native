import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import { addDoIt } from "../../actions";

export class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChange = text => {
    this.setState({
      input: text
    });
  };

  handleSubmit = () => {
    if (this.state.input.length > 0) {
      this.props.addDoIt(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            this.handleChange(text);
          }}
          value={this.state.input}
          placeholder="Enter your do-it"
          placeholderTextColor="#fff"
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={this.handleSubmit}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
          <Image
            source={require("../../assets/add.png")}
            style={styles.submitImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  input: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    paddingLeft: 20,
    color: "#000",
    width: 290,
    backgroundColor: "#fff",
    borderRadius: 20,
    fontSize: 20
  },
  submitBtn: {
    backgroundColor: "#1488E6",
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  submitImage: {
    width: 25,
    height: 25
  }
});

export const mapDispatchToProps = dispatch => ({
  addDoIt: input => dispatch(addDoIt(input))
});

export default connect(
  null,
  mapDispatchToProps
)(Input);
