import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoModule } from './info/info.module';
import { AlbumsModule } from './albums/albums.module';
import { SongsModule } from './songs/songs.module';
import { EventsModule } from './events/events.module';
import { LyricsModule } from './lyrics/lyrics.module';

@Module({
  imports: [InfoModule, SongsModule, AlbumsModule, EventsModule, LyricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
