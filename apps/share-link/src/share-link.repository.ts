import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { ShareLink } from './schemas/share-link.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';

@Injectable()
export class ShareLinkRepository extends AbstractRepository<ShareLink> {
  protected readonly logger = new Logger(ShareLinkRepository.name);

  constructor(
    @InjectModel(ShareLink.name) sharelinkModel: Model<ShareLink>,
    @InjectConnection() connection: Connection,
  ) {
    super(sharelinkModel, connection);
  }
}
