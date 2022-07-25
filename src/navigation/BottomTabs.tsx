import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
import { useAppSelector } from "../../hook";
import FilmsStackNavigator from "./FilmsStackNavigator";
import SerialsStackNavigator from "./SerialsStackNavigator";
import { BottomTabNavigatorParamList } from "./types";
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  const favorites = useAppSelector((state) => state.movies.favoritesMovie);
  const favoritesSerials = useAppSelector(
    (state) => state.serials.favoriteSerials
  );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName: any;
          if (route.name === "FilmsStack") {
            iconName = "movie";
            size = focused ? 25 : 20;
          } else if (route.name === "SerialsStack") {
            iconName = "tv";
            size = focused ? 25 : 20;
          } else if (route.name === "Favorites") {
            iconName = "favorite";
            size = focused ? 25 : 20;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: {
          fontSize: 15,
        },
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "gold",
      })}
    >
      <Tab.Screen
        name="FilmsStack"
        component={FilmsStackNavigator}
        options={{
          tabBarLabel: "Фильмы",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SerialsStack"
        component={SerialsStackNavigator}
        options={{
          tabBarLabel: "Сериалы",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarBadge: favorites.length + favoritesSerials.length,
          tabBarLabel: "Избранные",
          headerTitle: "Избранные",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
