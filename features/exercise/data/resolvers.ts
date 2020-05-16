import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import { GetFormExerciseQuery } from "../form/__generated__/GetFormExerciseQuery";
import { GetListExercisesQuery } from "../list/__generated__/GetListExercisesQuery";

type FormExercise = Omit<GetFormExerciseQuery["exercise"], "__typename">;
type ListExercise = Omit<GetListExercisesQuery["exercises"][0], "__typename">;

export const resolvers: Resolvers = {
  Query: {
    exercise: async (_, args) => {
      const snapshot = await firebase
        .firestore()
        .collection("exercises")
        .doc(args.id)
        .get();
      const exercise: FormExercise = {
        id: snapshot.id,
        name: snapshot.data()?.name,
      };

      return exercise;
    },

    exercises: async () => {
      const snapshots = await firebase
        .firestore()
        .collection("exercises")
        .get();
      const exercises = snapshots.docs.map<ListExercise>((snapshot) => ({
        id: snapshot.id,
        name: snapshot.data().name,
      }));

      return exercises;
    },
  },
};
