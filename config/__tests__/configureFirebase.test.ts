import * as firebase from "firebase/app";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "react-native-dotenv";

import { configureFirebase } from "../configureFirebase";

describe("configureFirebase()", () => {
  it("should find the API key environment variable", () => {
    expect(FIREBASE_API_KEY).toBeTruthy();
  });

  it("should find the app ID environment variable", () => {
    expect(FIREBASE_APP_ID).toBeTruthy();
  });

  it("should find the auth domain environment variable", () => {
    expect(FIREBASE_AUTH_DOMAIN).toBeTruthy();
  });

  it("should find the database URL environment variable", () => {
    expect(FIREBASE_DATABASE_URL).toBeTruthy();
  });

  it("should find the messaging sender ID environment variable", () => {
    expect(FIREBASE_MESSAGING_SENDER_ID).toBeTruthy();
  });

  it("should find the project ID environment variable", () => {
    expect(FIREBASE_PROJECT_ID).toBeTruthy();
  });

  it("should find the storage bucket environment variable", () => {
    expect(FIREBASE_STORAGE_BUCKET).toBeTruthy();
  });

  it("should register Cloud Firestore with the Firebase app", () => {
    expect(firebase.firestore).toBeTruthy();
  });

  it("should initialize the Firebase app", () => {
    const spy = jest
      .spyOn(firebase, "initializeApp")
      .mockImplementationOnce(() => ({} as firebase.app.App));

    configureFirebase();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      apiKey: FIREBASE_API_KEY,
      appId: FIREBASE_APP_ID,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
    });
  });
});
