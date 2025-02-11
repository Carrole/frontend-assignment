import { Carousel } from '@/components/common/Carousel';
import { InfiniteScrollList } from '@/components/ContentList/InfiniteScrollList';
import { CarouselData } from '@/constants/carouselData';

export default function ChartPage() {
  return (
    <div>
      <Carousel items={CarouselData} />
    </div>
  );
}
