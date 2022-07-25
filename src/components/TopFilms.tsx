import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { IMG_PATH } from "../../api/api";
import { useEffect } from "react";
import { fetchTopMovies } from "../../redux/slices/topFilmsSlice";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../navigation/types";
const TopFilms = () => {
  const topMovies = useAppSelector((state) => state.topFilms.moviesList);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ScreenNavigationProp>();

  useEffect(() => {
    dispatch(fetchTopMovies());
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ТОП ФИЛЬМЫ</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={topMovies}
        renderItem={({ item }) => (
          <Pressable
            style={styles.topMovieCard}
            onPress={() =>
              navigation.navigate("DetailsFilm", {
                title: item.title,
                overview: item.overview,
                poster: item.poster_path,
                date: item.release_date,
                id: item.id,
              })
            }
          >
            <Text style={styles.name}>{item.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: IMG_PATH + item.poster_path,
              }}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default TopFilms;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: "#b9bcbf",
  },
  name: {
    fontSize: 15,
    color: "#b9bcbf",
  },
  topMovieCard: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  image: {
    width: 70,
    height: 80,
    borderRadius: 10,
  },
});
