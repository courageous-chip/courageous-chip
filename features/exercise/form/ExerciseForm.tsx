import React, { FC } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { GetExercises } from "../list/__generated__/GetExercises";

type Props = { id?: GetExercises["exercises"][0]["id"] };

export const ExerciseForm: FC<Props> = function () {
  return <EmptyView />;
};
