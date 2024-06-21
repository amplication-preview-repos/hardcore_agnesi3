import * as graphql from "@nestjs/graphql";
import { TransactionsResolverBase } from "./base/transactions.resolver.base";
import { Transactions } from "./base/Transactions";
import { TransactionsService } from "./transactions.service";

@graphql.Resolver(() => Transactions)
export class TransactionsResolver extends TransactionsResolverBase {
  constructor(protected readonly service: TransactionsService) {
    super(service);
  }
}
