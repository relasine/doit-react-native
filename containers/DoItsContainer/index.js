import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import Card from "../Card";

export const DoItsContainer = props => {
  const cards = props.doIts.map(doit => {
    return <Card data={doit} key={doit.id} />;
  });

  return <View style={styles.container}>{cards}</View>;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 10
  }
});

export const mapStateToProps = state => ({
  doIts: state.doits
});

export default connect(
  mapStateToProps,
  null
)(DoItsContainer);
