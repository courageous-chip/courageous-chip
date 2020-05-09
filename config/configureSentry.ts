import Constants from "expo-constants";
import { SENTRY_DSN } from "react-native-dotenv";
import * as Sentry from "sentry-expo";

export function configureSentry(
  release = Constants.manifest.revisionId,
  setRelease = Sentry.setRelease,
) {
  Sentry.init({
    debug: true,
    dsn: SENTRY_DSN,
    enableInExpoDevelopment: true,
  });

  // In order to use the published release source maps with Issues in Sentry,
  // you'll have to set your Expo revisionId as the Sentry release identifier.
  // Note that the revisionId is not available in the manifest when running in
  // development mode (using Expo CLI), defaulting to `undefined`.
  //
  // https://docs.expo.io/guides/using-sentry/#publish-your-app-with-sourcemaps

  if (release) {
    setRelease(release);
  }
}
