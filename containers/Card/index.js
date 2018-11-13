import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { removeDoIt, toggleDoIt } from "../../actions";

export const Card = props => {
  const { data, removeDoIts, toggleCompleted } = props;
  console.log(data.completed);
  return (
    <View style={styles.card}>
      <Text style={[styles.cardTitle, styles[data.completed]]}>
        {data.title}
      </Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          title="completed"
          onPress={() => {
            toggleCompleted(data.id);
          }}
        >
          <Image
            style={styles.icons}
            source={require("../../assets/check.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="delete"
          onPress={() => {
            removeDoIts(data.id);
          }}
        >
          <Image
            style={styles.icons}
            source={require("../../assets/delete.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "#1488E6",
    width: 150,
    height: 200,
    borderRadius: 20,
    shadowColor: "#1488E6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  cardTitle: {
    height: 100,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  },
  button: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  icons: {
    height: 20,
    width: 20
  },
  true: {
    textDecorationLine: "line-through"
  }
});

export const mapDispatchToProps = dispatch => ({
  removeDoIts: id => dispatch(removeDoIt(id)),
  toggleCompleted: id => dispatch(toggleDoIt(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Card);
