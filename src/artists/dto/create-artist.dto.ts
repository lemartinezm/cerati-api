import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Social } from './social';
import { Images } from './images';
import { Type } from 'class-transformer';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Images)
  images: Images;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Social)
  social: Social;
}
