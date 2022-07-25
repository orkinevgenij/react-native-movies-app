import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

export const CustomButton = ({
  title,
  onPress,
  backgroundColor,
  color,
}: any) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={[
          styles.button,
          backgroundColor && { backgroundColor },
          color && { color },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
  },
});
