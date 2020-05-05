import { Resolvers } from "@apollo/client";
import firebase from "firebase";

import { GetHabits_habits } from "../__generated__/GetHabits";

type Habit = Omit<GetHabits_habits, "__typename">;

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
