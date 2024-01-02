export interface WorkList {
  item: string;
}

export interface ExperienData {
  id: number;
  name: string;
  link?: string;
  position: string;
  workList: WorkList[];
  date: string;
  fileName: string;
}

export const data: ExperienData[] = [
  {
    id: 0,
    name: "Ipageon",
    position: "Front-End (프리랜서)",
    workList: [
      {
        item: "디자인 시스템 구현",
      },
      {
        item: "레거시 코드 리팩토링",
      },
      {
        item: "실시간 웹 소켓 통신",
      },
      {
        item: "기존 EMS 화면 리뉴얼",
      },
      {
        item: "기술 스택: React-Query, Typescript, Recoil, StompJS, Styled-Component",
      },
    ],
    date: "2022.11 - 2023.12 | 서울시 강남구",
    fileName: "ipageon_240102.pdf",
  },
  {
    id: 1,
    name: "JEBS",
    position: "Front-End (프리랜서)",
    workList: [
      {
        item: "디자인 시스템 구현",
      },
      {
        item: "4단 반응형 페이지 퍼블리싱",
      },
      {
        item: "프론트엔드 개발",
      },
      {
        item: "기술 스택: NextJS, URQL, Typescript, xStyled, Mantine",
      },
    ],
    date: "2022.08 - 2022.10 | 서울시 강남구",
    fileName: "jebs.pdf",
  },
  {
    id: 2,
    name: "ARTIZEN",
    position: "Front-End (프리랜서)",
    workList: [
      {
        item: "NFT 마켓 플레이스 클라이언트 개발",
      },
      {
        item: "NFT 마켓 플레이스 관리자 페이지 개발",
      },
      {
        item: "기술 스택: NextJS, React-Query, Typescript, Emotion-Js, React-Admin",
      },
    ],
    date: "2022.05 - 2022.07 | 서울시 강남구",
    fileName: "artizen_v2.pdf",
  },
  {
    id: 3,
    name: "PEACHY",
    position: "Front-End",
    workList: [
      {
        item: "필라테스 회원 관리 솔루션 사이트 개발(React)",
      },
      {
        item: "어드민 초기 구축 (React-Typescript)",
      },
      {
        item: "Typescript Migration (Javascript -> Typescript)",
      },
      {
        item: "기술 스택: React-Query, Typescript, Emotion-Js",
      },
    ],
    date: "2021.12 - 2022.04 | 서울시 강남구",
    fileName: "peachy_v3.pdf",
  },
  {
    id: 4,
    name: "SPECUP AD",
    link: "https://specupad.com",
    position: "Front-End",
    workList: [
      {
        item: "관리자 페이지 클라이언트 개발 (React-Admin)",
      },
      {
        item: "기존 클라이언트 화면단 리뉴얼 (Django -> React)",
      },
      {
        item: "기술 스택: Next.js, React-Admin, Apollo-Client, Typescript, React-Hook-Form, GraphQL Code Generator, Material-UI",
      },
    ],
    date: "2019.08 - 2021.11 | 서울시 강남구",
    fileName: "specupad_v3.pdf",
  },
  {
    id: 5,
    name: "Neural BC",
    // link: 'http://www.neuralbc.com',
    position: "Front-End",
    workList: [
      {
        item: "자사 홈페이지 클라이언트 개발",
      },
      {
        item: "기술 스택: React, Styled-Components, React-Redux, Redux-Saga",
      },
    ],
    date: "2018.10 - 2019.04 | 서울시 강남구",
    fileName: "neuralbc_v2.pdf",
  },
  {
    id: 6,
    name: "Starship Vending-machine",
    // link: 'https://www.insertcoin.me',
    position: "Publisher",
    workList: [
      {
        item: "이벤트 페이지 퍼블리싱",
      },
      {
        item: "라이브 퀴즈쇼 문제 세팅 화면단 퍼블리싱",
      },
      {
        item: "기술 스택: HTML, JS, jQuery, CSS",
      },
    ],
    date: "2018.04 - 2018.08 | 서울시 마포구",
    fileName: "starship.pdf",
  },
  {
    id: 7,
    name: "Reconers",
    link: "https://www.reconers.com",
    position: "Publisher",
    workList: [
      {
        item: "정적 페이지 퍼블리싱",
      },
      {
        item: "기술 스택: HTML, JS, jQuery, CSS",
      },
    ],
    date: "2017.02 - 2017.09 | 서울시 강남구",
    fileName: "reconers.pdf",
  },
];
