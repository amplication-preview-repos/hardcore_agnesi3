import { Transactions as TTransactions } from "../api/transactions/Transactions";

export const TRANSACTIONS_TITLE_FIELD = "id";

export const TransactionsTitle = (record: TTransactions): string => {
  return record.id?.toString() || String(record.id);
};
