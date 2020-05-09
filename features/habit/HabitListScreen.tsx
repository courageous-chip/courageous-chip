import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";

import { HabitList } from "./HabitList";
import {
  HabitStackParamList,
  HabitStackScreenName,
} from "./stack/HabitStackScreen";

type HabitListScreenNavigationProp = StackNavigationProp<
  HabitStackParamList,
  HabitStackScreenName.HabitList
>;

type Props = { navigation: HabitListScreenNavigationProp };

export const HabitListScreen: FC<Props> = function () {
  return <HabitList />;
};
