import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsesModule } from './entities/users/user.module';

@Module({
  imports: [UsesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
