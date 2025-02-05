import { Controller, Get, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  login(@Body() loginDto: LoginDto){
    return this.loginService.login(loginDto);
  }
}
