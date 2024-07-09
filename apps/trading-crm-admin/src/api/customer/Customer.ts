import { Supply } from "../supply/Supply";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  supplies?: Array<Supply>;
};
