import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  AllBoards(): string {
    return 'AllBoards return';
  }
}
