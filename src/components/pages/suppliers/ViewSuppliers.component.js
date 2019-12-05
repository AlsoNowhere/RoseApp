import React, { useState } from "react";

import { ModellerTable, TableColumn, Modal, closeModal } from "components";
import { path } from "services";

import { Supplier } from "../../../models/Supplier.model";

import { suppliers } from "../../../data/suppliers";

const styles = {width:"48px"};

export const ViewSuppliers = () => {

    const [deleteModalState,setDeleteModalState] = useState("");
    const [editId,setEditId] = useState(null);

    const rows = suppliers.map(x=>Object.assign(new Supplier(),x));

    const extendColumns = [
        new TableColumn("","Edit",{headerStyles:styles,cellStyles:styles,cellContent:(_,__,rowIndex)=>(
            <button type="button" onClick={() => path.path = ["edit-supplier",rowIndex]}>
                <span className="fa fa-pencil"></span>
            </button>
        )}),
        new TableColumn("","Delete",{headerStyles:styles,cellStyles:styles,cellContent:(_,__,rowIndex)=>(
            <button type="button" onClick={() => {
                setEditId(rowIndex);
                setDeleteModalState("open");
            }}>
                <span className="fa fa-trash-o"></span>
            </button>
        )})
    ];

    const cancel = () => closeModal(setDeleteModalState);
    const deleteItem = () => {
        suppliers.splice(editId,1);
        setEditId(null);
        cancel();
    }

    return (
        <>
            <section>
                <h2>Suppliers</h2>

                <div className="margin-bottom-large">
                    <button type="button" className="large" onClick={() => path.path = ["add-supplier"]}>Add Supplier</button>
                </div>

                <ModellerTable model={Supplier} rows={rows} extendColumns={extendColumns} />
            </section>
            <Modal label="Are you sure you want to delete this Supplier?" state={deleteModalState} update={setDeleteModalState}>
                <div className="padding-large">
                    <button type="button" className="danger large margin-right" onClick={deleteItem}>Delete</button>
                    <button type="button" className="grey large margin-right" onClick={cancel}>Cancel</button>
                </div>
            </Modal>
        </>
    );
}
