import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { FlashCard } from './schemas/flashcards.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

@Injectable()
export class FlashCardRepository extends AbstractRepository<FlashCard> {
  protected readonly logger = new Logger(FlashCardRepository.name);

  constructor(
    @InjectModel(FlashCard.name) flashcardModel: Model<FlashCard>,
    @InjectConnection() connection: Connection,
  ) {
    super(flashcardModel, connection);
  }
}
