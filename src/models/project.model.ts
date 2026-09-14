import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'project' })
export class Project {

  @Field(() => String)
  name!: string;

  @Field(() => String, { nullable: true })
  link?: string;
}