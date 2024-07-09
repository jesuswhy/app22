import { Product } from "../product/Product";
import { Customer } from "../customer/Customer";
import { Supplier } from "../supplier/Supplier";
import { Transporter } from "../transporter/Transporter";

export type Supply = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customerAdvance: number | null;
  advanceSum: number | null;
  documentSentDate: Date | null;
  customerPaymentStatus?: "Option1" | null;
  customerPaymentSum: number | null;
  gUstatus?: "Option1" | null;
  estimatedCnyRate: number | null;
  exportContractNumber: string | null;
  supplyOwner: string | null;
  actuallyShippedVolume: number | null;
  plannedTrainDispatch: Date | null;
  actualTrainDispatch: Date | null;
  comments: string | null;
  finish: boolean | null;
  fss: string | null;
  st1: string | null;
  survey: string | null;
  paymentIssues: string | null;
  estimatedLogisticsRate: number | null;
  manager: string | null;
  deliveryNumber: string | null;
  secured: boolean | null;
  status?: "Option1" | null;
  salesVolume: number | null;
  salesPrice: number | null;
  sum: number | null;
  basis: string | null;
  purchaseRegion: string | null;
  purchaseVolume: number | null;
  deficit: number | null;
  weightedAvgPurchasePrice: number | null;
  transportRate: number | null;
  dispatchStartDate: Date | null;
  trainContractDispatch: Date | null;
  shipDispatch: Date | null;
  hedgeStatus?: "Option1" | null;
  paidToSupplier: number | null;
  supplierPaymentStatus?: "Option1" | null;
  invoiceDirectionDate: Date | null;
  product?: Product | null;
  customer?: Customer | null;
  supplier?: Supplier | null;
  transporter?: Transporter | null;
};
