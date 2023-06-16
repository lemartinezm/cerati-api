import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Song } from './schemas/song.schema';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}

  async create(createSongDto: CreateSongDto) {
    const song = new this.songModel(createSongDto);
    const newSong = await song.save();
    return {
      success: true,
      message: 'Song created successfully',
      data: newSong,
    };
  }

  findAll() {
    return `This action returns all songs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
