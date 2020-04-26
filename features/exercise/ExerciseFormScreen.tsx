import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import firebase from "firebase";
import React, { FC, useLayoutEffect, useState } from "react";
import { Button, ButtonProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { LoadingIndicator } from "../../shared/ui/components/LoadingIndicator";

type Props = { navigation: StackNavigationProp<ParamListBase, "ExerciseForm"> };

export const ExerciseFormScreen: FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>();

  const onCancel: ButtonProps["onPress"] = () => navigation.goBack();

  const onSave: ButtonProps["onPress"] = async () => {
    setLoading(true);

    try {
      await firebase.firestore().collection("exercises").add({ name });

      navigation.goBack();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useLayoutEffect(() => {
    const disabled = loading || !name?.length;

    navigation.setOptions({
      headerLeft: () => <Button onPress={onCancel} title="Cancel" />,
      headerRight: () => (
        <Button disabled={disabled} onPress={onSave} title="Save" />
      ),
    });
  }, [name, navigation]);

  return loading ? (
    <LoadingIndicator />
  ) : (
    <View>
      <TextInput
        onChangeText={setName}
        placeholder="🏋️‍♂️ Deadlift"
        value={name}
      />
    </View>
  );
};
