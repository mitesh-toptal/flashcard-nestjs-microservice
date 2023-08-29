import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ versionKey: false })
export class ShareLink extends AbstractDocument {
  @Prop()
  token: string;
  @Prop()
  flashcardIds: [string];
  @Prop()
  name: string;
}
export const ShareLinkSchema = SchemaFactory.createForClass(ShareLink);
