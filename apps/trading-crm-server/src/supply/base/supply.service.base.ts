/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Supply as PrismaSupply,
  Product as PrismaProduct,
  Customer as PrismaCustomer,
  Supplier as PrismaSupplier,
  Transporter as PrismaTransporter,
} from "@prisma/client";

import { SupplyCreateInput } from "./SupplyCreateInput";
import { Supply } from "./Supply";
import { DeleteSupplyArgs } from "./DeleteSupplyArgs";
import { SupplyWhereInput } from "./SupplyWhereInput";
import { SupplyWhereUniqueInput } from "./SupplyWhereUniqueInput";
import { SupplyUpdateInput } from "./SupplyUpdateInput";

export class SupplyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SupplyCountArgs, "select">): Promise<number> {
    return this.prisma.supply.count(args);
  }

  async supplies(args: Prisma.SupplyFindManyArgs): Promise<PrismaSupply[]> {
    return this.prisma.supply.findMany(args);
  }
  async supply(
    args: Prisma.SupplyFindUniqueArgs
  ): Promise<PrismaSupply | null> {
    return this.prisma.supply.findUnique(args);
  }
  async createSupply(args: Prisma.SupplyCreateArgs): Promise<PrismaSupply> {
    return this.prisma.supply.create(args);
  }
  async updateSupply(args: Prisma.SupplyUpdateArgs): Promise<PrismaSupply> {
    return this.prisma.supply.update(args);
  }
  async deleteSupply(args: Prisma.SupplyDeleteArgs): Promise<PrismaSupply> {
    return this.prisma.supply.delete(args);
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.supply
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.supply
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getSupplier(parentId: string): Promise<PrismaSupplier | null> {
    return this.prisma.supply
      .findUnique({
        where: { id: parentId },
      })
      .supplier();
  }

  async getTransporter(parentId: string): Promise<PrismaTransporter | null> {
    return this.prisma.supply
      .findUnique({
        where: { id: parentId },
      })
      .transporter();
  }
  async CreateSupply(args: SupplyCreateInput): Promise<Supply> {
    throw new Error("Not implemented");
  }
  async DeleteSupply(args: DeleteSupplyArgs): Promise<Supply> {
    throw new Error("Not implemented");
  }
  async GetAllSupplies(args: SupplyWhereInput[]): Promise<Supply[]> {
    throw new Error("Not implemented");
  }
  async GetSupplyById(args: SupplyWhereUniqueInput): Promise<Supply> {
    throw new Error("Not implemented");
  }
  async UpdateSupply(args: SupplyUpdateInput): Promise<Supply> {
    throw new Error("Not implemented");
  }
}
