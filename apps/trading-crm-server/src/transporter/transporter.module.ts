import { Module } from "@nestjs/common";
import { TransporterModuleBase } from "./base/transporter.module.base";
import { TransporterService } from "./transporter.service";
import { TransporterController } from "./transporter.controller";
import { TransporterResolver } from "./transporter.resolver";

@Module({
  imports: [TransporterModuleBase],
  controllers: [TransporterController],
  providers: [TransporterService, TransporterResolver],
  exports: [TransporterService],
})
export class TransporterModule {}
