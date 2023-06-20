import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from './schemas/album.schema';

@Injectable()
export class AlbumsService {
  constructor(@InjectModel(Album.name) private albumModel: Model<Album>) {}

  async create(createAlbumDto: CreateAlbumDto) {
    const newAlbum = new this.albumModel(createAlbumDto);
    const albumCreated = await newAlbum.save();
    return {
      success: true,
      message: 'Album created successfully',
      data: albumCreated,
    };
  }

  async findAll() {
    const allAlbums = await this.albumModel.find();
    return {
      success: true,
      data: allAlbums,
    };
  }

  async findOne(id: string) {
    const album = await this.albumModel.findById(id);
    if (!album)
      throw new NotFoundException({
        success: false,
        message: 'Album not found',
      });

    return {
      success: true,
      data: album,
    };
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
