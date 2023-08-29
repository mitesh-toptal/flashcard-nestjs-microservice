import { Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ShareLinkService } from './share-link.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('sharelink')
export class ShareLinkController {
  constructor(private readonly shareLinkService: ShareLinkService) {}

  @Post('generate')
  @MessagePattern('validate_user')
  async create(@Request() req) {
    return this.shareLinkService.generateShareLink(
      req.body.userId,
      req.body.flashcardId,
    );
  }
  @Get(':token')
  @MessagePattern('validate_user')
  async getSharedFlashcards(@Param('token') token: string, @Request() req) {
    console.log('req.user: ', req.body);
    const userId = req.body.userId;
    return this.shareLinkService.getSharedFlashcards(token, userId);
  }
}
