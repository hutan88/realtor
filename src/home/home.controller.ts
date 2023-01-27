import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { HomeDto } from 'src/dto/home.dto';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getAll(): Promise<HomeDto[]> {
    return this.homeService.getAll();
  }

  @Get(':id')
  getOne() {
    return 'home by id';
  }

  @Post()
  create() {
    return 'create home';
  }

  @Put(':id')
  update() {
    return 'update home';
  }

  @Delete(':id')
  delete() {
    return 'delete home';
  }
}
