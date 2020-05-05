import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const LoadingView: FC = function () {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
