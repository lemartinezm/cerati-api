import { PartialType } from '@nestjs/mapped-types';
import { CreateInfoDto, Social } from './create-info.dto';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateInfoDto extends PartialType(CreateInfoDto) {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  bio?: string;

  @IsOptional()
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  image?: string;

  @IsNotEmptyObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => Social)
  social?: Social;
}
