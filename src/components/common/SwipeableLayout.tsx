'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';
import {
  headerTabList,
  headerTabMenuArr,
  HeaderTabMenu,
} from '@/constants/HeaderTabMenu';
import { Tabs } from '@/components/common/Tabs';
import { useRef } from 'react';
import { TopButton } from '@/components/common/TopButton';

export default function SwipeableLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const currentTab =
    headerTabList.find((tab) => `/${tab.key}` === pathname) || headerTabList[0];

  const handleTabChange = (newTab: HeaderTabMenu) => {
    router.push(`/${newTab}`);
  };

  // ✅ 스와이프 네비게이션 적용 (`headerTabMenuArr` 기준)
  const { swipeHandlers } = useSwipeNavigation(
    'swipeableLayout',
    headerTabMenuArr,
    currentTab.key,
    handleTabChange
  );

  return (
    <>
      <Tabs tabList={headerTabList} activeTab={currentTab} />
      <main {...swipeHandlers} className="content" ref={scrollContainerRef}>
        {children}
        <TopButton scrollContainerRef={scrollContainerRef} />
      </main>
    </>
  );
}
