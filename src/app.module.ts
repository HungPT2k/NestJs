import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import mongodbConfig from './config/mongodb.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
// import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { BookModule } from './book/book.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    BookModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [mongodbConfig],
      isGlobal: true,
    }),
    NestGraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: join(process.cwd(), 'src/config/schema.gql'),
        installSubscriptionHandlers: true,
        sortSchema: true,
        playground: true,
        debug: configService.get<boolean>('DEBUG'),
        uploads: false,
      }),
    }),
    // MongooseModule.forRoot(
    //   'mongodb://mongodb:69sJyZmENXQd@103.20.144.71/?authMechanism=DEFAULT',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
