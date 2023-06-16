import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Platforms } from '../dto/platforms';

@Schema()
export class Song {
  @Prop()
  name: string;

  @Prop()
  album: string;

  @Prop()
  lyrics: string;

  @Prop()
  duration: number;

  @Prop()
  genre: Array<string>;

  @Prop()
  artists: Array<string>;

  @Prop({ type: Platforms })
  platforms: Platforms;

  @Prop()
  videoUrl: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
