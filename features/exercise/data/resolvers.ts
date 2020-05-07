import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import { GetExercises_exercises } from "../__generated__/GetExercises";

type Exercise = Omit<GetExercises_exercises, "__typename">;

export const resolvers: Resolvers = {
  Query: {
    exercises: async () => {
      const snapshots = await firebase
        .firestore()
        .collection("exercises")
        .get();
      const exercises = snapshots.docs.map<Exercise>((snapshot) => ({
        id: snapshot.id,
        name: snapshot.data().name,
      }));

      return exercises;
    },
  },
};
