import * as firebase from "firebase/app";
import { useEffect, useState } from "react";
import { captureException } from "sentry-expo";

export interface Habit {
  id: string;
  name: string;
}

export function useHabits() {
  const [error, setError] = useState<Readonly<Error> | null>();
  const [habits, setHabits] = useState<readonly Habit[] | null>();
  const [loading, setLoading] = useState<Readonly<boolean>>(true);

  useEffect(function () {
    async function fetchHabits() {
      try {
        const snapshots = await firebase.firestore().collection("habits").get();
        const habits = snapshots.docs.map<Habit>((snapshot) => ({
          id: snapshot.id,
          name: snapshot.data().name,
        }));

        setError(null);
        setHabits(habits);
      } catch (error) {
        captureException(error);

        setError(error);
        setHabits(null);
      } finally {
        setLoading(false);
      }
    }

    fetchHabits();
  }, []);

  return { error, habits, loading };
}
