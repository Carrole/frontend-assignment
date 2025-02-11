'use client';

import { RefObject } from 'react';

export const TopButton = ({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}) => {
  const scrollToTop = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button type="button" onClick={scrollToTop} className="scrollToTop">
      ↑
    </button>
  );
};
