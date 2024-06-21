import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionsList } from "./transactions/TransactionsList";
import { TransactionsCreate } from "./transactions/TransactionsCreate";
import { TransactionsEdit } from "./transactions/TransactionsEdit";
import { TransactionsShow } from "./transactions/TransactionsShow";
import { ItemsCatalogList } from "./itemsCatalog/ItemsCatalogList";
import { ItemsCatalogCreate } from "./itemsCatalog/ItemsCatalogCreate";
import { ItemsCatalogEdit } from "./itemsCatalog/ItemsCatalogEdit";
import { ItemsCatalogShow } from "./itemsCatalog/ItemsCatalogShow";
import { WarehouseList } from "./warehouse/WarehouseList";
import { WarehouseCreate } from "./warehouse/WarehouseCreate";
import { WarehouseEdit } from "./warehouse/WarehouseEdit";
import { WarehouseShow } from "./warehouse/WarehouseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"InventoryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transactions"
          list={TransactionsList}
          edit={TransactionsEdit}
          create={TransactionsCreate}
          show={TransactionsShow}
        />
        <Resource
          name="ItemsCatalog"
          list={ItemsCatalogList}
          edit={ItemsCatalogEdit}
          create={ItemsCatalogCreate}
          show={ItemsCatalogShow}
        />
        <Resource
          name="Warehouse"
          list={WarehouseList}
          edit={WarehouseEdit}
          create={WarehouseCreate}
          show={WarehouseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
