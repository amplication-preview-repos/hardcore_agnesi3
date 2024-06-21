import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemsCatalogService } from "./itemsCatalog.service";
import { ItemsCatalogControllerBase } from "./base/itemsCatalog.controller.base";

@swagger.ApiTags("itemsCatalogs")
@common.Controller("itemsCatalogs")
export class ItemsCatalogController extends ItemsCatalogControllerBase {
  constructor(protected readonly service: ItemsCatalogService) {
    super(service);
  }
}
