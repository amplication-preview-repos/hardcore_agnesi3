import { ItemsCatalog as TItemsCatalog } from "../api/itemsCatalog/ItemsCatalog";

export const ITEMSCATALOG_TITLE_FIELD = "name";

export const ItemsCatalogTitle = (record: TItemsCatalog): string => {
  return record.name?.toString() || String(record.id);
};
