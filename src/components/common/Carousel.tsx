'use client';

import { useState } from 'react';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';
import Image from 'next/image';

export const Carousel = ({
  items,
}: {
  items: { title: string; isActive: boolean; period: string; image: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { swipeHandlers } = useSwipeNavigation(
    'carousel',
    items,
    items[currentIndex],
    (newItem) => setCurrentIndex(items.indexOf(newItem)),
    true
  );

  return (
    <div {...swipeHandlers}>
      <div className="carousel-content">
        <span
          className={`font-medium carousel-status ${items[currentIndex].isActive ? 'active' : 'inactive'}`}
        >
          {items[currentIndex].isActive ? '진행 중' : '완료'}
        </span>

        <div className="carousel-image-wrapper">
          <Image
            className="carousel-image"
            src={items[currentIndex].image}
            alt={items[currentIndex].title}
            fill
            objectFit="cover"
          />
        </div>

        <div className="carousel-text">
          <div className="font-large ellipsis">{items[currentIndex].title}</div>
          <div className="font-medium carousel-period">
            {items[currentIndex].period}
          </div>
        </div>
      </div>

      {/* 인디케이터 */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <div
            key={items[index].title}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
