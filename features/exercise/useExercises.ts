import firebase from "firebase";
import { useEffect, useState } from "react";

export interface Exercise {
  id: string;
  name: string;
}

export const useExercises = () => {
  const [exercises, setExercises] = useState<readonly Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const snapshots = await firebase
          .firestore()
          .collection("exercises")
          .get();
        const exercises = snapshots.docs.map<Exercise>((snapshot) => {
          const id = snapshot.id;
          const name = snapshot.get("name");

          return { id, name };
        });

        setExercises(exercises);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return { exercises, loading };
};
