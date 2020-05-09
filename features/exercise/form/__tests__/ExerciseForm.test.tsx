import { render, wait } from "@testing-library/react-native";
import React from "react";

import { ExerciseForm } from "../ExerciseForm";

describe("<ExerciseForm />", () => {
  it("renders as empty", async () => {
    const { baseElement, getByText } = render(<ExerciseForm />);

    await wait(() => expect(getByText("🤷‍♀️")));

    expect(baseElement).toMatchSnapshot();
  });
});
