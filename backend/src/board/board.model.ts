export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 공개글, 비공개글의 상태를 결정하는 필드
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export class CreateBoardDto {
  title: string;
  description: string;
}
