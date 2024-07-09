/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupplyWhereUniqueInput } from "./SupplyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class SupplyFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => SupplyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplyWhereUniqueInput)
  @Field(() => SupplyWhereUniqueInput, { nullable: false })
  where!: SupplyWhereUniqueInput;
}

export { SupplyFindUniqueArgs as SupplyFindUniqueArgs };
