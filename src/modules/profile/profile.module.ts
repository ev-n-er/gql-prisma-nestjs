import { Module } from '@nestjs/common';
import { ProfileResolver } from './profile.resolver.ts';
import { ProfileService } from '../../services/profile.service.ts';
import { SkillService } from '../../services/skill.service.ts';
import { ProjectService } from '../../services/project.service.ts';
import { ExperienceService } from '../../services/experience.service.ts';

@Module({
  providers: [ProfileResolver, ProfileService, SkillService, ProjectService, ExperienceService],
})
export class ProfileModule {}