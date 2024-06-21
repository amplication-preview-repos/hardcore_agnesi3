import { Transactions } from "../transactions/Transactions";

export type Warehouse = {
  createdAt: Date;
  id: string;
  location: string | null;
  transactionsItems?: Array<Transactions>;
  updatedAt: Date;
};
