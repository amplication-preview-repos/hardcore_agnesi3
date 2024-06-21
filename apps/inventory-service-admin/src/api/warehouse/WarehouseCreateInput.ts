import { TransactionsCreateNestedManyWithoutWarehousesInput } from "./TransactionsCreateNestedManyWithoutWarehousesInput";

export type WarehouseCreateInput = {
  location?: string | null;
  transactionsItems?: TransactionsCreateNestedManyWithoutWarehousesInput;
};
