#!/usr/bin/env node

const { writeFile } = require("fs").promises;

(async function () {
  const data = [
    "FIREBASE_API_KEY",
    "FIREBASE_APP_ID",
    "FIREBASE_AUTH_DOMAIN",
    "FIREBASE_DATABASE_URL",
    "FIREBASE_MESSAGING_SENDER_ID",
    "FIREBASE_PROJECT_ID",
    "FIREBASE_STORAGE_BUCKET",
  ]
    .map((key) => {
      const value = process.env[key];

      if (!value) {
        throw new Error(`Unable to find environment variable: ${key}`);
      }

      return `${key}="${value}"`;
    })
    .join("\n");

  await writeFile(".env", data);
})();
