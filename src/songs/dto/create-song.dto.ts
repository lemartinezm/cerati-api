import {
  IsArray,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Platforms } from './platforms';

export class CreateSongDto {
  @IsString()
  name: string;

  @IsString()
  album: string;

  @IsString()
  lyrics: string;

  @IsNumber()
  duration: number;

  @IsArray()
  @IsString({ each: true })
  genre: Array<string>;

  @IsArray()
  @IsString({ each: true })
  artists: Array<string>;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Platforms)
  platforms: Platforms;

  @IsString()
  @IsUrl()
  @IsOptional()
  videoUrl: string;
}
