import { StringFilter } from "../../util/StringFilter";
import { SupplyListRelationFilter } from "../supply/SupplyListRelationFilter";

export type SupplierWhereInput = {
  id?: StringFilter;
  supplies?: SupplyListRelationFilter;
};
