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

  async findAll() {
    const songs = await this.songModel.find();
    return {
      success: true,
      data: songs,
    };
  }

  async findOne(id: string) {
    const song = await this.songModel.findById(id);
    return {
      success: true,
      data: song,
    };
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    const song = await this.songModel.findByIdAndUpdate(id, updateSongDto);
    return {
      success: true,
      message: 'Song updated successfully',
      data: song,
    };
  }

  async remove(id: string) {
    const song = await this.songModel.findByIdAndDelete(id);
    return {
      success: true,
      message: 'Song deleted successfully',
      data: song,
    };
  }
}
