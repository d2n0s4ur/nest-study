import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
