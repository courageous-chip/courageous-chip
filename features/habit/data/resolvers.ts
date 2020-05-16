import { Resolvers } from "@apollo/client";
import * as firebase from "firebase/app";

import {
  CreateHabitInput,
  DeleteHabitInput,
  UpdateHabitInput,
} from "../../../__generated__/globalTypes";
import { OmitTypename } from "../../../data/types";
import { CreateHabitMutation } from "../form/__generated__/CreateHabitMutation";
import { DeleteHabitMutation } from "../form/__generated__/DeleteHabitMutation";
import {
  ShowHabitQuery,
  ShowHabitQueryVariables,
} from "../form/__generated__/ShowHabitQuery";
import { UpdateHabitMutation } from "../form/__generated__/UpdateHabitMutation";
import { ListHabitsQuery } from "../list/__generated__/ListHabitsQuery";

export const resolvers: Resolvers = {
  Mutation: {
    createHabit: async (
      _,
      { habit: { name } }: Record<"habit", CreateHabitInput>,
    ) => {
      const reference = await firebase
        .firestore()
        .collection("habits")
        .add({ name });
      const snapshot = await reference.get();
      const habit: CreateHabit = {
        id: snapshot.id,
        name: snapshot.data()?.name,
      };

      return habit;
    },

    deleteHabit: async (
      _,
      { habit: { id } }: Record<"habit", DeleteHabitInput>,
    ) => {
      await firebase.firestore().collection("habits").doc(id).delete();

      const habit: DeleteHabit = { id };

      return habit;
    },

    updateHabit: async (
      _,
      { habit: { id, name } }: Record<"habit", UpdateHabitInput>,
    ) => {
      const reference = await firebase.firestore().collection("habits").doc(id);

      await reference.update({ name });

      const snapshot = await reference.get();
      const habit: UpdateHabit = {
        id: snapshot.id,
        name: snapshot.data()?.name,
      };

      return habit;
    },
  },

  Query: {
    habit: async (_, { id }: Record<"id", ShowHabitQueryVariables["id"]>) => {
      const snapshot = await firebase
        .firestore()
        .collection("habits")
        .doc(id)
        .get();
      const habit: ShowHabit = {
        id: snapshot.id,
        name: snapshot.data()?.name,
      };

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

type CreateHabit = OmitTypename<CreateHabitMutation["createHabit"]>;
type DeleteHabit = OmitTypename<DeleteHabitMutation["deleteHabit"]>;
type ListHabit = OmitTypename<ListHabitsQuery["habits"][0]>;
type ShowHabit = OmitTypename<ShowHabitQuery["habit"]>;
type UpdateHabit = OmitTypename<UpdateHabitMutation["updateHabit"]>;
