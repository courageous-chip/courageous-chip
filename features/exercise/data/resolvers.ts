import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import { GetListExercisesQuery } from "../list/__generated__/GetListExercisesQuery";

type ListExercise = Omit<GetListExercisesQuery["exercises"][0], "__typename">;

export const resolvers: Resolvers = {
  Query: {
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
