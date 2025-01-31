/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupplyCreateNestedManyWithoutTransportersInput } from "./SupplyCreateNestedManyWithoutTransportersInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TransporterCreateInput {
  @ApiProperty({
    required: false,
    type: () => SupplyCreateNestedManyWithoutTransportersInput,
  })
  @ValidateNested()
  @Type(() => SupplyCreateNestedManyWithoutTransportersInput)
  @IsOptional()
  @Field(() => SupplyCreateNestedManyWithoutTransportersInput, {
    nullable: true,
  })
  supplies?: SupplyCreateNestedManyWithoutTransportersInput;
}

export { TransporterCreateInput as TransporterCreateInput };
