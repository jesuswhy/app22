import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupplyService } from "./supply.service";
import { SupplyControllerBase } from "./base/supply.controller.base";

@swagger.ApiTags("supplies")
@common.Controller("supplies")
export class SupplyController extends SupplyControllerBase {
  constructor(protected readonly service: SupplyService) {
    super(service);
  }
}
