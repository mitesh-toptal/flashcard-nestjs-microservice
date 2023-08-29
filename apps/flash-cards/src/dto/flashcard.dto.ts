import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFlashcardDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsString()
  @IsNotEmpty()
  name: string;
  id: string;
}

export class GenerateShareLinkDto {
  @IsNotEmpty()
  @IsString()
  flashcardId: string;
}
