import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
