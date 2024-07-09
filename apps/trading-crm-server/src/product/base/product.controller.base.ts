/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductService } from "../product.service";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";
import { SupplyFindManyArgs } from "../../supply/base/SupplyFindManyArgs";
import { Supply } from "../../supply/base/Supply";
import { SupplyWhereUniqueInput } from "../../supply/base/SupplyWhereUniqueInput";

export class ProductControllerBase {
  constructor(protected readonly service: ProductService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/supplies")
  @ApiNestedQuery(SupplyFindManyArgs)
  async findSupplies(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Supply[]> {
    const query = plainToClass(SupplyFindManyArgs, request.query);
    const results = await this.service.findSupplies(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        customerAdvance: true,
        advanceSum: true,
        documentSentDate: true,
        customerPaymentStatus: true,
        customerPaymentSum: true,
        gUstatus: true,
        estimatedCnyRate: true,
        exportContractNumber: true,
        supplyOwner: true,
        actuallyShippedVolume: true,
        plannedTrainDispatch: true,
        actualTrainDispatch: true,
        comments: true,
        finish: true,
        fss: true,
        st1: true,
        survey: true,
        paymentIssues: true,
        estimatedLogisticsRate: true,
        manager: true,
        deliveryNumber: true,
        secured: true,
        status: true,
        salesVolume: true,
        salesPrice: true,
        sum: true,
        basis: true,
        purchaseRegion: true,
        purchaseVolume: true,
        deficit: true,
        weightedAvgPurchasePrice: true,
        transportRate: true,
        dispatchStartDate: true,
        trainContractDispatch: true,
        shipDispatch: true,
        hedgeStatus: true,
        paidToSupplier: true,
        supplierPaymentStatus: true,
        invoiceDirectionDate: true,

        product: {
          select: {
            id: true,
          },
        },

        customer: {
          select: {
            id: true,
          },
        },

        supplier: {
          select: {
            id: true,
          },
        },

        transporter: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/supplies")
  async connectSupplies(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: SupplyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supplies: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/supplies")
  async updateSupplies(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: SupplyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supplies: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/supplies")
  async disconnectSupplies(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: SupplyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      supplies: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }
}
