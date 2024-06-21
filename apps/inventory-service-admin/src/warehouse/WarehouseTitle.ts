import { Warehouse as TWarehouse } from "../api/warehouse/Warehouse";

export const WAREHOUSE_TITLE_FIELD = "location";

export const WarehouseTitle = (record: TWarehouse): string => {
  return record.location?.toString() || String(record.id);
};
