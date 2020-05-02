import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import {
  Button,
  FlatList,
  FlatListProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { captureException } from "sentry-expo";

import { Loading } from "../ui/Loading";
import { Exercise, useExercises } from "./useExercises";

type Props = { navigation: StackNavigationProp<ParamListBase> };

export const ExerciseListScreen: FC<Props> = function ({ navigation }) {
  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() => {
          captureException(
            new Error(`Testing Sentry in Development: ${Date.now()}`),
          );
        }}
        title="Sentry"
      />
    ),
  });

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
