import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateuserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;
  @IsOptional()
  @IsString()
  @MaxLength(32)
  displayName?: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
