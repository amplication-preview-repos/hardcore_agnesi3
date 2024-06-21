import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TransactionsTitle } from "../transactions/TransactionsTitle";

export const ItemsCatalogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="SKU" source="sku" />
        <ReferenceArrayInput
          source="transactionsItems"
          reference="Transactions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
