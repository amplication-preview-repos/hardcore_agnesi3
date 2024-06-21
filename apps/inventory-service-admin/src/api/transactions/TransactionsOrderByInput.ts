import { SortOrder } from "../../util/SortOrder";

export type TransactionsOrderByInput = {
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  itemsCatalogId?: SortOrder;
  quantity?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  warehouseId?: SortOrder;
};
