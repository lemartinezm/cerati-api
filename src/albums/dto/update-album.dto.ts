import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAlbumDto } from './create-album.dto';

export class UpdateAlbumDto extends PartialType(CreateAlbumDto) {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  image: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @IsOptional()
  year: number;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ArrayNotEmpty()
  @IsOptional()
  artist: Array<string>;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ArrayNotEmpty()
  @IsOptional()
  genre: Array<string>;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @IsOptional()
  totalTracks: number;

  @IsString({ each: true })
  @ArrayNotEmpty()
  @IsOptional()
  songs: Array<string>;
}
