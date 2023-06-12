import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Info } from './schemas/info.schema';
import { Model } from 'mongoose';

@Injectable()
export class InfoService {
  constructor(@InjectModel(Info.name) private infoModel: Model<Info>) {}

  create(createInfoDto: CreateInfoDto) {
    const createdInfo = new this.infoModel(createInfoDto);
    return createdInfo.save();
  }

  findAll() {
    return `This action returns all info`;
  }

  findOne(id: number) {
    return `This action returns a #${id} info`;
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    return `This action updates a #${id} info`;
  }

  remove(id: number) {
    return `This action removes a #${id} info`;
  }
}
