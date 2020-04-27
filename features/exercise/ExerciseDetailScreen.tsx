import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC, useLayoutEffect } from "react";
import { Button, ButtonProps } from "react-native";

import { LoadingIndicator } from "../../shared/ui/components/LoadingIndicator";

type Props = {
  navigation: StackNavigationProp<ParamListBase, "ExerciseDetail">;
};

export const ExerciseDetailScreen: FC<Props> = ({ navigation }) => {
  const onEdit: ButtonProps["onPress"] = () =>
    navigation.navigate("ExerciseFormStack");

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => <Button onPress={onEdit} title="Edit" />,
      }),
    [navigation],
  );

  return <LoadingIndicator />;

  // const { loading, exercises } = useExercises();

  // return loading ? (
  //   <LoadingIndicator />
  // ) : (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={exercises}
  //       keyExtractor={keyExtractor}
  //       renderItem={renderItem}
  //     />
  //   </View>
  // );
};

// const keyExtractor: FlatListProps<Exercise>["keyExtractor"] = ({ id }) => id;

// const renderItem: FlatListProps<Exercise>["renderItem"] = ({ item: { name } }) => (
//   <Text>{name}</Text>
// );

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     flex: 1,
//   },
// });
