import { Controller, Get } from '@nestjs/common';

import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Get()
  getAllBoards(): string {
    return this.boardService.AllBoards();
  }
}
