import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//inputype이 스키마에 포함되지 않길 원함
//isAbstract 을 쓰면 어디선가 복사해옴, 직접 쓰는게 아닌 확장개념
@InputType({ isAbstract: true }) //Omityupe
@ObjectType() // graphql
@Entity() // typeorm
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((type) => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field((type) => Boolean, { nullable: true, defaultValue: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan: boolean;

  @Field((type) => String, { defaultValue: 'no address here' })
  @Column()
  @IsString()
  address: string;
}
