import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";

import {
  HabitStackParamList,
  HabitStackScreenName,
} from "../stack/HabitStackScreen";
import { HabitList } from "./HabitList";

type HabitListScreenNavigationProp = StackNavigationProp<
  HabitStackParamList,
  HabitStackScreenName.HabitList
>;

type Props = { navigation: HabitListScreenNavigationProp };

export const HabitListScreen: FC<Props> = function () {
  return <HabitList />;
};
