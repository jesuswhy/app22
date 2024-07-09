import { TransporterWhereInput } from "./TransporterWhereInput";
import { TransporterOrderByInput } from "./TransporterOrderByInput";

export type TransporterFindManyArgs = {
  where?: TransporterWhereInput;
  orderBy?: Array<TransporterOrderByInput>;
  skip?: number;
  take?: number;
};
