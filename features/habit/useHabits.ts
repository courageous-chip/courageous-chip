import firebase from "firebase";
import { useEffect, useState } from "react";

export interface Habit {
  id: string;
  name: string;
}

export const useHabits = () => {
  const [habits, setHabits] = useState<readonly Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const snapshots = await firebase.firestore().collection("habits").get();
        const habits = snapshots.docs.map<Habit>((snapshot) => {
          const id = snapshot.id;
          const name = snapshot.get("name");

          return { id, name };
        });

        setHabits(habits);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHabits();
  }, []);

  return { loading, habits };
};
