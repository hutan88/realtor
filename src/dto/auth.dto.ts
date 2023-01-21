import { IsString, IsNotEmpty, IsEmail } from "class-validator";
import { Matches, MinLength } from "class-validator/types/decorator/decorators";

export class Auth{
    
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
}