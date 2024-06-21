import { Module } from "@nestjs/common";
import { ItemsCatalogModuleBase } from "./base/itemsCatalog.module.base";
import { ItemsCatalogService } from "./itemsCatalog.service";
import { ItemsCatalogController } from "./itemsCatalog.controller";
import { ItemsCatalogResolver } from "./itemsCatalog.resolver";

@Module({
  imports: [ItemsCatalogModuleBase],
  controllers: [ItemsCatalogController],
  providers: [ItemsCatalogService, ItemsCatalogResolver],
  exports: [ItemsCatalogService],
})
export class ItemsCatalogModule {}
