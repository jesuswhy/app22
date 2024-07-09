import { Supply } from "../supply/Supply";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  supplies?: Array<Supply>;
};
