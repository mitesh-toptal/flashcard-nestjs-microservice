import { Module } from '@nestjs/common';
import { FlashCardsController } from './flash-cards.controller';
import { FlashCardsService } from './flash-cards.service';
import { DatabaseModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { FlashCardRepository } from './flash-cards.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { FlashCard, FlashCardSchema } from './schemas/flashcards.schema';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { AuthModule } from '@app/common/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/flash-cards/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: FlashCard.name, schema: FlashCardSchema },
    ]),
    RmqModule,
    AuthModule,
  ],
  controllers: [FlashCardsController],
  providers: [FlashCardsService, FlashCardRepository],
  exports: [FlashCardRepository],
})
export class FlashCardsModule {}
