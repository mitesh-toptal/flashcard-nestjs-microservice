import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ versionKey: false })
export class FlashCard extends AbstractDocument {
  @Prop()
  title: string;
  @Prop()
  question: string;
  @Prop()
  answer: string;
  @Prop()
  name: string;
}
export const FlashCardSchema = SchemaFactory.createForClass(FlashCard);
