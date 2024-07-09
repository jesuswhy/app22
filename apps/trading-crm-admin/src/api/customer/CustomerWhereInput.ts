import { StringFilter } from "../../util/StringFilter";
import { SupplyListRelationFilter } from "../supply/SupplyListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  supplies?: SupplyListRelationFilter;
};
