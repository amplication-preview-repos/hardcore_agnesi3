import { Module } from "@nestjs/common";
import { WarehouseModuleBase } from "./base/warehouse.module.base";
import { WarehouseService } from "./warehouse.service";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseResolver } from "./warehouse.resolver";

@Module({
  imports: [WarehouseModuleBase],
  controllers: [WarehouseController],
  providers: [WarehouseService, WarehouseResolver],
  exports: [WarehouseService],
})
export class WarehouseModule {}
