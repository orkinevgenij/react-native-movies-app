import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  addFavoritesSerial,
  fetchSerials,
} from "../../redux/slices/serialsSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import { CustomButton } from "../components/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import { IMG_PATH } from "../../api/api";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../navigation/types";

const SerialsScreen = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const dispatch = useAppDispatch();
  const serials = useAppSelector((state) => state.serials.serialsList);
  const addFavorites = (id: string) => {
    dispatch(addFavoritesSerial(id));
  };
  useEffect(() => {
    dispatch(fetchSerials());
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ height: "100%" }}>
        <FlatList
          style={styles.serialList}
          data={serials}
          renderItem={({ item }) => (
            <View style={styles.serialCard}>
              <Text style={styles.name}>{item.name}</Text>
              <Image
                style={styles.image}
                source={{
                  uri: IMG_PATH + item.poster_path,
                }}
              />
              <MaterialIcons
                name="favorite"
                size={24}
                color="white"
                style={{ marginBottom: 10 }}
                onPress={() => addFavorites(item.id)}
              />
              <CustomButton
                title="Подробнее"
                color="#b9bcbf"
                backgroundColor="black"
                onPress={() =>
                  navigation.navigate("DetailsSerial", {
                    name: item.name,
                    overview: item.overview,
                    poster: item.poster_path,
                  })
                }
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SerialsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#181b1d",
  },
  serialList: {},
  serialCard: {
    alignItems: "center",
    margin: 10,
    padding: 5,
  },
  name: {
    fontSize: 15,
    margin: 10,
    color: "#b9bcbf",
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 5,
    borderRadius: 10,
  },
});
