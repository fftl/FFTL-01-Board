import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entites/board.entity';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') boardId: number): Promise<Board> {
    return this.boardService.getOne(boardId);
  }

  @Post()
  create(@Body() boardData: CreateBoardDTO) {
    return this.boardService.create(boardData);
  }

  @Put('/:id')
  update(@Param('id') boardId: number, @Body() bordData: UpdateBoardDto) {
    return this.boardService.update(boardId, bordData);
  }

  @Delete('/:id')
  delete(@Param('id') boardId: number) {
    return this, this.boardService.delete(boardId);
  }
}
