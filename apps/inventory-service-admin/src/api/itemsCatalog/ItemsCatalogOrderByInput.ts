import { SortOrder } from "../../util/SortOrder";

export type ItemsCatalogOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
