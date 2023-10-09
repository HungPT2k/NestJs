// import { Inject } from '@nestjs/mongoose';
import { Book, BookDocument } from './book.model';
import { Model } from 'mongoose';
import { HttpException, Inject, HttpStatus, Injectable } from '@nestjs/common';
import { BookInput } from './book.input';
@Injectable()
export class BookService {
  constructor(@Inject('BOOK_MODEL') private bookModel: Model<BookDocument>) {}

  async findAll(): Promise<Book[]> {
    const listBook = await this.bookModel.find().exec();
    return listBook;
  }

  async findOne(id: string): Promise<Book> {
    const findBook = await this.bookModel.findById({ id });
    if (findBook) {
      return findBook;
    }
    throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
  }

  async create1(input: BookInput): Promise<Book> {
    console.log(input);
    const listBook = await this.bookModel.create(input);

    console.log(listBook);
    return listBook;

    // try {
    //   const listBook = await this.bookModel.create(input);
    //   console.log(listBook);
    //   return listBook;
    // } catch (error) {
    //   console.error('Lỗi khi tạo bản ghi :', error);
    //   throw error; // Ném lỗi để xử lý ở phần gọi hàm.
    // }
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
