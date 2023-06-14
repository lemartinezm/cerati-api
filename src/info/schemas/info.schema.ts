import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Social } from '../dto/create-info.dto';

export type InfoDocument = HydratedDocument<Info>;

@Schema()
export class Info {
  @Prop()
  name: string;

  @Prop()
  bio: string;

  @Prop()
  image: string;

  @Prop({ type: Social })
  social: Social;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
