import { ItemsCatalogWhereInput } from "./ItemsCatalogWhereInput";
import { ItemsCatalogOrderByInput } from "./ItemsCatalogOrderByInput";

export type ItemsCatalogFindManyArgs = {
  where?: ItemsCatalogWhereInput;
  orderBy?: Array<ItemsCatalogOrderByInput>;
  skip?: number;
  take?: number;
};
