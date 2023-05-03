import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardController } from './board/board.controller';
import { BoardModule } from './board/board.module';
import { BoardService } from './board/board.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [BoardModule],
  controllers: [AppController, BoardController],
  providers: [AppService, BoardService],
})
export class AppModule {}
