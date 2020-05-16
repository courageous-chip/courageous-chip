import React, { FC } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { GetListHabitsQuery } from "../list/__generated__/GetListHabitsQuery";

type Props = { id?: GetListHabitsQuery["habits"][0]["id"] };

export const HabitForm: FC<Props> = function () {
  return <EmptyView />;
};
