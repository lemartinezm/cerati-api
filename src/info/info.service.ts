import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Info } from './schemas/info.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(Info.name) private infoModel: Model<Info>) {}

  async create(createInfoDto: CreateInfoDto) {
    const createdInfo = new this.infoModel(createInfoDto);
    return await createdInfo.save();
  }

  async findAll() {
    const info = await this.infoModel.findOne().exec();
    return info;
  }

  async update(updateInfoDto: UpdateInfoDto) {
    const infoUpdated = await this.infoModel.findOneAndUpdate(
      {},
      updateInfoDto,
    );

    return {
      success: true,
      message: 'Info updated successfully',
      data: infoUpdated,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} info`;
  }
}
