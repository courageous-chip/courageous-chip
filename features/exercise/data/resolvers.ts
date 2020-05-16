import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import {
  CreateExerciseInput,
  DeleteExerciseInput,
  UpdateExerciseInput,
} from "../../../__generated__/globalTypes";
import { OmitTypename } from "../../../data/types";
import { CreateExerciseMutation } from "../form/__generated__/CreateExerciseMutation";
import { DeleteExerciseMutation } from "../form/__generated__/DeleteExerciseMutation";
import {
  ShowExerciseQuery,
  ShowExerciseQueryVariables,
} from "../form/__generated__/ShowExerciseQuery";
import { UpdateExerciseMutation } from "../form/__generated__/UpdateExerciseMutation";
import { ListExercisesQuery } from "../list/__generated__/ListExercisesQuery";

export const resolvers: Resolvers = {
  Mutation: {
    createExercise: async (
      _,
      { exercise: { name } }: Record<"exercise", CreateExerciseInput>,
    ) => {
      const reference = await firebase
        .firestore()
        .collection("exercises")
        .add({ name });
      const snapshot = await reference.get();
      const exercise: CreateExercise = {
        id: snapshot.id,
        name: snapshot.data()?.name,
      };

      return exercise;
    },

    deleteExercise: async (
      _,
      { exercise: { id } }: Record<"exercise", DeleteExerciseInput>,
    ) => {
      await firebase.firestore().collection("exercises").doc(id).delete();

      const exercise: DeleteExercise = { id };

      return exercise;
    },

    updateExercise: async (
      _,
      { exercise: { id, name } }: Record<"exercise", UpdateExerciseInput>,
    ) => {
      const reference = await firebase
        .firestore()
        .collection("exercises")
        .doc(id);

      await reference.update({ name });

      const snapshot = await reference.get();
      const exercise: UpdateExercise = {
        id: snapshot.id,
        name: snapshot.data()?.name,
      };

      return exercise;
    },
  },

  Query: {
    exercise: async (
      _,
      { id }: Record<"id", ShowExerciseQueryVariables["id"]>,
    ) => {
      const snapshot = await firebase
        .firestore()
        .collection("exercises")
        .doc(id)
        .get();
      const exercise: ShowExercise = {
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

type CreateExercise = OmitTypename<CreateExerciseMutation["createExercise"]>;
type DeleteExercise = OmitTypename<DeleteExerciseMutation["deleteExercise"]>;
type ListExercise = OmitTypename<ListExercisesQuery["exercises"][0]>;
type ShowExercise = OmitTypename<ShowExerciseQuery["exercise"]>;
type UpdateExercise = OmitTypename<UpdateExerciseMutation["updateExercise"]>;
