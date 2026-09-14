import { Field, ID, ObjectType, ResolveField } from '@nestjs/graphql';
import { Experience } from './experience.model.ts';
import { Skill } from './skill.model.ts';
import { Project } from './project.model.ts';

@ObjectType({ description: 'profile' })
export class Profile {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => [String], { nullable: true })
  links?: string[];

  @Field(() => [Experience], { nullable: true })
  experience?: Experience[];

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];

  @Field(() => [Project])
  projects?: Project[];
}