import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ISocial } from '../interfaces/social.interface';

@Schema()
export class Social implements ISocial {
  @Prop()
  facebook: string;
  @Prop()
  instagram: string;
  @Prop()
  twitter: string;
  @Prop()
  spotify: string;
  @Prop()
  appleMusic: string;
  @Prop()
  deezer: string;
}

export const SocialSchema = SchemaFactory.createForClass(Social);
