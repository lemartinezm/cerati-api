import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ISocial } from '../interfaces/social.interface';
import { SocialSchema } from './social.schema';

export type InfoDocument = HydratedDocument<Info>;

@Schema()
export class Info {
  @Prop()
  name: string;

  @Prop()
  bio: string;

  @Prop()
  image: string;

  @Prop({ type: SocialSchema })
  social: ISocial;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
