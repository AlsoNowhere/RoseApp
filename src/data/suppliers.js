import { Supplier } from "../models/Supplier.model";

export const suppliers = JSON.parse(JSON.stringify([
    new Supplier(0,"One",true,4),
    new Supplier(1,"Two",false,3.5)
]));

console.log("Supps: ", suppliers);
