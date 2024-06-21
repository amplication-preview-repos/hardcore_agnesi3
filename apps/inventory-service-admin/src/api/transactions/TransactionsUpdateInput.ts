import { ItemsCatalogWhereUniqueInput } from "../itemsCatalog/ItemsCatalogWhereUniqueInput";
import { WarehouseWhereUniqueInput } from "../warehouse/WarehouseWhereUniqueInput";

export type TransactionsUpdateInput = {
  dateTime?: Date | null;
  itemsCatalog?: ItemsCatalogWhereUniqueInput | null;
  quantity?: number | null;
  typeField?: "Option1" | null;
  warehouse?: WarehouseWhereUniqueInput | null;
};
