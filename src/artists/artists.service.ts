import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './schemas/artist.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}
  async create(createArtistDto: CreateArtistDto) {
    const artist = new this.artistModel(createArtistDto);
    const newArtist = await artist.save();
    return {
      success: true,
      message: 'Artist created successfully',
      data: newArtist,
    };
  }

  findAll() {
    return `This action returns all artists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} artist`;
  }

  update(id: number, updateArtistDto: UpdateArtistDto) {
    return `This action updates a #${id} artist`;
  }

  remove(id: number) {
    return `This action removes a #${id} artist`;
  }
}
