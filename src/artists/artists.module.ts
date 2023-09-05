import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistSchema } from './schemas/artist.schema';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Artist', schema: ArtistSchema }]),
  ],
})
export class ArtistsModule {}
