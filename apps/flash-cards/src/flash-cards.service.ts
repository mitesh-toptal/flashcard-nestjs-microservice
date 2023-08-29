import { Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/flashcard.dto';
import { FlashCardRepository } from './flash-cards.repository';
import { FlashCard } from './schemas/flashcards.schema';

@Injectable()
export class FlashCardsService {
  constructor(
    private readonly falshcardRepository: FlashCardRepository, // @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}
  async create(createFlashcardDto: CreateFlashcardDto) {
    const newFlashcard = this.falshcardRepository.create(createFlashcardDto);
    return newFlashcard;
  }
  async update(id: FlashCard, createFlashcardDto: CreateFlashcardDto) {
    const newFlashcard = this.falshcardRepository.findOneAndUpdate(
      id,
      createFlashcardDto,
    );
    return newFlashcard;
  }
  async find(createFlashcardDto: CreateFlashcardDto) {
    const newFlashcard = this.falshcardRepository.find(createFlashcardDto);
    return newFlashcard;
  }
  async findOne(id: any) {
    return this.falshcardRepository.findOne({ id });
  }
  async delete(createFlashcardDto: CreateFlashcardDto) {
    const newFlashcard = this.falshcardRepository.find(createFlashcardDto);
    return newFlashcard;
  }
}
