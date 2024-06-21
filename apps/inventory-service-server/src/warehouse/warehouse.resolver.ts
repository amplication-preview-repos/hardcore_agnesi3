import * as graphql from "@nestjs/graphql";
import { WarehouseResolverBase } from "./base/warehouse.resolver.base";
import { Warehouse } from "./base/Warehouse";
import { WarehouseService } from "./warehouse.service";

@graphql.Resolver(() => Warehouse)
export class WarehouseResolver extends WarehouseResolverBase {
  constructor(protected readonly service: WarehouseService) {
    super(service);
  }
}
