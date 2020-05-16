import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render, wait } from "@testing-library/react-native";
import { GraphQLError } from "graphql";
import React from "react";

import { ExerciseList, LIST_EXERCISES_QUERY } from "../ExerciseList";

describe("<ExerciseList />", () => {
  const MockedExerciseList = () => <ExerciseList onPress={() => {}} />;

  it("renders as empty", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: LIST_EXERCISES_QUERY },
        result: {
          data: {
            exercises: [],
          },
        },
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <MockedExerciseList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("🤷‍♀️")));

    expect(baseElement).toMatchSnapshot();
  });

  it("renders exercises", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: LIST_EXERCISES_QUERY },
        result: {
          data: {
            exercises: [
              { id: "1", name: "🏋️‍♀️ Deadlift", __typename: "Exercise" },
            ],
          },
        },
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <MockedExerciseList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("🏋️‍♀️ Deadlift")));

    expect(baseElement).toMatchSnapshot();
  });

  it("renders as loading", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: LIST_EXERCISES_QUERY },
        result: {},
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <MockedExerciseList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("🤔")));

    expect(baseElement).toMatchSnapshot();
  });

  it("renders on error", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: LIST_EXERCISES_QUERY },
        result: {
          errors: [new GraphQLError("🙅‍♀️")],
        },
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <MockedExerciseList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("💩")));

    expect(baseElement).toMatchSnapshot();
  });
});
