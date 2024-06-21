import { Transactions } from "../transactions/Transactions";

export type ItemsCatalog = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  sku: string | null;
  transactionsItems?: Array<Transactions>;
  updatedAt: Date;
};
