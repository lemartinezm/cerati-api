import { IsOptional, IsString, IsUrl } from 'class-validator';

export class Images {
  @IsString()
  @IsUrl()
  @IsOptional()
  cover: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  banner: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  profile: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  avatar: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  background: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  icon: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  logo: string;
}
