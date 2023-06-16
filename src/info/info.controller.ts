import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createInfoDto: CreateInfoDto) {
    return this.infoService.create(createInfoDto);
  }

  @Get()
  findAll() {
    return this.infoService.findAll();
  }

  @Patch()
  @UsePipes(new ValidationPipe())
  update(@Body() updateInfoDto: UpdateInfoDto) {
    return this.infoService.update(updateInfoDto);
  }
}
