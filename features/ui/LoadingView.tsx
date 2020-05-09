import React, { FC, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export const LoadingView: FC = function () {
  const emoji = useRevolvingEmoji();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{emoji}</Text>
    </View>
  );
};

const useRevolvingEmoji = function (delay = 500, seed = "🤔") {
  const [emoji, setEmoji] = useState(seed);

  useEffect(() => {
    const id = setInterval(() => setEmoji(getRandomEmoji()), delay);

    return () => clearInterval(id);
  }, [delay]);

  return emoji;
};

function getRandomEmoji(
  set = [
    "🍕",
    "🤖",
    "🧠",
    "👽",
    "👾",
    "🤘",
    "🖖",
    "🖕",
    "🧙‍♂️",
    "🧝‍♀️",
    "🧞‍♀️",
    "🕺",
    "💃",
    "🤳",
  ],
) {
  return set[Math.floor(Math.random() * set.length)];
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 72,
  },
});
