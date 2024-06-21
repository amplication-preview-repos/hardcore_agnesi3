import { WarehouseWhereInput } from "./WarehouseWhereInput";
import { WarehouseOrderByInput } from "./WarehouseOrderByInput";

export type WarehouseFindManyArgs = {
  where?: WarehouseWhereInput;
  orderBy?: Array<WarehouseOrderByInput>;
  skip?: number;
  take?: number;
};
