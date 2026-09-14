import { NotFoundException } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Profile } from '../../models/profile.model.ts';
import { ProfileService } from '../../services/profile.service.ts';
import type { Skill } from '../../models/skill.model.ts';
import { SkillService } from '../../services/skill.service.ts';
import { ProjectService } from '../../services/project.service.ts';
import type { Project } from '../../models/project.model.ts';
import { ExperienceService } from '../../services/experience.service.ts';
import type { Experience } from '../../models/experience.model.ts';


@Resolver(() => Profile)
export class ProfileResolver {
  constructor(
    private readonly profilesService: ProfileService,
    private readonly skillService: SkillService,
    private readonly projectService: ProjectService,
    private readonly experienceService: ExperienceService) { }

  @Query(() => Profile)
  async profile(@Args('id') id: string): Promise<Profile> {
    const profile = await this.profilesService.findOneById(id);
    if (!profile) {
      throw new NotFoundException(id);
    }
    return profile;
  }

  @Query(() => [Profile])
  profiles(): Promise<Profile[]> {
    return this.profilesService.findAll();
  }

  @ResolveField()
  async links(@Parent() profile: Profile): Promise<string[]> {
    const { id } = profile;
    return await this.profilesService.findLinks(id);
  }

  @ResolveField()
  async skills(@Parent() profile: Profile): Promise<Skill[]> {
    const { id } = profile;
    return await this.skillService.findForProfile(id);
  }

  @ResolveField()
  async projects(@Parent() profile: Profile): Promise<Project[]> {
    const { id } = profile;
    return await this.projectService.findForProfile(id);
  }

  @ResolveField()
  async experience(@Parent() profile: Profile): Promise<Experience[]> {
    const { id } = profile;
    return await this.experienceService.findForProfile(id);
  }
}