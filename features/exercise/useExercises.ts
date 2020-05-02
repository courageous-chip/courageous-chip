import firebase from "firebase";
import { useEffect, useState } from "react";
import { captureException } from "sentry-expo";

export interface Exercise {
  id: string;
  name: string;
}

export function useExercises() {
  const [exercises, setExercises] = useState<readonly Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function fetchExercises() {
      try {
        const snapshots = await firebase
          .firestore()
          .collection("exercises")
          .get();
        const exercises = snapshots.docs.map<Exercise>((snapshot) => ({
          id: snapshot.id,
          name: snapshot.data().name,
        }));

        setExercises(exercises);
      } catch (error) {
        captureException(error);
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, []);

  return [exercises, loading] as const;
}
