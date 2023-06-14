import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';
import { ISocial } from '../interfaces/social.interface';
import { Type } from 'class-transformer';

export class Social implements ISocial {
  @IsString()
  @IsOptional()
  facebook: string;

  @IsString()
  @IsOptional()
  instagram: string;

  @IsString()
  @IsOptional()
  twitter: string;

  @IsString()
  @IsOptional()
  spotify: string;

  @IsString()
  @IsOptional()
  appleMusic: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
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
  image: string;

  @IsNotEmptyObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => Social)
  social: Social;
}
