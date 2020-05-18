import { ShowExerciseQuery } from "../__generated__/ShowExerciseQuery";

export type State = {
  error?: Error | null;
  id?: ShowExerciseQuery["exercise"]["id"] | null;
  loading: boolean;
  name?: ShowExerciseQuery["exercise"]["name"] | null;
  valid: boolean;
};
