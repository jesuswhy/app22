import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TRANSPORTER_TITLE_FIELD } from "../transporter/TransporterTitle";

export const SupplyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Supplies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="CustomerAdvance" source="customerAdvance" />
        <TextField label="AdvanceSum" source="advanceSum" />
        <TextField label="DocumentSentDate" source="documentSentDate" />
        <TextField
          label="CustomerPaymentStatus"
          source="customerPaymentStatus"
        />
        <TextField label="CustomerPaymentSum" source="customerPaymentSum" />
        <TextField label="GUstatus" source="gUstatus" />
        <TextField label="EstimatedCNYRate" source="estimatedCnyRate" />
        <TextField label="ExportContractNumber" source="exportContractNumber" />
        <TextField label="SupplyOwner" source="supplyOwner" />
        <TextField
          label="ActuallyShippedVolume"
          source="actuallyShippedVolume"
        />
        <TextField label="PlannedTrainDispatch" source="plannedTrainDispatch" />
        <TextField label="ActualTrainDispatch" source="actualTrainDispatch" />
        <TextField label="Comments" source="comments" />
        <BooleanField label="Finish" source="finish" />
        <TextField label="FSS" source="fss" />
        <TextField label="ST1" source="st1" />
        <TextField label="Survey" source="survey" />
        <TextField label="PaymentIssues" source="paymentIssues" />
        <TextField
          label="EstimatedLogisticsRate"
          source="estimatedLogisticsRate"
        />
        <TextField label="Manager" source="manager" />
        <TextField label="DeliveryNumber" source="deliveryNumber" />
        <BooleanField label="Secured" source="secured" />
        <TextField label="Status" source="status" />
        <TextField label="SalesVolume" source="salesVolume" />
        <TextField label="SalesPrice" source="salesPrice" />
        <TextField label="Sum" source="sum" />
        <TextField label="Basis" source="basis" />
        <TextField label="PurchaseRegion" source="purchaseRegion" />
        <TextField label="PurchaseVolume" source="purchaseVolume" />
        <TextField label="Deficit" source="deficit" />
        <TextField
          label="WeightedAvgPurchasePrice"
          source="weightedAvgPurchasePrice"
        />
        <TextField label="TransportRate" source="transportRate" />
        <TextField label="DispatchStartDate" source="dispatchStartDate" />
        <TextField
          label="TrainContractDispatch"
          source="trainContractDispatch"
        />
        <TextField label="ShipDispatch" source="shipDispatch" />
        <TextField label="HedgeStatus" source="hedgeStatus" />
        <TextField label="PaidToSupplier" source="paidToSupplier" />
        <TextField
          label="SupplierPaymentStatus"
          source="supplierPaymentStatus"
        />
        <TextField label="InvoiceDirectionDate" source="invoiceDirectionDate" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Transporter"
          source="transporter.id"
          reference="Transporter"
        >
          <TextField source={TRANSPORTER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
