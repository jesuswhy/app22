import { StringFilter } from "../../util/StringFilter";
import { SupplyListRelationFilter } from "../supply/SupplyListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  supplies?: SupplyListRelationFilter;
};
