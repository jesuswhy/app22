import { SupplyCreateNestedManyWithoutTransportersInput } from "./SupplyCreateNestedManyWithoutTransportersInput";

export type TransporterCreateInput = {
  supplies?: SupplyCreateNestedManyWithoutTransportersInput;
};
