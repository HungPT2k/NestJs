import { InputType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import {} from 'mongoose';
@InputType()
export class BookInput {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  publishedDate: boolean;
}
