import firebase from "firebase";
import { useEffect, useState } from "react";

export interface Habit {
  id: string;
  name: string;
}

export function useHabits() {
  const [habits, setHabits] = useState<readonly Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    firebase
      .firestore()
      .collection("habits")
      .onSnapshot(function (snapshots) {
        const habits: Habit[] = [];

        snapshots.forEach(function (snapshot) {
          const id = snapshot.id;
          const name = snapshot.data().name;

          habits.push({ id, name });
        });

        setHabits(habits);
        setLoading(false);
      });
  }, []);

  return [habits, loading] as const;
}
