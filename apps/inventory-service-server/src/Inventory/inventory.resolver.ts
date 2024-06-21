import * as graphql from "@nestjs/graphql";
import { InventoryService } from "./inventory.service";

export class InventoryResolver {
  constructor(protected readonly service: InventoryService) {}

  @graphql.Query(() => String)
  async CalculateAndDisplayStock(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CalculateAndDisplayStock(args);
  }

  @graphql.Query(() => String)
  async CalculateStock(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CalculateStock(args);
  }

  @graphql.Query(() => String)
  async GetFinalStock(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetFinalStock(args);
  }
}
