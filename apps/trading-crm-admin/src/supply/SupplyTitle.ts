import { Supply as TSupply } from "../api/supply/Supply";

export const SUPPLY_TITLE_FIELD = "exportContractNumber";

export const SupplyTitle = (record: TSupply): string => {
  return record.exportContractNumber?.toString() || String(record.id);
};
