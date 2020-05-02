import firebase from "firebase";
import { useEffect, useState } from "react";
import { captureException } from "sentry-expo";

export interface Habit {
  id: string;
  name: string;
}

export function useHabits() {
  const [habits, setHabits] = useState<readonly Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchHabits() {
      try {
        const snapshots = await firebase.firestore().collection("habits").get();
        const habits = snapshots.docs.map<Habit>((snapshot) => ({
          id: snapshot.id,
          name: snapshot.data().name,
        }));

        setHabits(habits);
      } catch (error) {
        captureException(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHabits();
  }, []);

  return [habits, loading] as const;
}
