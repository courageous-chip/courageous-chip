import firebase from "firebase";
import { useEffect, useState } from "react";

export interface Exercise {
  id: string;
  name: string;
}

export function useExercises() {
  const [exercises, setExercises] = useState<readonly Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    firebase
      .firestore()
      .collection("exercises")
      .onSnapshot(function (snapshots) {
        const exercises: Exercise[] = [];

        snapshots.forEach(function (snapshot) {
          const id = snapshot.id;
          const name = snapshot.data().name;

          exercises.push({ id, name });
        });

        setExercises(exercises);
        setLoading(false);
      });
  }, []);

  return [exercises, loading] as const;
}
