import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useLayoutEffect } from "react";
import {
  Button,
  ButtonProps,
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
} from "react-native";

import { ListItem } from "../../shared/ui/components/ListItem";
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

  if (loading) {
    return <LoadingIndicator />;
  }

  const renderItem: FlatListProps<Exercise>["renderItem"] = ({
    item: { id, name },
  }) => (
    <ListItem
      id={id}
      onPress={() => navigation.navigate("ExerciseDetail", { id })}
      text={name}
    />
  );

  return (
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
