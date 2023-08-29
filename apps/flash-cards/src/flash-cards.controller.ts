import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { FlashCardsService } from './flash-cards.service';
import { CreateFlashcardDto } from './dto/flashcard.dto';
import mongoose from 'mongoose';
import { MessagePattern } from '@nestjs/microservices';

@Controller('flash-cards')
export class FlashCardsController {
  constructor(private readonly flashCardsService: FlashCardsService) {}

  @Post()
  @MessagePattern('validate_user')
  async create(@Request() req) {
    console.log('req: ', req);
    return this.flashCardsService.create(req.body);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createFlashcardDto: CreateFlashcardDto,
  ) {
    const filter: any = { _id: new mongoose.Types.ObjectId(id) };
    return this.flashCardsService.update(filter, createFlashcardDto);
  }

  @Get(':id')
  @MessagePattern('validate_user')
  async findById(@Param('id') id: string) {
    const filter: any = { _id: new mongoose.Types.ObjectId(id) };
    return this.flashCardsService.find(filter);
  }
  @Delete(':id')
  @MessagePattern('validate_user')
  async delete(@Param('id') id: string) {
    const filter: any = { _id: new mongoose.Types.ObjectId(id) };
    return this.flashCardsService.find(filter);
  }
}
