import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ITEMSCATALOG_TITLE_FIELD } from "../itemsCatalog/ItemsCatalogTitle";
import { WAREHOUSE_TITLE_FIELD } from "./WarehouseTitle";

export const WarehouseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transactions"
          target="warehouseId"
          label="TransactionsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateTime" source="dateTime" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ItemsCatalog"
              source="itemscatalog.id"
              reference="ItemsCatalog"
            >
              <TextField source={ITEMSCATALOG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Warehouse"
              source="warehouse.id"
              reference="Warehouse"
            >
              <TextField source={WAREHOUSE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
