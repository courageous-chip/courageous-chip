import React, { FC } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { GetListExercisesQuery } from "../list/__generated__/GetListExercisesQuery";

type Props = { id?: GetListExercisesQuery["exercises"][0]["id"] };

export const ExerciseForm: FC<Props> = function () {
  return <EmptyView />;
};
