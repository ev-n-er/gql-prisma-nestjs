import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { ProfileModule } from './modules/profile/profile.module.ts';

@Module({
  imports: [
    ProfileModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      graphiql: true,
    }),
  ],
})

export class AppModule {}
