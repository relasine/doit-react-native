import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../containers/Input";

const Header = ({ addDoIt }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        do
        <Text style={styles.span}>it</Text>
      </Text>
      <Input addDoIt={addDoIt} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 70
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 40
  },
  span: {
    backgroundColor: "#1488E6",
    color: "#fff"
  }
});

export default Header;
