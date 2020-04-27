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
import { Habit, useHabits } from "./useHabits";

type Props = { navigation: StackNavigationProp<ParamListBase, "HabitList"> };

export const HabitListScreen: FC<Props> = ({ navigation }) => {
  const onNew: ButtonProps["onPress"] = () =>
    navigation.navigate("HabitFormStack");

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => <Button onPress={onNew} title="New" />,
      }),
    [navigation],
  );

  const { loading, habits } = useHabits();

  if (loading) {
    return <LoadingIndicator />;
  }

  const renderItem: FlatListProps<Habit>["renderItem"] = ({
    item: { id, name },
  }) => (
    <ListItem
      id={id}
      onPress={() => navigation.navigate("HabitDetail", { id })}
      text={name}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const keyExtractor: FlatListProps<Habit>["keyExtractor"] = ({ id }) => id;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
