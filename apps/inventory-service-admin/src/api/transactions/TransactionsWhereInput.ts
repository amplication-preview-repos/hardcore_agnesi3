import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemsCatalogWhereUniqueInput } from "../itemsCatalog/ItemsCatalogWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type TransactionsWhereInput = {
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  itemsCatalog?: ItemsCatalogWhereUniqueInput;
  quantity?: IntNullableFilter;
  typeField?: "Option1";
  warehouse?: WarehouseWhereUniqueInput;
};
