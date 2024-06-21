import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionsListRelationFilter } from "../transactions/TransactionsListRelationFilter";

export type WarehouseWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  transactionsItems?: TransactionsListRelationFilter;
};
