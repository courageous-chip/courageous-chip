import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import { GetFormHabitQuery } from "../form/__generated__/GetFormHabitQuery";
import { GetListHabitsQuery } from "../list/__generated__/GetListHabitsQuery";

type FormHabit = Omit<GetFormHabitQuery["habit"], "__typename">;
type ListHabit = Omit<GetListHabitsQuery["habits"][0], "__typename">;

export const resolvers: Resolvers = {
  Query: {
    habit: async (_, args) => {
      const snapshot = await firebase
        .firestore()
        .collection("habits")
        .doc(args.id)
        .get();
      const habit: FormHabit = { id: snapshot.id, name: snapshot.data()?.name };

      return habit;
    },

    habits: async () => {
      const snapshots = await firebase.firestore().collection("habits").get();
      const habits = snapshots.docs.map<ListHabit>((snapshot) => ({
        id: snapshot.id,
        name: snapshot.data().name,
      }));

      return habits;
    },
  },
};
