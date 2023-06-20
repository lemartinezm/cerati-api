import {
  ArrayNotEmpty,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  image: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  year: number;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ArrayNotEmpty()
  artist: Array<string>;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @ArrayNotEmpty()
  genre: Array<string>;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  totalTracks: number;

  @IsString({ each: true })
  @ArrayNotEmpty()
  @IsOptional()
  songs: Array<string>;
}
