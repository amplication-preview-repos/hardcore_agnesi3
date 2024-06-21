import * as graphql from "@nestjs/graphql";
import { ItemsCatalogResolverBase } from "./base/itemsCatalog.resolver.base";
import { ItemsCatalog } from "./base/ItemsCatalog";
import { ItemsCatalogService } from "./itemsCatalog.service";

@graphql.Resolver(() => ItemsCatalog)
export class ItemsCatalogResolver extends ItemsCatalogResolverBase {
  constructor(protected readonly service: ItemsCatalogService) {
    super(service);
  }
}
