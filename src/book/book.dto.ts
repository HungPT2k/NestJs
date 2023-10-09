import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class BookDto {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  publishedDate: boolean;
}
