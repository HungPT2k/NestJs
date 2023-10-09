import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { Module } from '@nestjs/common';
import { BookProvider } from './book.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [BookService, BookResolver, ...BookProvider],
})
export class BookModule {}
