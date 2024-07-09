import { Supply } from "../supply/Supply";

export type Transporter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  supplies?: Array<Supply>;
};
