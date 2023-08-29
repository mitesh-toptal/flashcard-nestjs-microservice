import { Test, TestingModule } from '@nestjs/testing';
import { ShareLinkController } from './share-link.controller';
import { ShareLinkService } from './share-link.service';

describe('ShareLinkController', () => {
  let shareLinkController: ShareLinkController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShareLinkController],
      providers: [ShareLinkService],
    }).compile();

    shareLinkController = app.get<ShareLinkController>(ShareLinkController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shareLinkController.getHello()).toBe('Hello World!');
    });
  });
});
