import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule, AuthModule, UsersModule],
  providers: [AppService],
})
export class AppModule {}
