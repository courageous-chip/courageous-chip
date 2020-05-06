import {
  SENTRY_AUTH_TOKEN,
  SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
} from "react-native-dotenv";
import * as SentryExpo from "sentry-expo";

import { configureSentry } from "../configureSentry";

describe("configureSentry()", () => {
  it("should find the auth token environment variable", () => {
    expect(SENTRY_AUTH_TOKEN).toBeTruthy();
  });

  it("should find the DSN environment variable", () => {
    expect(SENTRY_DSN).toBeTruthy();
  });

  it("should find the org environment variable", () => {
    expect(SENTRY_ORG).toBeTruthy();
  });

  it("should find the project environment variable", () => {
    expect(SENTRY_PROJECT).toBeTruthy();
  });

  it("should initialize Sentry", () => {
    const spy = jest.spyOn(SentryExpo, "init").mockImplementationOnce(() => {});

    configureSentry();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      debug: true,
      dsn: SENTRY_DSN,
      enableInExpoDevelopment: true,
    });
  });
});
