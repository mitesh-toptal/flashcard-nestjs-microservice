import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { ShareLinkRepository } from './share-link.repository';
import mongoose from 'mongoose';
import { FlashCardRepository } from 'apps/flash-cards/src/flash-cards.repository';

@Injectable()
export class ShareLinkService {
  constructor(
    private readonly shareLinkRepository: ShareLinkRepository, // @InjectModel(FlashCard.name)
    private readonly falshcardRepository: FlashCardRepository, // private readonly flashcardService: FlashCardsService,
  ) {}

  async generateShareLink(userId: any, flashcardId: string): Promise<any> {
    const token = uuidv4(); // Generate a unique token
    const shareLink = await this.shareLinkRepository.create({
      token,
      flashcardIds: [flashcardId],
      userId, // Store the user ID
    });
    const savedShareLink = shareLink;

    // Create a full http:// link using the hostname from your configuration
    const link = `http://localhost:3003/sharelink/${savedShareLink.token}`;

    return { userId, link }; // Return the user ID and generated link
  }

  async getSharedFlashcards(token: string, userId?: string): Promise<any> {
    const shareLink = await this.shareLinkRepository.findOne({ token });
    if (!shareLink) {
      return { message: 'Share link not found' };
    }
    // Check if the authenticated user (if any) matches the user who created the share link
    if (!userId) {
      return { message: 'You do not have permission to view this link.' };
    }
    // Fetch and return flashcard data associated with the link
    const flashcardIds = shareLink.flashcardIds;
    const flashcards = await Promise.all(
      flashcardIds.map(async (flashcardId: any) => {
        // Fetch the flashcard details based on flashcardId
        const filter: any = { _id: new mongoose.Types.ObjectId(flashcardId) };

        const flashcard = await this.falshcardRepository.findOne(filter); // You need to implement this method in FlashcardService
        return flashcard;
      }),
    );
    return flashcards;
  }
}
