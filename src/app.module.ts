import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'node:path';
import { FruitModule } from './api/fruit/fruit.module';

@Module({
  imports: [
    FruitModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URI_DB),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schemas/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
