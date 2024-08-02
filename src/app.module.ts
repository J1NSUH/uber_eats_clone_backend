import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
//Typescript나 NestJS로 되어 있지 않은 패키지를 import하는 방법
import * as Joi from 'joi';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      //우리 애플리케이션의 어디서나 config 모듈에 접근할 수 있음
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      //서버에 deploy 할 때 환경변수 파일을 사용하지 않는다
      //production 환경일 때는 ConfigModule이 환경변수 파일을 무시함
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      //환경 변수 유효성 검사
      validationSchema: Joi.object({
        //여기에서 값을 'cookies'로 바꾸면, "NODE_ENV must be [cookies]" 라는 에러가 뜬다
        NODE_ENV: Joi.string().valid('dev', 'prod').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      //typeORM이 데이터 베이스에 연결할 때 데이터베이스를 나의 모듈의 현재 상태로 마이그래이션한다는 뜻
      host: process.env.DB_HOST,
      //+를 붙이면 string을 숫자로 바꿔줌
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      //TypeORM이 Entity를 찾고 알아서 migration 해줌
      synchronize: process.env.NODE_ENV !== 'prod',
      //데이터베이스에서 무슨 일이 일어나는지 콘솔에 표시
      logging: true,
      // [Restaurant]이 DB가 됨
      entities: [User],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true /*join(process.cwd(), 'src/schema.gql')*/,
    }),

    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
