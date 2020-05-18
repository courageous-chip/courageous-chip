import { Reducer } from "react";

import { Action } from "./Action";
import { ActionType } from "./ActionType";
import { State } from "./State";

export const reducer: Reducer<State, Action> = function (state, action) {
  switch (action.type) {
    case ActionType.ChangeName:
      return { ...state, name: action.name, valid: isValid(action.name) };

    case ActionType.ShowHabitFailure:
      return {
        ...state,
        error: action.error,
        id: null,
        loading: false,
        name: null,
      };

    case ActionType.ShowHabitRequest:
      return { ...state, loading: true };

    case ActionType.ShowHabitSuccess:
      return {
        ...state,
        error: null,
        id: action.id,
        loading: false,
        name: action.name,
        valid: isValid(action.name),
      };
  }
};

function isValid(name: string) {
  return name.length > 1;
}
