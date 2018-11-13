import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../../reducers";

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, composeEnhancers());

import Header from "../Header";
import DoItsContainer from "../../containers/DoItsContainer";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ScrollView style={styles.container}>
          <Header />
          <DoItsContainer />
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727"
  }
});
