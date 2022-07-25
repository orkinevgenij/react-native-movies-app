import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { addFavoriteFilm, fetchMovies } from "../../redux/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import { IMG_PATH } from "../../api/api";
import { MaterialIcons } from "@expo/vector-icons";
import { CustomButton } from "../components/CustomButton";
import { fetchTopMovies } from "../../redux/slices/topFilmsSlice";
import TopFilms from "../components/TopFilms";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../navigation/types";

const FilmsScreen: FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const movies = useAppSelector((state) => state.movies.moviesList);
  const dispatch = useAppDispatch();
  const addFavorites = (id: string) => {
    dispatch(addFavoriteFilm(id));
  };
  useEffect(() => {
    dispatch(fetchTopMovies());
    dispatch(fetchMovies());
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <TopFilms />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.moviesList}
        data={movies}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: IMG_PATH + item.poster_path,
              }}
            />
            <MaterialIcons
              name="favorite"
              size={24}
              color="red"
              style={{
                marginBottom: 10,
                color: "#fff",
              }}
              onPress={() => addFavorites(item.id)}
            />
            <CustomButton
              title="Подробнее"
              color="#b9bcbf"
              backgroundColor="black"
              onPress={() =>
                navigation.navigate("DetailsFilm", {
                  title: item.title,
                  overview: item.overview,
                  date: item.release_date,
                  poster: item.poster_path,
                  id: item.id,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};
export default FilmsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#181b1d",
  },
  moviesList: {},
  movieCard: {
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    margin: 10,
    color: "#b9bcbf",
  },
  image: {
    width: "50%",
    height: 250,
    marginBottom: 5,
    borderRadius: 10,
    resizeMode: "stretch",
  },
});
