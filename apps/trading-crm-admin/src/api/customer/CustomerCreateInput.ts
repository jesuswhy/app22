import { SupplyCreateNestedManyWithoutCustomersInput } from "./SupplyCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  supplies?: SupplyCreateNestedManyWithoutCustomersInput;
};
