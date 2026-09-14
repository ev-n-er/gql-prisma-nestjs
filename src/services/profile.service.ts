import { Injectable } from '@nestjs/common';
import { Profile } from '../models/profile.model.ts';
import { db } from '../dal/db.ts';

@Injectable()
export class ProfileService {

  async findOneById(id: string): Promise<Profile | undefined> {

    const result = await db.orm.public.Profile.where({ id }).first();
    return result ? { id: result.id, name: result.name, description: result.description } : undefined;
  }

  async findAll(): Promise<Profile[]> {
    const result = await db.orm.public.Profile.all();

    return result.map(x => { return { id: x.id, name: x.name, description: x.description } });
  }

  async findLinks(id: string): Promise<string[]> {
    const result = await db.orm.public.Link.where({ profileId: id }).all();

    return result.map(x => { return x.content; });
  }
}