import { Supply } from "../supply/Supply";

export type Supplier = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  supplies?: Array<Supply>;
};
