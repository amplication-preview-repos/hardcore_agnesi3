import { TransactionsUpdateManyWithoutItemsCatalogsInput } from "./TransactionsUpdateManyWithoutItemsCatalogsInput";

export type ItemsCatalogUpdateInput = {
  description?: string | null;
  name?: string | null;
  sku?: string | null;
  transactionsItems?: TransactionsUpdateManyWithoutItemsCatalogsInput;
};
