import firebase from "firebase";
import { useEffect, useState } from "react";
import { captureException } from "sentry-expo";

export interface Exercise {
  id: string;
  name: string;
}

export function useExercises() {
  const [error, setError] = useState<Readonly<Error> | null>();
  const [exercises, setExercises] = useState<readonly Exercise[] | null>();
  const [loading, setLoading] = useState<Readonly<boolean>>(true);

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

        setError(null);
        setExercises(exercises);
      } catch (error) {
        captureException(error);

        setError(error);
        setExercises(null);
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, []);

  return { error, exercises, loading };
}
