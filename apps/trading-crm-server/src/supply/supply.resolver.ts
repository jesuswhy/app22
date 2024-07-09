import * as graphql from "@nestjs/graphql";
import { SupplyResolverBase } from "./base/supply.resolver.base";
import { Supply } from "./base/Supply";
import { SupplyService } from "./supply.service";

@graphql.Resolver(() => Supply)
export class SupplyResolver extends SupplyResolverBase {
  constructor(protected readonly service: SupplyService) {
    super(service);
  }
}
