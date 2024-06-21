import { Injectable } from "@nestjs/common";

@Injectable()
export class InventoryService {
  constructor() {}
  async CalculateAndDisplayStock(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CalculateStock(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetFinalStock(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
