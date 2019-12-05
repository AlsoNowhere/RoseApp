import { modeller } from "components";

export const Supplier = function(){
    const model = new modeller.ModelBuilder();

    model.add("id","number",new modeller.Options({hide:true}));

    model.add("Name","string");
    model.validator("Name","required");

    model.add("Preferred","boolean");

    model.add("Rating","number");

    return model.create();
}();
