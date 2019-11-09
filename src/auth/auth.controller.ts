import { Controller, Request, UseGuards, Post, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('autenticate')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard())
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
