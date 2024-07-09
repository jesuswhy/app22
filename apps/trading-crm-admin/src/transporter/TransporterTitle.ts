import { Transporter as TTransporter } from "../api/transporter/Transporter";

export const TRANSPORTER_TITLE_FIELD = "id";

export const TransporterTitle = (record: TTransporter): string => {
  return record.id?.toString() || String(record.id);
};
