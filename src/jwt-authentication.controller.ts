import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService) {
    }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHelloRoot(): Object {
    return {test:'Hello Root World!'};
  }

  @UseGuards(LocalAuthGuard)
  @Post('token')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('keys')
  getkeys(): Object {
    return JSON.parse(process.env.KEYS);
  }

}
