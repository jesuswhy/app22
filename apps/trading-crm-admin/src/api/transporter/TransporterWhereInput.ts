import { StringFilter } from "../../util/StringFilter";
import { SupplyListRelationFilter } from "../supply/SupplyListRelationFilter";

export type TransporterWhereInput = {
  id?: StringFilter;
  supplies?: SupplyListRelationFilter;
};
