import { Injectable } from '@nestjs/common';
import { HomeDto } from 'src/dto/home.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll(): Promise<HomeDto[]> {
    const  getAllHome =  await this.prismaService.home.findMany(
      {
        select:{
          id: true,
          address: true,
          city: true,
          land_size: true,
          number_of_bathrooms: true,
          number_of_bedrooms: true,
          listed_date: true,
          price: true,
          property_type: true,
          images:{
            select:{
              id: true,
              url: true
            },
            take: 1
          }
        }
      }
    );
  return getAllHome.map(home=> 
    {
      const fetcHome = {...home,image: home.images[0].url}
      delete fetcHome.images;
       return new HomeDto(fetcHome)
    });
    };
  async getOne() {}

  async create() {}

  async update() {}

  async delete() {}
}
