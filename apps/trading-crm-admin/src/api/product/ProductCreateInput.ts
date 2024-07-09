import { SupplyCreateNestedManyWithoutProductsInput } from "./SupplyCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  supplies?: SupplyCreateNestedManyWithoutProductsInput;
};
