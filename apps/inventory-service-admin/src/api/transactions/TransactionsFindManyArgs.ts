import { TransactionsWhereInput } from "./TransactionsWhereInput";
import { TransactionsOrderByInput } from "./TransactionsOrderByInput";

export type TransactionsFindManyArgs = {
  where?: TransactionsWhereInput;
  orderBy?: Array<TransactionsOrderByInput>;
  skip?: number;
  take?: number;
};
