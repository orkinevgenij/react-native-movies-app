import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreenFilm from "../screens/DetailsScreenFilm";
import FilmsScreen from "../screens/FilmsScreen";
import { FilmsStackNavigatorParamList } from "./types";
const FilmsStack = createNativeStackNavigator<FilmsStackNavigatorParamList>();

const FilmsStackNavigator = () => {
  return (
    <FilmsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "gold",
      }}
    >
      <FilmsStack.Screen
        name="FilmsScreen"
        component={FilmsScreen}
        options={{
          headerTitle: "Фильмы",
        }}
      />
      <FilmsStack.Screen
        name="DetailsFilm"
        component={DetailsScreenFilm}
        options={{
          headerTitle: "О фильме",
        }}
      />
    </FilmsStack.Navigator>
  );
};

export default FilmsStackNavigator;
