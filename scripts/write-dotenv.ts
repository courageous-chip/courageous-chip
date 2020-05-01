import { promises as fs } from "fs";
import * as process from "process";

// Exit with a failure (1) status code on an unhandled rejection.
process.once("unhandledRejection", (error) => {
  throw error;
});

const enum FirebaseAppOption {
  ApiKey = "FIREBASE_API_KEY",
  AppId = "FIREBASE_APP_ID",
  AuthDomain = "FIREBASE_AUTH_DOMAIN",
  DatabaseUrl = "FIREBASE_DATABASE_URL",
  MessagingSenderId = "FIREBASE_MESSAGING_SENDER_ID",
  ProjectId = "FIREBASE_PROJECT_ID",
  StorageBucket = "FIREBASE_STORAGE_BUCKET",
}

const firebaseAppOptions = Object.freeze([
  FirebaseAppOption.ApiKey,
  FirebaseAppOption.AppId,
  FirebaseAppOption.AuthDomain,
  FirebaseAppOption.DatabaseUrl,
  FirebaseAppOption.MessagingSenderId,
  FirebaseAppOption.ProjectId,
  FirebaseAppOption.StorageBucket,
]);

const mapFirebaseAppOptionToDotenvKeyValue = (option: FirebaseAppOption) => {
  const value = process.env[option];

  if (!value) {
    throw new Error(`Unable to find environment variable: ${option}`);
  }

  return `${option}="${value}"`;
};

function getDotenvBody() {
  return firebaseAppOptions
    .map(mapFirebaseAppOptionToDotenvKeyValue)
    .join("\n");
}

(async function () {
  const data = getDotenvBody();

  await fs.writeFile(".env", data);
})();
