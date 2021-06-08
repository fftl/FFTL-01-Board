import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDTO } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDTO) {}
