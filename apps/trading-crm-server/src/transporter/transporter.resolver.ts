import * as graphql from "@nestjs/graphql";
import { TransporterResolverBase } from "./base/transporter.resolver.base";
import { Transporter } from "./base/Transporter";
import { TransporterService } from "./transporter.service";

@graphql.Resolver(() => Transporter)
export class TransporterResolver extends TransporterResolverBase {
  constructor(protected readonly service: TransporterService) {
    super(service);
  }
}
