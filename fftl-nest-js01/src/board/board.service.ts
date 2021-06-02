import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDTO } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entites/board.entity';

@Injectable()
export class BoardService {
    
    constructor(
        @InjectRepository(Board)
        private readonly boardRepository: Repository<Board>
    ){}

    //전체 목록 조회
    async getAll(): Promise<Board[]>{
        return await this.boardRepository.find();
    }

    //아이디를 통한 단일 목록 조회
    async getOne(id: number): Promise<Board>{
        return await this.boardRepository.findOne(+id);
    }

    //board 생성하기
    async create(boardData: CreateBoardDTO){
        return await this.boardRepository.save(boardData);
    }

    //board 수정하기, id같이 숫자값은 http 통신을 통할 때 문자로 바뀌게 되니까 숫자로 변경해줘야 합니다.
    async update(boardId: number, boardData: UpdateBoardDto){
        return await this.boardRepository.save({...boardData, id:+boardId});
    }

    //board 삭제하기
    async delete(boardId: number){
        return await this.boardRepository.delete(+boardId);
    }


}
