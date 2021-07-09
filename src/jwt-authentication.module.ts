import { Module } from '@nestjs/common';
import { AppController } from './jwt-authentication.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
})
export class JwtAuthenticationModule {}
