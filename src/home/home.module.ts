import { Module } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@nestjs/common/serializer';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  imports:[PrismaModule],
  controllers: [HomeController],
  providers: [HomeService,{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }]
})
export class HomeModule {}
