var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { Profile } from "../models/profile.model.js";
import { db } from "../dal/db.js";
let ProfileService = class ProfileService {
    async findOneById(id) {
        const result = await db.orm.public.Profile.where({ id }).first();
        return result ? { id: result.id, name: result.name, description: result.description } : undefined;
    }
    async findAll() {
        const result = await db.orm.public.Profile.all();
        return result.map(x => { return { id: x.id, name: x.name, description: x.description }; });
    }
    async findLinks(id) {
        const result = await db.orm.public.Link.where({ profileId: id }).all();
        return result.map(x => { return x.content; });
    }
};
ProfileService = __decorate([
    Injectable()
], ProfileService);
export { ProfileService };
