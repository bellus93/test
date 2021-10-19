import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    AdminModule,
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
    ]),

    PublicModule,
    RouterModule.register([
      {
        path: 'public',
        module: PublicModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
