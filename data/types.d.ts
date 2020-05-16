import { IdGetterObj } from "@apollo/client";

export type OmitTypename<T extends RequiredTypename> = Omit<T, "__typename">;

type RequiredTypename = Required<Pick<IdGetterObj, "__typename">>;
