import { StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Provider } from "react-redux";
import store from "./redux/slices/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";

import RootNavigator from "./src/navigation/RootNavigator";

const App: FC = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <RootNavigator />
    </Provider>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
