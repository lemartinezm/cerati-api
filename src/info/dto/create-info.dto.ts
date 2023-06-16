import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
  IsUrl,
} from 'class-validator';
import { ISocial } from '../interfaces/social.interface';
import { Type } from 'class-transformer';

export class Social implements ISocial {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  facebook: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  instagram: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  twitter: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  spotify: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  appleMusic: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  deezer: string;
}

export class CreateInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  bio: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image: string;

  @IsNotEmptyObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => Social)
  social: Social;
}
