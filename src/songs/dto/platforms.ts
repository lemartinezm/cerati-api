import { IsOptional, IsString, IsUrl } from 'class-validator';

export class Platforms {
  @IsString()
  @IsUrl()
  @IsOptional()
  spotify: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  deezer: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  appleMusic: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  youtubeMusic: string;
}
