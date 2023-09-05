import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Images } from '../dto/images';
import { Social } from '../dto/social';

@Schema()
export class Artist {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Images })
  images: Images;

  @Prop({ type: Social })
  social: Social;
}

export const ArtistSchema = SchemaFactory.createForClass(Artist);
