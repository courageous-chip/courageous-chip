import { ShowHabitQuery } from "../__generated__/ShowHabitQuery";

export type State = {
  error?: Error | null;
  id?: ShowHabitQuery["habit"]["id"] | null;
  loading: boolean;
  name?: ShowHabitQuery["habit"]["name"] | null;
  valid: boolean;
};
