import {
  SENTRY_AUTH_TOKEN,
  SENTRY_DSN,
  SENTRY_ORG,
  SENTRY_PROJECT,
} from "react-native-dotenv";
import * as Sentry from "sentry-expo";

import { configureSentry } from "../configureSentry";

jest.mock("sentry-expo");

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
    const spy = jest.spyOn(Sentry, "init").mockImplementationOnce(() => {});

    configureSentry();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      debug: true,
      dsn: SENTRY_DSN,
      enableInExpoDevelopment: true,
    });
  });

  it("should set the Sentry release when a release is present", () => {
    let actualRelease: string | undefined;
    const expectedRelease = "1.2.3";

    configureSentry(expectedRelease, (release) => {
      actualRelease = release;
    });

    expect(actualRelease).toEqual(expectedRelease);
  });

  it("should not set the Sentry release when a release is absent", () => {
    let setReleaseCalled = false;

    configureSentry(undefined, () => {
      setReleaseCalled = true;
    });

    expect(setReleaseCalled).toBeFalsy();
  });
});
