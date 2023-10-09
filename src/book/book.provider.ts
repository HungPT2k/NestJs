import { Mongoose } from 'mongoose';
import { BookSchema } from './book.model';
export const BookProvider = [
  {
    provide: 'BOOK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Book', BookSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
