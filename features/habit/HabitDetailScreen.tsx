import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useLayoutEffect } from "react";
import { Button, ButtonProps } from "react-native";

import { LoadingIndicator } from "../../shared/ui/components/LoadingIndicator";

type Props = { navigation: StackNavigationProp<ParamListBase, "HabitDetail"> };

export const HabitDetailScreen: FC<Props> = ({ navigation }) => {
  const onEdit: ButtonProps["onPress"] = () =>
    navigation.navigate("HabitFormStack");

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => <Button onPress={onEdit} title="Edit" />,
      }),
    [navigation],
  );

  return <LoadingIndicator />;

  // const { loading, habits } = useHabits();

  // return loading ? (
  //   <LoadingIndicator />
  // ) : (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={habits}
  //       keyExtractor={keyExtractor}
  //       renderItem={renderItem}
  //     />
  //   </View>
  // );
};

// const keyExtractor: FlatListProps<Habit>["keyExtractor"] = ({ id }) => id;

// const renderItem: FlatListProps<Habit>["renderItem"] = ({ item: { name } }) => (
//   <Text>{name}</Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     flex: 1,
//   },
// });
