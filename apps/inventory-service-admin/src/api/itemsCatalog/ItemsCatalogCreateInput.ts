import { TransactionsCreateNestedManyWithoutItemsCatalogsInput } from "./TransactionsCreateNestedManyWithoutItemsCatalogsInput";

export type ItemsCatalogCreateInput = {
  description?: string | null;
  name?: string | null;
  sku?: string | null;
  transactionsItems?: TransactionsCreateNestedManyWithoutItemsCatalogsInput;
};
