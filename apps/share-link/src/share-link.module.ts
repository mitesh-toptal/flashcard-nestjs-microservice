import { DatabaseModule } from '@app/common';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'apps/auth/src/auth.module';
import * as Joi from 'joi';
import { ShareLinkController } from './share-link.controller';
import { ShareLinkService } from './share-link.service';
import { ShareLinkSchema } from './schemas/share-link.schema';
import { ShareLinkRepository } from './share-link.repository';
import { FlashCardRepository } from '../../flash-cards/src/flash-cards.repository';
import {
  FlashCard,
  FlashCardSchema,
} from 'apps/flash-cards/src/schemas/flashcards.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/share-link/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: 'ShareLink', schema: ShareLinkSchema },
      { name: FlashCard.name, schema: FlashCardSchema },
    ]),
    RmqModule,
    AuthModule,
  ],
  controllers: [ShareLinkController],
  providers: [ShareLinkService, ShareLinkRepository, FlashCardRepository],
})
export class ShareLinkModule {}
