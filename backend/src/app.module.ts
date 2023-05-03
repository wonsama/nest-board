import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'board1!',
      database: 'board',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
