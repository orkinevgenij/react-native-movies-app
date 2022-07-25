import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { IMG_PATH } from "../../api/api";
import { CustomButton } from "../components/CustomButton";
import { delFavoritesFilm } from "../../redux/slices/movieSlice";
import { delFavoritesSerial } from "../../redux/slices/serialsSlice";

const FavoritesScreen = () => {
  const favorites = useAppSelector((state) => state.movies.favoritesMovie);
  const favoritesSerials = useAppSelector(
    (state) => state.serials.favoriteSerials
  );
  const dispatch = useAppDispatch();
  const delFavoritesMovie = (id: string) => {
    dispatch(delFavoritesFilm(id));
  };
  const delFavoritesSerials = (id: string) => {
    dispatch(delFavoritesSerial(id));
  };
  return (
    <View style={styles.container}>
      {favorites.length > 0 && (
        <Text style={{ color: "#b9bcbf", fontSize: 25, fontWeight: "600" }}>
          Избранные фильмы
        </Text>
      )}
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.name}>{item.title}</Text>
            <Image
              style={styles.image}
              source={{
                uri: IMG_PATH + item.poster_path,
              }}
            />
            <CustomButton
              title="Удалить"
              backgroundColor="black"
              color="#b9bcbf"
              onPress={() => delFavoritesMovie(item.id)}
            />
          </View>
        )}
      />
      {favoritesSerials.length > 0 && (
        <Text style={{ color: "#b9bcbf", fontSize: 25, fontWeight: "600" }}>
          Избранные сериалы
        </Text>
      )}

      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={favoritesSerials}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Image
              style={styles.image}
              source={{
                uri: IMG_PATH + item.poster_path,
              }}
            />
            <CustomButton
              title="Удалить"
              backgroundColor="black"
              color="#b9bcbf"
              onPress={() => delFavoritesSerials(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#181b1d",
  },
  name: {
    fontWeight: "400",
    margin: 10,
    color: "#b9bcbf",
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
});
