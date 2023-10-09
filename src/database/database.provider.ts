import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      // const url: string = config.mongo.uri;

      return await mongoose.connect(
        'mongodb://mongodb:69sJyZmENXQd@103.20.144.71/?authMechanism=DEFAULT',
        { dbName: 'test1' },
      );
    },
  },
];
