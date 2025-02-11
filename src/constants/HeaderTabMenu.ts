import { TabProps } from '@/components/common/Tabs';

export enum HeaderTabMenu {
  Chart = 'chart',
  Whook = 'whook',
  Event = 'event',
  News = 'news',
  Store = 'store',
  Recharge = 'recharge',
}

export const headerTabMenuArr: HeaderTabMenu[] = [
  HeaderTabMenu.Chart,
  HeaderTabMenu.Whook,
  HeaderTabMenu.Event,
  HeaderTabMenu.News,
  HeaderTabMenu.Store,
  HeaderTabMenu.Recharge,
];

export const headerTabList: TabProps<HeaderTabMenu>[] = [
  { key: HeaderTabMenu.Chart, label: '차트' },
  { key: HeaderTabMenu.Whook, label: 'Whook' },
  { key: HeaderTabMenu.Event, label: '이벤트' },
  { key: HeaderTabMenu.News, label: '뉴스' },
  { key: HeaderTabMenu.Store, label: '스토어' },
  { key: HeaderTabMenu.Recharge, label: '충전소' },
];
