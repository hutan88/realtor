import { UserType } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Matches,
  MinLength,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @Matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  password: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  productKey?: string;
}

export class SigninDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  password: string;
}

export class GenerateProductKeyDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsEnum(UserType)
  userType: UserType;
}
