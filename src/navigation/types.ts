import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type FilmsStackNavigatorParamList = {
  FilmsScreen: undefined;
  DetailsFilm: {
    title: string;
    overview: string;
    poster: string;
    date: string;
    id: string;
  };
};
export type SerialsStackNavigatorParamList = {
  SerialsScreen: undefined;
  DetailsSerial: {
    name: string;
    overview: string;
    poster: string;
  };
};
export type BottomTabNavigatorParamList = {
  FilmsStack: FilmsStackNavigatorParamList;
  SerialsStack: SerialsStackNavigatorParamList;
  Favorites: undefined;
};

export type ScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<FilmsStackNavigatorParamList, "DetailsFilm">,
  NativeStackNavigationProp<SerialsStackNavigatorParamList, "DetailsSerial">
>;

export type DetailsFilmScreenRouteProp = RouteProp<
  FilmsStackNavigatorParamList,
  "DetailsFilm"
>;
export type DetailsSerialScreenRouteProp = RouteProp<
  SerialsStackNavigatorParamList,
  "DetailsSerial"
>;
