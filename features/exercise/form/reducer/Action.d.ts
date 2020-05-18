import { ActionType } from "./ActionType";
import { ShowExerciseQuery } from "../__generated__/ShowExerciseQuery";

export type Action =
  | { name: ShowExerciseQuery["exercise"]["name"]; type: ActionType.ChangeName }
  | { error: Error; type: ActionType.ShowExerciseFailure }
  | { type: ActionType.ShowExerciseRequest }
  | {
      id: ShowExerciseQuery["exercise"]["id"];
      name: ShowExerciseQuery["exercise"]["name"];
      type: ActionType.ShowExerciseSuccess;
    };
