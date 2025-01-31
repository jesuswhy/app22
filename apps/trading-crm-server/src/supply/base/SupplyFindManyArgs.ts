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
import { SupplyWhereInput } from "./SupplyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SupplyOrderByInput } from "./SupplyOrderByInput";

@ArgsType()
class SupplyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SupplyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SupplyWhereInput, { nullable: true })
  @Type(() => SupplyWhereInput)
  where?: SupplyWhereInput;

  @ApiProperty({
    required: false,
    type: [SupplyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SupplyOrderByInput], { nullable: true })
  @Type(() => SupplyOrderByInput)
  orderBy?: Array<SupplyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SupplyFindManyArgs as SupplyFindManyArgs };
