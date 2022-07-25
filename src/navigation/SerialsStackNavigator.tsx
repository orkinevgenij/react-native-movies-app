import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreenSerial from "../screens/DetailsScreenSerial";
import SerialsScreen from "../screens/SerialsScreen";
import { SerialsStackNavigatorParamList } from "./types";

const SerialsStack =
  createNativeStackNavigator<SerialsStackNavigatorParamList>();

const SerialsStackNavigator = () => {
  return (
    <SerialsStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "gold",
      }}
    >
      <SerialsStack.Screen
        name="SerialsScreen"
        component={SerialsScreen}
        options={{
          headerTitle: "Сериалы",
        }}
      />
      <SerialsStack.Screen
        name="DetailsSerial"
        component={DetailsScreenSerial}
        options={{
          headerTitle: "О сериале",
        }}
      />
    </SerialsStack.Navigator>
  );
};

export default SerialsStackNavigator;
