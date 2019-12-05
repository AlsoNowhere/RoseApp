import React, { useState } from "react";

import { ModellerForm2 } from "components";
import { path, inheritor } from "services";

import { Supplier } from "../../../models/Supplier.model";

import { suppliers } from "../../../data/suppliers";

let id = 1;

const cancel = () => path.path = ["view-suppliers"];

export const AddEditSuppliers = props => {

    const type = path.path[0] === "add-supplier" ? "Add" : "Edit";

    const [formValues,setFormValues] = useState(
        type === "Edit"
            ? Object.assign(new Supplier(),suppliers[props.match.params.editId])
            : new Supplier()
    );

    const submit = () => {
        if (type === "Add") {
            formValues.id = ++id;
            suppliers.push(Object.assign({},formValues));
        }
        else {
            suppliers.splice(props.match.params.editId,1,Object.assign({},formValues));
        }
        cancel();
    }

    return (
        <section>
            <h2>{type} Supplier</h2>

            <ModellerForm2 name="manage-supplier"
                model={Supplier}
                onSubmit={submit}
                cancel={cancel}
                _inheritence={inheritor({
                    formValues: [formValues,setFormValues]
                })} />
        </section>
    );
}
