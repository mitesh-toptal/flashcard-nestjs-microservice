import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common/rmq/rmq.service';
import { ShareLinkModule } from './share-link.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ShareLinkModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('SHARELINK', true));
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));
}
bootstrap();
