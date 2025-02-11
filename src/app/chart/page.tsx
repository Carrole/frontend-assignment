import { Carousel } from '@/components/common/Carousel';
import { InfiniteScrollList } from '@/components/contentList/InfiniteScrollList';
import { CarouselData } from '@/constants/carouselData';

export default function ChartPage() {
  return (
    <div>
      <Carousel items={CarouselData} />
      <h5 className="font-large">콘텐츠 큐레이션</h5>
      <InfiniteScrollList />
    </div>
  );
}
