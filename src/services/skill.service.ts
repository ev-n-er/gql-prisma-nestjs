import { Injectable } from '@nestjs/common';
import { db } from '../dal/db.ts';
import type { Skill } from '../models/skill.model.ts';

@Injectable()
export class SkillService {

  async findForProfile(id: string): Promise<Skill[]> {
    const result = await db.orm.public.Skill.where({ profileId: id }).all();

    return result.map(x => { return { name: x.content } });
  }
}