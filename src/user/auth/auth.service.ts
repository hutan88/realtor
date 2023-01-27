import { Injectable, BadRequestException } from '@nestjs/common';
import { SigninInterface, SignupInterface } from '../../interfaces/auth.interface';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(private  prismaService: PrismaService){}
   async signup(body: SignupInterface){

    const {email,password,phone,name}= body;
    const hashed=  await this.hashPassword(password);
   const createdUser= await this.prismaService.user.create({
    data:{
        email, 
        password: hashed,
        phone,
        name,
        user_type:"BUYER"
   }})

   const token = await this.signToken(createdUser.id,createdUser.name);
   return token;
}

async signin(body: SigninInterface)
{
    const { email,password} = body;

    const getUser = await this.prismaService.user.findFirst({
        where:{
        
           email
        }})
    const hashed = await this.comparePassword(password,getUser.password);

        if(getUser && hashed)
        {
            const token = await this.signToken(getUser.id,getUser.name);
            return token;
        
        }

}

async signToken(userId,name)
{
    const token = await jwt.sign({
        name,
        id: userId
       },"fafsasfaf",{
        expiresIn:3600000
       })
       return token;   
}

async hashPassword(password: string)
{
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword;
}

async comparePassword(plainPass,hashed)
{
    const comparePass = bcrypt.compare(plainPass,hashed)
    return comparePass;
}
}
