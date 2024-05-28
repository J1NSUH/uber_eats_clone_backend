import { Module } from '@nestjs/common';
import { RestaurantResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantService } from './restaurants.service';
@Module({
  // TypeOrmModule.forRoot는 애플리케이션 전체에서 사용할 데이터베이스 연결을 설정합니다.
  // TypeOrmModule.forFeature는 특정 모듈에서 사용할 엔티티 리포지토리를 설정합니다. (특정 feature를 import할 수 있게 해줌)
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantsModule {}
