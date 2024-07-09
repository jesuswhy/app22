import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TransporterService } from "./transporter.service";
import { TransporterControllerBase } from "./base/transporter.controller.base";

@swagger.ApiTags("transporters")
@common.Controller("transporters")
export class TransporterController extends TransporterControllerBase {
  constructor(protected readonly service: TransporterService) {
    super(service);
  }
}
