import { useSwipeable } from 'react-swipeable';

export const useSwipeNavigation = <T>(
  items: T[],
  currentItem: T,
  onChange: (newItem: T) => void
) => {
  const currentIndex = items.findIndex((item) => item === currentItem);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < items.length - 1) {
        onChange(items[currentIndex + 1]); // 다음 아이템으로 변경
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        onChange(items[currentIndex - 1]); // 이전 아이템으로 변경
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return { swipeHandlers };
};
