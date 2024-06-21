import { ItemsCatalog } from "../itemsCatalog/ItemsCatalog";
import { Warehouse } from "../warehouse/Warehouse";

export type Transactions = {
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  itemsCatalog?: ItemsCatalog | null;
  quantity: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  warehouse?: Warehouse | null;
};
