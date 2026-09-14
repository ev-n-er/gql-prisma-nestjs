import { Injectable } from '@nestjs/common';
import { db } from '../dal/db.ts';
import type { Experience } from '../models/experience.model.ts';

@Injectable()
export class ExperienceService {

  async findForProfile(id: string): Promise<Experience[]> {
    const result = await db.orm.public.Workplace
      .where({ profileId: id })
      .orderBy((x) => x.from.asc())
      .all();

    return result.map(x => {
      return {
        company: x.name,
        position: x.role,
        from: x.from.toString(), to: x.to?.toString() ?? undefined,
        achievements: x.achievements
      }
    });
  }
}