import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SupplyController } from "../supply.controller";
import { SupplyService } from "../supply.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  customerAdvance: 42.42,
  advanceSum: 42.42,
  documentSentDate: new Date(),
  customerPaymentSum: 42.42,
  estimatedCnyRate: 42.42,
  exportContractNumber: "exampleExportContractNumber",
  supplyOwner: "exampleSupplyOwner",
  actuallyShippedVolume: 42.42,
  plannedTrainDispatch: new Date(),
  actualTrainDispatch: new Date(),
  comments: "exampleComments",
  finish: "true",
  fss: "exampleFss",
  st1: "exampleSt1",
  survey: "exampleSurvey",
  paymentIssues: "examplePaymentIssues",
  estimatedLogisticsRate: 42.42,
  manager: "exampleManager",
  deliveryNumber: "exampleDeliveryNumber",
  secured: "true",
  salesVolume: 42.42,
  salesPrice: 42.42,
  sum: 42.42,
  basis: "exampleBasis",
  purchaseRegion: "examplePurchaseRegion",
  purchaseVolume: 42.42,
  deficit: 42.42,
  weightedAvgPurchasePrice: 42.42,
  transportRate: 42.42,
  dispatchStartDate: new Date(),
  trainContractDispatch: new Date(),
  shipDispatch: new Date(),
  paidToSupplier: 42.42,
  invoiceDirectionDate: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  customerAdvance: 42.42,
  advanceSum: 42.42,
  documentSentDate: new Date(),
  customerPaymentSum: 42.42,
  estimatedCnyRate: 42.42,
  exportContractNumber: "exampleExportContractNumber",
  supplyOwner: "exampleSupplyOwner",
  actuallyShippedVolume: 42.42,
  plannedTrainDispatch: new Date(),
  actualTrainDispatch: new Date(),
  comments: "exampleComments",
  finish: "true",
  fss: "exampleFss",
  st1: "exampleSt1",
  survey: "exampleSurvey",
  paymentIssues: "examplePaymentIssues",
  estimatedLogisticsRate: 42.42,
  manager: "exampleManager",
  deliveryNumber: "exampleDeliveryNumber",
  secured: "true",
  salesVolume: 42.42,
  salesPrice: 42.42,
  sum: 42.42,
  basis: "exampleBasis",
  purchaseRegion: "examplePurchaseRegion",
  purchaseVolume: 42.42,
  deficit: 42.42,
  weightedAvgPurchasePrice: 42.42,
  transportRate: 42.42,
  dispatchStartDate: new Date(),
  trainContractDispatch: new Date(),
  shipDispatch: new Date(),
  paidToSupplier: 42.42,
  invoiceDirectionDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    customerAdvance: 42.42,
    advanceSum: 42.42,
    documentSentDate: new Date(),
    customerPaymentSum: 42.42,
    estimatedCnyRate: 42.42,
    exportContractNumber: "exampleExportContractNumber",
    supplyOwner: "exampleSupplyOwner",
    actuallyShippedVolume: 42.42,
    plannedTrainDispatch: new Date(),
    actualTrainDispatch: new Date(),
    comments: "exampleComments",
    finish: "true",
    fss: "exampleFss",
    st1: "exampleSt1",
    survey: "exampleSurvey",
    paymentIssues: "examplePaymentIssues",
    estimatedLogisticsRate: 42.42,
    manager: "exampleManager",
    deliveryNumber: "exampleDeliveryNumber",
    secured: "true",
    salesVolume: 42.42,
    salesPrice: 42.42,
    sum: 42.42,
    basis: "exampleBasis",
    purchaseRegion: "examplePurchaseRegion",
    purchaseVolume: 42.42,
    deficit: 42.42,
    weightedAvgPurchasePrice: 42.42,
    transportRate: 42.42,
    dispatchStartDate: new Date(),
    trainContractDispatch: new Date(),
    shipDispatch: new Date(),
    paidToSupplier: 42.42,
    invoiceDirectionDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  customerAdvance: 42.42,
  advanceSum: 42.42,
  documentSentDate: new Date(),
  customerPaymentSum: 42.42,
  estimatedCnyRate: 42.42,
  exportContractNumber: "exampleExportContractNumber",
  supplyOwner: "exampleSupplyOwner",
  actuallyShippedVolume: 42.42,
  plannedTrainDispatch: new Date(),
  actualTrainDispatch: new Date(),
  comments: "exampleComments",
  finish: "true",
  fss: "exampleFss",
  st1: "exampleSt1",
  survey: "exampleSurvey",
  paymentIssues: "examplePaymentIssues",
  estimatedLogisticsRate: 42.42,
  manager: "exampleManager",
  deliveryNumber: "exampleDeliveryNumber",
  secured: "true",
  salesVolume: 42.42,
  salesPrice: 42.42,
  sum: 42.42,
  basis: "exampleBasis",
  purchaseRegion: "examplePurchaseRegion",
  purchaseVolume: 42.42,
  deficit: 42.42,
  weightedAvgPurchasePrice: 42.42,
  transportRate: 42.42,
  dispatchStartDate: new Date(),
  trainContractDispatch: new Date(),
  shipDispatch: new Date(),
  paidToSupplier: 42.42,
  invoiceDirectionDate: new Date(),
};

const service = {
  createSupply() {
    return CREATE_RESULT;
  },
  supplies: () => FIND_MANY_RESULT,
  supply: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Supply", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SupplyService,
          useValue: service,
        },
      ],
      controllers: [SupplyController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /supplies", async () => {
    await request(app.getHttpServer())
      .post("/supplies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        documentSentDate: CREATE_RESULT.documentSentDate.toISOString(),
        plannedTrainDispatch: CREATE_RESULT.plannedTrainDispatch.toISOString(),
        actualTrainDispatch: CREATE_RESULT.actualTrainDispatch.toISOString(),
        dispatchStartDate: CREATE_RESULT.dispatchStartDate.toISOString(),
        trainContractDispatch:
          CREATE_RESULT.trainContractDispatch.toISOString(),
        shipDispatch: CREATE_RESULT.shipDispatch.toISOString(),
        invoiceDirectionDate: CREATE_RESULT.invoiceDirectionDate.toISOString(),
      });
  });

  test("GET /supplies", async () => {
    await request(app.getHttpServer())
      .get("/supplies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          documentSentDate: FIND_MANY_RESULT[0].documentSentDate.toISOString(),
          plannedTrainDispatch:
            FIND_MANY_RESULT[0].plannedTrainDispatch.toISOString(),
          actualTrainDispatch:
            FIND_MANY_RESULT[0].actualTrainDispatch.toISOString(),
          dispatchStartDate:
            FIND_MANY_RESULT[0].dispatchStartDate.toISOString(),
          trainContractDispatch:
            FIND_MANY_RESULT[0].trainContractDispatch.toISOString(),
          shipDispatch: FIND_MANY_RESULT[0].shipDispatch.toISOString(),
          invoiceDirectionDate:
            FIND_MANY_RESULT[0].invoiceDirectionDate.toISOString(),
        },
      ]);
  });

  test("GET /supplies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supplies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /supplies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supplies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        documentSentDate: FIND_ONE_RESULT.documentSentDate.toISOString(),
        plannedTrainDispatch:
          FIND_ONE_RESULT.plannedTrainDispatch.toISOString(),
        actualTrainDispatch: FIND_ONE_RESULT.actualTrainDispatch.toISOString(),
        dispatchStartDate: FIND_ONE_RESULT.dispatchStartDate.toISOString(),
        trainContractDispatch:
          FIND_ONE_RESULT.trainContractDispatch.toISOString(),
        shipDispatch: FIND_ONE_RESULT.shipDispatch.toISOString(),
        invoiceDirectionDate:
          FIND_ONE_RESULT.invoiceDirectionDate.toISOString(),
      });
  });

  test("POST /supplies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/supplies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        documentSentDate: CREATE_RESULT.documentSentDate.toISOString(),
        plannedTrainDispatch: CREATE_RESULT.plannedTrainDispatch.toISOString(),
        actualTrainDispatch: CREATE_RESULT.actualTrainDispatch.toISOString(),
        dispatchStartDate: CREATE_RESULT.dispatchStartDate.toISOString(),
        trainContractDispatch:
          CREATE_RESULT.trainContractDispatch.toISOString(),
        shipDispatch: CREATE_RESULT.shipDispatch.toISOString(),
        invoiceDirectionDate: CREATE_RESULT.invoiceDirectionDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/supplies")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
