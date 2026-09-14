import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'experience' })
export class Experience {

  @Field(() => String)
  company!: string;

  @Field(() => String)
  position!: string;

  @Field(() => String)
  from!: string;

  @Field(() => String, { nullable: true })
  to?: string;

  @Field(() => String)
  achievements!: string;
}