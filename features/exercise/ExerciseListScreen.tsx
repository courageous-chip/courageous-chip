import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useLayoutEffect } from "react";
import {
  Button,
  ButtonProps,
  FlatList,
  FlatListProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LoadingIndicator } from "../../shared/ui/components/LoadingIndicator";
import { Exercise, useExercises } from "./useExercises";

type Props = { navigation: StackNavigationProp<ParamListBase, "ExerciseList"> };

export const ExerciseListScreen: FC<Props> = ({ navigation }) => {
  const onNew: ButtonProps["onPress"] = () =>
    navigation.navigate("ExerciseFormStack");

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => <Button onPress={onNew} title="New" />,
      }),
    [navigation],
  );

  const { exercises, loading } = useExercises();

  return loading ? (
    <LoadingIndicator />
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

const keyExtractor: FlatListProps<Exercise>["keyExtractor"] = ({ id }) => id;

const renderItem: FlatListProps<Exercise>["renderItem"] = ({
  item: { name },
}) => <Text>{name}</Text>;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
