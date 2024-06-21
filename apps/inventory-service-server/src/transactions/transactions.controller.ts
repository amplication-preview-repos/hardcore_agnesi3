import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransactionsService } from "./transactions.service";
import { TransactionsControllerBase } from "./base/transactions.controller.base";

@swagger.ApiTags("transactions")
@common.Controller("transactions")
export class TransactionsController extends TransactionsControllerBase {
  constructor(protected readonly service: TransactionsService) {
    super(service);
  }
}
