import { Injectable, BadRequestException } from '@nestjs/common';
import { SignupInterface } from '../../interfaces/auth.interface';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private  prismaService: PrismaService){}
   async signup(body: SignupInterface){

    const {email,password,phone,name}= body;
    const hashed=  await this.hashPassword(password);
    console.log(hashed);
   const createdUser= await this.prismaService.user.create({
    data:{
        email, 
        password: hashed,
        phone,
        name,
        user_type:"BUYER"
   }})

   const token = await jwt.sign({
    name,
    id: createdUser.id
   },"fafsasfaf",{
    expiresIn:3600000
   })
   return token;
}

async hashPassword(password)
{
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword;
}
}
