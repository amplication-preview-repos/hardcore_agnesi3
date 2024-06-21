import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InventoryService } from "./inventory.service";

@swagger.ApiTags("inventories")
@common.Controller("inventories")
export class InventoryController {
  constructor(protected readonly service: InventoryService) {}

  @common.Get("/:id/calculate-and-display-stock")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateAndDisplayStock(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CalculateAndDisplayStock(body);
      }

  @common.Get("/:id/calculate-stock")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CalculateStock(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CalculateStock(body);
      }

  @common.Get("/:id/get-final-stock")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFinalStock(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetFinalStock(body);
      }
}
