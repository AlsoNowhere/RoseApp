import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { Header } from "./structure/Header.component";

import { Home } from "./pages/Home.component";
import { ViewSuppliers } from "./pages/suppliers/ViewSuppliers.component";
import { AddEditSuppliers } from "./pages/suppliers/AddEditSupplier.component";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/view-suppliers" component={ViewSuppliers} />
                <Route path="/add-supplier" component={AddEditSuppliers} />
                <Route path="/edit-supplier/:editId" component={AddEditSuppliers} />
            </Switch>
        </>
    );
}

export default withRouter(App);
