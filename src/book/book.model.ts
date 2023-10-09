import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@ObjectType()
@Schema()
export class Book {
  @Prop({ type: String, required: true })
  title: string;
  @Prop({ type: String, required: true })
  author: string;
  @Prop({ type: Boolean, required: true })
  publishedDate: boolean;
}
export const BookSchema = SchemaFactory.createForClass(Book);

export type BookDocument = Book & Document;
