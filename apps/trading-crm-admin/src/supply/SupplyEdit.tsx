import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { TransporterTitle } from "../transporter/TransporterTitle";

export const SupplyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="CustomerAdvance" source="customerAdvance" />
        <NumberInput label="AdvanceSum" source="advanceSum" />
        <DateTimeInput label="DocumentSentDate" source="documentSentDate" />
        <SelectInput
          source="customerPaymentStatus"
          label="CustomerPaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="CustomerPaymentSum" source="customerPaymentSum" />
        <SelectInput
          source="gUstatus"
          label="GUstatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="EstimatedCNYRate" source="estimatedCnyRate" />
        <TextInput label="ExportContractNumber" source="exportContractNumber" />
        <TextInput label="SupplyOwner" source="supplyOwner" />
        <NumberInput
          label="ActuallyShippedVolume"
          source="actuallyShippedVolume"
        />
        <DateTimeInput
          label="PlannedTrainDispatch"
          source="plannedTrainDispatch"
        />
        <DateTimeInput
          label="ActualTrainDispatch"
          source="actualTrainDispatch"
        />
        <TextInput label="Comments" multiline source="comments" />
        <BooleanInput label="Finish" source="finish" />
        <TextInput label="FSS" source="fss" />
        <TextInput label="ST1" source="st1" />
        <TextInput label="Survey" source="survey" />
        <TextInput label="PaymentIssues" multiline source="paymentIssues" />
        <NumberInput
          label="EstimatedLogisticsRate"
          source="estimatedLogisticsRate"
        />
        <TextInput label="Manager" source="manager" />
        <TextInput label="DeliveryNumber" source="deliveryNumber" />
        <BooleanInput label="Secured" source="secured" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="SalesVolume" source="salesVolume" />
        <NumberInput label="SalesPrice" source="salesPrice" />
        <NumberInput label="Sum" source="sum" />
        <TextInput label="Basis" source="basis" />
        <TextInput label="PurchaseRegion" source="purchaseRegion" />
        <NumberInput label="PurchaseVolume" source="purchaseVolume" />
        <NumberInput label="Deficit" source="deficit" />
        <NumberInput
          label="WeightedAvgPurchasePrice"
          source="weightedAvgPurchasePrice"
        />
        <NumberInput label="TransportRate" source="transportRate" />
        <DateTimeInput label="DispatchStartDate" source="dispatchStartDate" />
        <DateTimeInput
          label="TrainContractDispatch"
          source="trainContractDispatch"
        />
        <DateTimeInput label="ShipDispatch" source="shipDispatch" />
        <SelectInput
          source="hedgeStatus"
          label="HedgeStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="PaidToSupplier" source="paidToSupplier" />
        <SelectInput
          source="supplierPaymentStatus"
          label="SupplierPaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput
          label="InvoiceDirectionDate"
          source="invoiceDirectionDate"
        />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="transporter.id"
          reference="Transporter"
          label="Transporter"
        >
          <SelectInput optionText={TransporterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
