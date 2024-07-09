import { Module } from "@nestjs/common";
import { SupplyModuleBase } from "./base/supply.module.base";
import { SupplyService } from "./supply.service";
import { SupplyController } from "./supply.controller";
import { SupplyResolver } from "./supply.resolver";

@Module({
  imports: [SupplyModuleBase],
  controllers: [SupplyController],
  providers: [SupplyService, SupplyResolver],
  exports: [SupplyService],
})
export class SupplyModule {}
