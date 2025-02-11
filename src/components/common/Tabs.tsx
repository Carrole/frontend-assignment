'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export type TabProps<T = string> = { key: T; label: string };

export interface TabsProps<T extends TabProps> {
  tabList: T[];
  activeTab: T;
}

export const Tabs = <T extends TabProps>({
  tabList,
  activeTab,
}: TabsProps<T>) => {
  const activeTabRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeTab]);

  return (
    <div className="tabs">
      {tabList.map((tab) => (
        <Link
          key={tab.key}
          ref={tab.key === activeTab.key ? activeTabRef : null}
          className={`tab ${tab.key === activeTab.key ? 'active' : ''}`}
          href={`/${tab.key}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};
