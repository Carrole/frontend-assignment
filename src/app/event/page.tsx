import { Carousel } from '@/components/common/Carousel';
import { CarouselData } from '@/constants/carouselData';
import { InfiniteScrollList } from '@/components/contentList/InfiniteScrollList';

export default function EventPage() {
  return (
    <div>
      <Carousel items={CarouselData} />
      <h5 className="font-large">이벤트 페이지</h5>
      <InfiniteScrollList />
    </div>
  );
}
