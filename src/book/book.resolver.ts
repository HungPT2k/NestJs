import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.model';
import { BookService } from './book.service';
import { BookInput } from './book.input';
import { BookDto } from './book.dto';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [BookDto])
  async getListBook(): Promise<BookDto[]> {
    return this.bookService.findAll();
  }

  @Query(() => String)
  async helloWorld() {
    return 'hello, world';
  }

  @Query(() => BookDto)
  async getOneBook(id: string): Promise<BookDto> {
    return this.bookService.findOne(id);
  }
  @Mutation(() => Book)
  async createBook(@Args('input') input: BookInput): Promise<BookInput> {
    return this.bookService.create1(input);
  }

  // @Mutation(() => Book)
  // async updateBook(
  //   @Args('id', { type: () => ID }) id: string,
  //   @Args('input') input: BookInput,
  // ): Promise<Book> {
  //   return this.bookService.update(id, input);
  // }

  // @Mutation(() => Book)
  // async deleteBook(@Args('id', { type: () => ID }) id: string): Promise<Book> {
  //   return this.bookService.delete(id);
  // }
}
