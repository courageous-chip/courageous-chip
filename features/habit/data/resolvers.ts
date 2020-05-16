import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import { GetListHabitsQuery } from "../list/__generated__/GetListHabitsQuery";

type Habit = Omit<GetListHabitsQuery["habits"][0], "__typename">;

export const resolvers: Resolvers = {
  Query: {
    habits: async () => {
      const snapshots = await firebase.firestore().collection("habits").get();
      const habits = snapshots.docs.map<Habit>((snapshot) => ({
        id: snapshot.id,
        name: snapshot.data().name,
      }));

      return habits;
    },
  },
};
