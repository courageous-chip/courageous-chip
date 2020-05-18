import { ActionType } from "./ActionType";
import { ShowHabitQuery } from "../__generated__/ShowHabitQuery";

export type Action =
  | { name: ShowHabitQuery["habit"]["name"]; type: ActionType.ChangeName }
  | { error: Error; type: ActionType.ShowHabitFailure }
  | { type: ActionType.ShowHabitRequest }
  | {
      id: ShowHabitQuery["habit"]["id"];
      name: ShowHabitQuery["habit"]["name"];
      type: ActionType.ShowHabitSuccess;
    };
