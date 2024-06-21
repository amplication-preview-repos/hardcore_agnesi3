import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransactionsServiceBase } from "./base/transactions.service.base";

@Injectable()
export class TransactionsService extends TransactionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
