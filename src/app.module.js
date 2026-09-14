var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { join } from "path";
import { Module } from "@nestjs/common";
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProfileModule } from "./modules/profile/profile.module.js";
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ProfileModule,
            GraphQLModule.forRoot({
                driver: ApolloDriver,
                autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
                graphiql: false,
                plugins: [ApolloServerPluginLandingPageLocalDefault()],
            }),
        ],
    })
], AppModule);
export { AppModule };
