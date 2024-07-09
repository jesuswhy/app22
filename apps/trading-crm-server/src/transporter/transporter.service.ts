import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransporterServiceBase } from "./base/transporter.service.base";

@Injectable()
export class TransporterService extends TransporterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
