import { Body, Controller, Param, ParseEnumPipe, Post } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { UserType } from '@prisma/client';
import { GenerateProductKeyDto, SigninDto, SignupDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup/:userType')
  async signup(@Body() body: SignupDto,@Param('userType',new ParseEnumPipe(UserType)) userType: UserType) {

    if(userType !== UserType.BUYER)
    {
        if(!body.productKey)
        {
          throw new UnauthorizedException();
        }
        const validateProductKey = `${body.email}-${userType}-${process.env.PRODUCT_KEY_SECRET}`;
        const isValidateProductKey = await bcrypt.compare(validateProductKey,body.productKey);
        if(!isValidateProductKey)
        {
          throw new UnauthorizedException();
        }
    }

    return this.authService.signup(body,userType);
  }

  @Post('signin')
  signin(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }

  @Post('/key')
  generateProductKey(@Body() { email, userType }: GenerateProductKeyDto) {
    return this.authService.generateProductKey(email, userType);
  }
}
