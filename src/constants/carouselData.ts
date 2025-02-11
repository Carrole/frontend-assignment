export type CarouselDataType = {
  title: string;
  isActive: boolean;
  period: string;
  image: string;
  link: string;
};

export const CarouselData: CarouselDataType[] = [
  {
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표 진행 중',
    isActive: true,
    period: '2024.01 - 2024.06',
    image: '/images/mcountdown.png',
    link: 'https://poc.mnetplus.world/mcountdown/ko/play',
  },
  {
    title: 'title 2',
    isActive: true,
    period: '2023.11 - 2024.05',
    image: '/images/item.jpg',
    link: 'https://poc.mnetplus.world/mcountdown/ko/play',
  },
  {
    title: 'title 3',
    isActive: false,
    period: '2023.05 - 2023.10',
    image: '/images/mcountdown.png',
    link: 'https://poc.mnetplus.world/mcountdown/ko/play',
  },
  {
    title: 'title 4',
    isActive: false,
    period: '2022.12 - 2023.04',
    image: '/images/item.jpg',
    link: 'https://poc.mnetplus.world/mcountdown/ko/play',
  },
  {
    title: 'title 5',
    isActive: true,
    period: '2024.02 - 2024.07',
    image: '/images/mcountdown.png',
    link: 'https://poc.mnetplus.world/mcountdown/ko/play',
  },
];
