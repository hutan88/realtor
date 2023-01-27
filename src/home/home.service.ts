import { Injectable } from '@nestjs/common';
import { HomeDto } from 'src/dto/home.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HomeService {
constructor(private readonly prismaService: PrismaService){}

    async getAll(): Promise<HomeDto[]>
    {
        const getAllHome =await this.prismaService.home.findMany();
        return getAllHome.map(home=> new HomeDto(home));
    }

    async getOne()
    {
        
    }

    async create()
    {
        
    }

    async update()
    {
        
    }

    async delete()
    {
        
    }
}
