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
  Transporter as PrismaTransporter,
  Supply as PrismaSupply,
} from "@prisma/client";

export class TransporterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TransporterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.transporter.count(args);
  }

  async transporters(
    args: Prisma.TransporterFindManyArgs
  ): Promise<PrismaTransporter[]> {
    return this.prisma.transporter.findMany(args);
  }
  async transporter(
    args: Prisma.TransporterFindUniqueArgs
  ): Promise<PrismaTransporter | null> {
    return this.prisma.transporter.findUnique(args);
  }
  async createTransporter(
    args: Prisma.TransporterCreateArgs
  ): Promise<PrismaTransporter> {
    return this.prisma.transporter.create(args);
  }
  async updateTransporter(
    args: Prisma.TransporterUpdateArgs
  ): Promise<PrismaTransporter> {
    return this.prisma.transporter.update(args);
  }
  async deleteTransporter(
    args: Prisma.TransporterDeleteArgs
  ): Promise<PrismaTransporter> {
    return this.prisma.transporter.delete(args);
  }

  async findSupplies(
    parentId: string,
    args: Prisma.SupplyFindManyArgs
  ): Promise<PrismaSupply[]> {
    return this.prisma.transporter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .supplies(args);
  }
}
