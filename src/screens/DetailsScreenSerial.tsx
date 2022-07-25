import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { IMG_PATH } from "../../api/api";
import { useRoute } from "@react-navigation/native";
import { DetailsSerialScreenRouteProp } from "../navigation/types";

const DetailsScreenSerial = () => {
  const route = useRoute<DetailsSerialScreenRouteProp>();
  const { name, overview, poster } = route.params;

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
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.overview}>{overview}</Text>
      </ScrollView>
    </View>
  );
};

export default DetailsScreenSerial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181b1d",
  },
  name: {
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
  },
  date: {
    fontSize: 15,
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
