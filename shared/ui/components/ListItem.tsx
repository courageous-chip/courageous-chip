import React, { FC } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

type Props = { id: string; onPress: (id: string) => void; text: string };

export const ListItem: FC<Props> = (props) => {
  const { id, text } = props;
  const onPress = () => props.onPress(id);

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor={styles.underlay.backgroundColor}
    >
      <Text>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
    minHeight: 45,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  underlay: {
    backgroundColor: "#ddd",
  },
});
