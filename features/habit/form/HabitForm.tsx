import React, { FC } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { GetHabits } from "../list/__generated__/GetHabits";

type Props = { id?: GetHabits["habits"][0]["id"] };

export const HabitForm: FC<Props> = function () {
  return <EmptyView />;
};
