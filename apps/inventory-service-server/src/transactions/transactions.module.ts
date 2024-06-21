import { Module } from "@nestjs/common";
import { TransactionsModuleBase } from "./base/transactions.module.base";
import { TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";
import { TransactionsResolver } from "./transactions.resolver";

@Module({
  imports: [TransactionsModuleBase],
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionsResolver],
  exports: [TransactionsService],
})
export class TransactionsModule {}
