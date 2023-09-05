import { IsOptional, IsString, IsUrl } from 'class-validator';

export class Social {
  @IsString()
  @IsUrl()
  @IsOptional()
  facebook: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  instagram: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  twitter: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  youtube: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  spotify: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  soundcloud: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  appleMusic: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  deezer: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  amazonMusic: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  googlePlay: string;
}
