import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { render, wait } from "@testing-library/react-native";
import { GraphQLError } from "graphql";
import React from "react";

import { HabitList, GET_HABITS_QUERY } from "../HabitList";

describe("<HabitList />", () => {
  it("renders as empty", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: GET_HABITS_QUERY },
        result: {
          data: {
            habits: [],
          },
        },
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <HabitList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("🤷‍♀️")));

    expect(baseElement).toMatchSnapshot();
  });

  it("renders habits", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: GET_HABITS_QUERY },
        result: {
          data: {
            habits: [{ id: "1", name: "🦷 Floss Teeth", __typename: "Habit" }],
          },
        },
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <HabitList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("🦷 Floss Teeth")));

    expect(baseElement).toMatchSnapshot();
  });

  it("renders as loading", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: GET_HABITS_QUERY },
        result: {},
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <HabitList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("🤔")));

    expect(baseElement).toMatchSnapshot();
  });

  it("renders on error", async () => {
    const mocks: MockedResponse[] = [
      {
        request: { query: GET_HABITS_QUERY },
        result: {
          errors: [new GraphQLError("🙅‍♀️")],
        },
      },
    ];
    const { baseElement, getByText } = render(
      <MockedProvider mocks={mocks}>
        <HabitList />
      </MockedProvider>,
    );

    await wait(() => expect(getByText("💩")));

    expect(baseElement).toMatchSnapshot();
  });
});
