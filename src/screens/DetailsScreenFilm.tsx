import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { IMG_PATH } from "../../api/api";
import { useRoute } from "@react-navigation/native";
import { DetailsFilmScreenRouteProp } from "../navigation/types";

const DetailsScreenFilm = () => {
  const route = useRoute<DetailsFilmScreenRouteProp>();
  const { title, date, overview, poster } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: IMG_PATH + poster,
            }}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.overview}>{overview}</Text>
        <View style={{ backgroundColor: "white" }}></View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreenFilm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181b1d",
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    padding: 5,
    color: "#b9bcbf",
  },
  image: {
    width: 350,
    height: 500,
    borderBottomLeftRadius: 150,
    resizeMode: "stretch",

    backgroundColor: "red",
  },
  date: {
    fontSize: 18,
    padding: 5,
    color: "#b9bcbf",
  },
  overview: {
    fontSize: 15,
    textAlign: "justify",
    padding: 5,
    color: "#b9bcbf",
  },
});
