import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemsCatalogServiceBase } from "./base/itemsCatalog.service.base";

@Injectable()
export class ItemsCatalogService extends ItemsCatalogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
