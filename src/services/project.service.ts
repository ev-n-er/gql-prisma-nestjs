import { Injectable } from '@nestjs/common';
import { db } from '../dal/db.ts';
import type { Project } from '../models/project.model.ts';

@Injectable()
export class ProjectService {

  async findForProfile(id: string): Promise<Project[]> {
    const result = await db.orm.public.Project.where({ profileId: id }).all();

    return result.map(x => { return {name: x.name, link: x.link ?? undefined } });
  }
}