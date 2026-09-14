import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'skill' })
export class Skill {

  @Field(() => String)
  name!: string;
}