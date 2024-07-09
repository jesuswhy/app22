import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  roleName?: StringNullableFilter;
};
