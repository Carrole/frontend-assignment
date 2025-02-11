import { useSwipeable } from 'react-swipeable';

const activeSwipeRef = { current: null as string | null }; // 현재 실행 중인 스와이프 ID를 추적

export const useSwipeNavigation = <T>(
  id: string,
  items: T[],
  currentItem: T,
  onChange: (newItem: T) => void,
  loop: boolean = false
) => {
  const currentIndex = items.findIndex((item) => item === currentItem);

  const swipeHandlers = useSwipeable({
    onSwiping: () => {
      if (!activeSwipeRef.current) {
        activeSwipeRef.current = id; // 스와이프 시작 시 ID 등록
      }
    },
    onSwipedLeft: () => {
      if (activeSwipeRef.current !== id) return; // 다른 스와이프 실행 방지
      if (currentIndex < items.length - 1) {
        onChange(items[currentIndex + 1]);
      } else if (loop) {
        onChange(items[0]);
      }
      activeSwipeRef.current = null;
    },
    onSwipedRight: () => {
      if (activeSwipeRef.current !== id) return;
      if (currentIndex > 0) {
        onChange(items[currentIndex - 1]);
      } else if (loop) {
        onChange(items[items.length - 1]);
      }
      activeSwipeRef.current = null;
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return { swipeHandlers };
};
