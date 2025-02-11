'use client';

import { useState, useRef, useCallback } from 'react';
import { List } from '@/components/contentList/List';

const initData = Array.from({ length: 20 }, (_, i) => ({
  imgPath: `/images/item.jpg`,
  label: `Item ${i + 1}`,
}));

export const InfiniteScrollList = () => {
  const [items, setItems] =
    useState<{ imgPath: string; label: string }[]>(initData);
  const [loading, setLoading] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const loadMoreItems = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    setItems((prev) => {
      const prevLength = prev.length;
      const newItems = Array.from({ length: 10 }, (_, i) => ({
        imgPath: `/images/item.jpg`,
        label: `Item ${prevLength + i + 1}`,
      }));
      return [...prev, ...newItems];
    });

    setLoading(false);
  }, [loading]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMoreItems();
          }
        },
        { threshold: 1.0 } // 완전히 화면에 들어왔을 때 로드
      );

      if (node) observer.current.observe(node);
    },
    [loadMoreItems, loading]
  );
  return (
    <div className="infinite-scroll-list">
      {items.map((item, index) => (
        <div
          key={item.label}
          ref={index === items.length - 1 ? lastItemRef : null}
        >
          <List item={item} />
        </div>
      ))}
      {loading && <p className="loading font-medium">Loading...</p>}
    </div>
  );
};
