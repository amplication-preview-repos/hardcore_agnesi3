import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionsListRelationFilter } from "../transactions/TransactionsListRelationFilter";

export type ItemsCatalogWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  sku?: StringNullableFilter;
  transactionsItems?: TransactionsListRelationFilter;
};
