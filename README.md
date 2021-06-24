# FFTL-01-Board ( 기본 게시판 만들기 )

### 개요

제가 javascript를 이용하여 만든 첫 프로젝트입니다. **Vuejs, Nestjs**를 이용한 프로젝트 입니다. 각각 프론트, 백엔드를 담당하고 있으며 Nestjs를 이용해 작성한 rest api로 데이터 통신을 하게됩니다.

### DB 설계

가장 기본이되는 게시판으로 작성자, 제목, 내용, 작성일자만 존재하는 하나의 엔티티로 이루어져 있습니다.

```typescript
//board.entity.ts
id: number;
writer: string;
title: string;
content: string;
regdate: string;
```

TypeORM과 MySQL을 연동하여 DB가 자동으로 생성되도록 하였습니다. `fftl-nest-js01` 의 `ormconfig.json` 파일에 DB연동에 대한 정보가 입력되어 있고 이를 바탕으로 연결되어 entity를 탐색하여 자동으로 생성됩니다. ( DB connection 정보는 테스트 용이기 때문에 공개되어도 별 문제가 없으므로 공개하였습니다. )

### API

```typescript
// Board
@Get() => getAll - 모든 board를 가져옵니다.
@Get('/:id') => getOne - id를 이용하여 board 하나를 가져옵니다.

@Post() => create - board를 생성합니다.

@Put('/:id') => update - id를 이용하여 board 하나를 수정합니다.

@Delete('/:id') => delete - id를 이용하여 board 하나를 삭제합니다.
```

### FrontEnd

Vue.js를 이용하여 개발을 진행하였습니다. BackEnd 개발자가 되고 싶지만 개발을 함에 있어서 제가 사용할 수 있는 FrontEnd 기술도 하나 쯤은 가지고 있어야 좋을 것이라 생각을 했고, 아직 조악한 실력이지만 점차 볼만한 수준의 화면을 꾸밀 정도의 수준이 될 때까지 연습할 예정입니다.

FrontEnd 기술에 대해서 React.js 와 Vue.js에 대하여 어떤 기술을 사용할까 고민을 잠시 했었는데 저 처럼 규모가 크지않고 간단하며 빠르게 만들고 싶은 사람에게는 Vue가 더 좋다는 글들을 보았기에 선택하게 되었습니다.

### 실행방법

~/fftl-vue-js01

```
$ npm run serve
```

~/fftl-nest-js01

```
npm run start:dev
```

</br>

### 사용기술

-   TypeScript, JavaScript
-   Vue.js
-   Nest.js
    -   TypeORM
-   MySQL

### 후기

처음으로 Nestjs를 공부할 때에 Springboot와 유사한 점이 많아서 이점이 있었던 것 같습니다. 또 JPA와 유사한(?) TypeORM도 존재하였기에 더 좋았던 것 같습니다. 다만 Module을 이용하여 의존성을 주입하고 사용하는 방식에 대하여 어려움이 있었으며 조금 더 공부가 필요함을 느끼는 프로젝트였습니다.
