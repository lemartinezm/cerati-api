import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  year: number;

  @Prop()
  artist: Array<string>;

  @Prop()
  genre: Array<string>;

  @Prop()
  totalTracks: number;

  @Prop()
  songs: Array<string>;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
