import { StackNavigationProp } from "@react-navigation/stack";
import i18n from "i18n-js";
import React, { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

import { Loading } from "../ui/Loading";
import { ExerciseStackParamList, ScreenName } from "./ExerciseStackScreen";
import { Exercise, useExercises } from "./useExercises";

type Props = {
  navigation: StackNavigationProp<
    ExerciseStackParamList,
    ScreenName.ExerciseList
  >;
};

export const ExerciseListScreen: FC<Props> = function ({ navigation }) {
  navigation.setOptions({ title: i18n.t("exercise.list.title") });

  const [exercises, loading] = useExercises();

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const keyExtractor: FlatListProps<Exercise>["keyExtractor"] = function ({
  id,
}) {
  return id;
};

const renderItem: FlatListProps<Exercise>["renderItem"] = function ({
  item: { name },
}) {
  return <Text>{name}</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
