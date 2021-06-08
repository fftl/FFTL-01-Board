export class CreateBoardDTO {
  //받아야 하는 항목들을 입력해 줍니다.
  //readonly를 적어 읽기 전용임을 선언해줍니다.
  readonly writer: string;

  readonly title: string;

  readonly content: string;

  readonly regdate: string;
}
