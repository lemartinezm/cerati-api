import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Platforms } from './platforms';

export class UpdateSongDto extends PartialType(CreateSongDto) {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  album: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  lyrics: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  duration: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @IsNotEmpty()
  genre: Array<string>;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  @IsNotEmpty()
  artists: Array<string>;

  @IsNotEmptyObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => Platforms)
  platforms: Platforms;

  @IsString()
  @IsUrl()
  @IsOptional()
  @IsNotEmpty()
  videoUrl: string;
}
