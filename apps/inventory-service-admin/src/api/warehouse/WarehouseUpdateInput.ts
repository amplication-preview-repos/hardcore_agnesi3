import { TransactionsUpdateManyWithoutWarehousesInput } from "./TransactionsUpdateManyWithoutWarehousesInput";

export type WarehouseUpdateInput = {
  location?: string | null;
  transactionsItems?: TransactionsUpdateManyWithoutWarehousesInput;
};
