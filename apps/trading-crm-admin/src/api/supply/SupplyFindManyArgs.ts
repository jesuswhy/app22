import { SupplyWhereInput } from "./SupplyWhereInput";
import { SupplyOrderByInput } from "./SupplyOrderByInput";

export type SupplyFindManyArgs = {
  where?: SupplyWhereInput;
  orderBy?: Array<SupplyOrderByInput>;
  skip?: number;
  take?: number;
};
